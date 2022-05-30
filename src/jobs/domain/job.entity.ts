import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { CompanyId } from './company-id';
import { Contact } from './contact.entity';
import { CourseId } from './course-id';
import { JobId } from './job-id';
import { Type } from './type.entity';
import { Workspace } from './workspace.entity';

@Entity()
export class Job {
  @ObjectIdColumn()
  private _id: JobId;

  @Column()
  private description: string;

  @Column()
  private companyId: CompanyId;

  @Column()
  private type: Type;

  @Column()
  private hoursPerWeek: number | null;

  @Column()
  private salary: number | null;

  @Column()
  private workspace: Workspace | null;

  @Column()
  private courses: CourseId[];

  @Column(() => Contact)
  private contact: Contact;

  private constructor(
    id: JobId,
    description: string,
    companyId: CompanyId,
    type: Type,
    hoursPerWeek: number | null,
    salary: number | null,
    workspace: Workspace | null,
    courses: CourseId[],
    contact: Contact,
  ) {
    this._id = id;
    this.description = description;
    this.companyId = companyId;
    this.type = type;
    this.hoursPerWeek = hoursPerWeek;
    this.salary = salary;
    this.workspace = workspace;
    this.courses = courses;
    this.contact = contact;
  }

  public static register(
    id: JobId,
    description: string,
    companyId: CompanyId,
    type: Type,
    hoursPerWeek: number | null,
    salary: number | null,
    workspace: Workspace | null,
    courses: CourseId[],
    contact: Contact,
  ): Job {
    return new Job(
      id,
      description,
      companyId,
      type,
      hoursPerWeek,
      salary,
      workspace,
      courses,
      contact,
    );
  }
}
