import Joi from "joi";

export const getListSchema = Joi.array().items(Joi.object().keys({
    id: Joi.number().required(),
    title: Joi.string().required(),
    completed: Joi.boolean().required(),
}).unknown(true));
