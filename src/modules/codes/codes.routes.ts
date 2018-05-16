import * as validation from './codes.validation'
import { createCode, getCodeById } from './codes.controller'

export default [
    {
        method: 'post',
        path: '/codes',
        validate: validation.createCode,
        handler: createCode
    },
    {
        method: 'get',
        path: '/codes/:id',
        session: true,
        validate: validation.getCodeById,
        handler: getCodeById
    }
]