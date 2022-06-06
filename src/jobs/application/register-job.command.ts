import { Course } from '../domain/course';
import { Type } from '../domain/type';
import { Workspace } from '../domain/workspace';

type Contact = {
  email?: string;
  phone?: string;
  url?: string;
};

export class RegisterJobCommand {
  constructor(
    public readonly title: string,
    public readonly description: string,
    public readonly companyId: string,
    public readonly type: Type,
    public readonly tags: string[],
    public readonly courses: Course[],
    public readonly contact: Contact,
    public readonly hoursPerWeek?: number,
    public readonly salary?: number,
    public readonly workspace?: Workspace,
  ) {}
}
