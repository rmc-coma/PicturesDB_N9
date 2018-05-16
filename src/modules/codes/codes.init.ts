import { Db, Collection } from 'mongodb'

export default async ({ log }) => {
    log = log.module('codes')
    log.info('Ensuring unique code index')
    const codes: Collection = global.db.collection('codes')
    await codes.createIndex({ email: 1, value: 1 }, { unique: true })
}
