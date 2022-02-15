import { ChallengesRepository } from "../../../../src/application/repositories/challenges-repository";
import { Challenge } from "../../../../src/domain/entities/challenge";

export class InMemoryChallengesRepository implements ChallengesRepository {
  public challenges: Challenge[] = []

  async findById(id: string): Promise<Challenge | null> {
    const challenge = this.challenges.find(challenge => challenge.id === id)

    if (!challenge) { return null }

    return challenge
  }
}