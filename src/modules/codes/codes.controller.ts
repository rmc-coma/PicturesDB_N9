import { omit } from 'lodash';
import { N9Error } from '@neo9/n9-node-utils';
import { RandomString } from 'randomstring'
import * as Codes from './codes.service'

export async function createCode(req, res) {
    const codeBody = req.body;
    codeBody.email = codeBody.email.toLowerCase();
    const codeExists:Boolean = await Codes.getByEmail(codeBody.email);
    if (codeExists) {
        throw new N9Error('code-already-exists', 409);
    }
    var tmp:any;
    do {
        codeBody.value = RandomString(8);
        tmp = await Codes.getByValue(codeBody.value);
    } while (tmp != null);
    const code = await Codes.insert(codeBody);
    res.json(code);
}

export async function getCodeById(req, res) {
    const codeId = req.params.id;

    const code = await Codes.getById(codeId);
    if (!code) {
        throw new N9Error('code-not-found', 404)
    }
    res.json(code);
}