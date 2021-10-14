import { MongoMemoryServer } from 'mongodb-memory-server'
import mongoose from 'mongoose'

let mongodb: MongoMemoryServer

beforeAll(async () => {
  mongodb = await MongoMemoryServer.create()
  await mongoose.connect(mongodb.getUri())
})

beforeEach(async () => {
  jest.clearAllMocks()
  const collections = await mongoose.connection.db.collections()

  for (let collection of collections) {
    await collection.deleteMany({})
  }
})

afterAll(async () => {
  await mongodb.stop()
  await mongoose.connection.close()
})
