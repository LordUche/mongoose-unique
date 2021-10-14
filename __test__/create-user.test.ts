import { createUser } from '../create-user'
import { User } from '../User'

const payload = { name: 'John Doe', email: 'jdoe@example.com' }

it('should create a user', async () => {
  await expect(createUser(payload)).resolves.toBeInstanceOf(User)
})

it('should throw duplicate key error for existing email', async () => {
  await createUser(payload)
  await expect(createUser(payload)).rejects.toMatchObject({
    index: 0,
    code: 11000,
    keyPattern: { email: 1 },
    keyValue: { email: 'jdoe@example.com' }
  })
})
