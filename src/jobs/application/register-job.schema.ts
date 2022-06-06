import * as Joi from 'joi';
import { validCourses } from '../domain/course';
import { validTypes } from '../domain/type';
import { validWorkspaces } from '../domain/workspace';

const schema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  hardSkills: Joi.string().optional(),
  softSkills: Joi.string().optional(),
  companyId: Joi.string().required(),
  type: Joi.string()
    .equal(...validTypes)
    .required(),
  tags: Joi.array().items(Joi.string()).required(),
  courses: Joi.array()
    .items(Joi.string().equal(...validCourses))
    .required(),
  hoursPerWeek: Joi.number().integer().optional(),
  salary: Joi.number().integer().optional(),
  workspace: Joi.string()
    .equal(...validWorkspaces)
    .optional(),
  contact: Joi.object({
    email: Joi.string().email().optional(),
    linkedin: Joi.string().uri().optional(),
    url: Joi.string().uri().optional(),
  }).optional(),
});

export default schema;
