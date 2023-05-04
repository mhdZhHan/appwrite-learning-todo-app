import { Client, Account, Databases } from 'appwrite'

const client = new Client()

client.setEndpoint('https://cloud.appwrite.io/v1').setProject('6452858c3b4369af75da')

export const account = new Account(client)

// Database
export const databases = new Databases(client, "6452898c7bc71101e464")