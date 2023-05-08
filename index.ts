import { createServer } from 'node:http'
import { createYoga } from 'graphql-yoga'
import { createPubSub } from '@graphql-yoga/subscription'
import { schema } from './src/Schemas/schemas'
import { db } from './src/DataBase/DataBase'
type PubSubChannels = {
  CVUpdates
}
const pubSub = createPubSub<PubSubChannels>()
// Create a Yoga instance with a GraphQL schema.
const yoga = createYoga({ schema , context : { db , pubSub } })
// Pass it into a server to hook into request handlers.
const server = createServer(yoga)
// Start the server and you're done!
server.listen(3000, () => {
  console.info('TP GraphQL http://localhost:3000/graphql')
})