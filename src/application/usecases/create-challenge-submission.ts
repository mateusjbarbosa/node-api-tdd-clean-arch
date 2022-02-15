import { Submission } from "../../domain/entities/submission"

import { ChallengesRepository } from "../repositories/challenges-repository"
import { StudentsRepository } from "../repositories/students-repository"

type CreateChallengeSubmissionRequest = {
  challengeId: string
  studentId: string
}

export class CreateChallengeSubmission {
  constructor(
    private challengesRepository: ChallengesRepository,
    private studentsRepository: StudentsRepository
  ) { }

  public async execute({ challengeId, studentId }: CreateChallengeSubmissionRequest) {
    const challenge = await this.challengesRepository.findById(challengeId)
    const student = await this.studentsRepository.findById(studentId)

    if (!challenge) {
      throw new Error('Challenge does not exists')
    }

    if (!student) {
      throw new Error('Student does not exists')
    }

    const submission = Submission.create({
      challengeId,
      studentId
    })

    return submission
  }
}