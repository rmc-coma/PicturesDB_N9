import { Db, Collection, ObjectID, FindOneOptions } from 'mongodb'

import { oid } from '../mongo'
import { RandomString } from 'randomstring';

const db: Db = global.db;
const codes: Collection = db.collection('codes')

export async function insert(code) {
    code.createdAt = new Date();
    await codes.insertOne(code);
    return (code);
}

export async function getById(codeId: string) {
    return await findOne({ _id: oid(codeId) });
}

export async function getByEmail(email: string) {
    return await findOne({ email });
}

export async function getByValue(value: string) {
    return await findOne({ value });
}

export async function findOne(query: object, options?: FindOneOptions) {
    return await codes.findOne(query, options);
}

export async function deletebyId(codeId, code?) {
    await codes.findOneAndDelete(
        { _id: oid(codeId) }
    )
}