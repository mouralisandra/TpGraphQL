import { createServer } from 'node:http'
import { createYoga } from 'graphql-yoga'
import { createPubSub } from '@graphql-yoga/subscription'
import { schema } from './src/Schemas/schemas'
import { db } from './src/DataBase/DataBase'
type PubSubChannels = {
  CVUpdates
}
const pubSub = createPubSub<PubSubChannels>()
const yoga = createYoga({ schema , context : { db , pubSub } })
const server = createServer(yoga)
server.listen(4000, () => {
  console.info('TP GraphQL http://localhost:4000/graphql')
})