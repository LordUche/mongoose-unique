import { Document, model, Schema } from 'mongoose'

export interface UserDoc extends Document {
  name: string
  email: string
}

const userSchema = new Schema<UserDoc>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true }
})

export const User = model<UserDoc>('User', userSchema)
