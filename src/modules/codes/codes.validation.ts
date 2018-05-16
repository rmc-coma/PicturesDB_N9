import * as Joi from 'joi'

export const createCode = {
    body: Joi.object().keys({
        email: Joi.string().email().required(),
        value: Joi.string().min(8).required()
    })
}

export const getCodeById = {
    params: Joi.object().keys({
        id: Joi.string().length(24).alphanum()
    })
}