import { createSchema } from 'graphql-yoga'
import fs from "fs"
import path from "path"
import { Mutation } from './queries/Mutations'
import { Subscription } from './queries/Subscriptions'
import {Query,Skill, CV } from './queries/Resolvers'
 
export const schema = createSchema({
  typeDefs: fs.readFileSync(path.join(__dirname,"schemas/schema.graphql"),"utf-8"),
  resolvers: {
    Skill,
    CV,
    Query,
    Mutation,
    Subscription

  }
})