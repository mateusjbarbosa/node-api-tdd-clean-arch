import { Challenge } from "../../../src/domain/entities/challenge"
import { Student } from "../../../src/domain/entities/student"

import { CreateChallengeSubmission } from "../../../src/application/usecases/create-challenge-submission"

import { InMemoryChallengesRepository } from "../repositories/in-memory/challenges-repository"
import { InMemoryStudentsRepository } from "../repositories/in-memory/students-repository"

describe('CreateChallengeSubmission UseCase', () => {
  it('should be able to create a new challenge submission', async () => {
    const challengesRepository = new InMemoryChallengesRepository()
    const studentsRepository = new InMemoryStudentsRepository()
    const sut = new CreateChallengeSubmission(challengesRepository, studentsRepository)

    const challenge = Challenge.create({
      instructionUrl: 'https://domain.com/any-challenge',
      title: "Any Challenge"
    })
    challengesRepository.challenges.push(challenge)

    const student = Student.create({
      email: 'any.student@email.com',
      name: 'Any Student'
    })
    studentsRepository.students.push(student)

    const response = await sut.execute({
      challengeId: challenge.id,
      studentId: student.id,
    })

    expect(response).toBeTruthy()
  })
})