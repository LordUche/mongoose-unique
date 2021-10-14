import { User } from './User'

interface UserInputPayload {
  name: string
  email: string
}

export function createUser(payload: UserInputPayload) {
  return User.create(payload)
}
