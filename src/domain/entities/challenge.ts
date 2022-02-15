import { Entity } from "../../core/domain/entity";

type ChallengeProps = {
  instructionUrl: string
  title: string
}

export class Challenge extends Entity<ChallengeProps> {
  private constructor(props: ChallengeProps, id?: string) {
    super(props, id)
  }

  get id() { return this._id }

  static create(props: ChallengeProps, id?: string) {
    const challenge = new Challenge(props, id)

    return challenge
  }
}