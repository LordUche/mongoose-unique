import mongoose from 'mongoose'
import { createUser } from './create-user'

mongoose
  .connect('mongodb://localhost/unique-test')
  .then(() => {
    console.log('Database connected!')
    return createUser({ name: 'John Doe', email: 'jdoe@example.com' })
  })
  .then(createUser)
  .catch(console.log)
