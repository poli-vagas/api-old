import * as Joi from 'joi';

const schema = Joi.object({
  name: Joi.string().required(),
  website: Joi.string().uri().optional(),
});

export default schema;
