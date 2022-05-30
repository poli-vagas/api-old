import * as Joi from 'joi';
import { Type } from '../domain/type.entity';
import { Workspace } from '../domain/workspace.entity';

const schema = Joi.object({
  description: Joi.string().required(),
  companyId: Joi.string().required(),
  type: Joi.string()
    .equal(...Object.values(Type))
    .required(),
  hoursPerWeek: Joi.number().integer().optional(),
  salary: Joi.number().integer().optional(),
  workspace: Joi.string()
    .equal(...Object.values(Workspace))
    .optional(),
  contact: Joi.object({
    email: Joi.string().email().optional(),
    phone: Joi.string().optional(),
    url: Joi.string().uri().optional(),
  }).optional(),
});

export default schema;
