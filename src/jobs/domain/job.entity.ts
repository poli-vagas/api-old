import { Column, CreateDateColumn, Entity, ObjectIdColumn } from 'typeorm';
import { CompanyId } from './company-id';
import { Contact } from './contact.entity';
import { Course } from './course';
import { JobId } from './job-id';
import { Type } from './type';
import { Workspace } from './workspace';

@Entity()
export class Job {
  @ObjectIdColumn()
  private _id: JobId;

  @Column()
  public readonly title: string;

  @Column()
  public readonly description: string;

  @Column()
  public readonly companyId: CompanyId;

  @Column()
  public readonly type: Type;

  @Column()
  public readonly tags: string[];

  @Column()
  public readonly courses: Course[];

  @Column(() => Contact)
  public readonly contact: Contact;

  @Column()
  public readonly hoursPerWeek?: number;

  @Column()
  public readonly salary?: number;

  @Column()
  public readonly workspace?: Workspace;

  @Column()
  public readonly hardSkills: string;

  @Column()
  public readonly softSkills: string;

  @CreateDateColumn()
  public readonly createdAt: Date;

  private constructor(
    id: JobId,
    title: string,
    description: string,
    companyId: CompanyId,
    type: Type,
    tags: string[],
    courses: Course[],
    contact: Contact,
    hoursPerWeek?: number,
    salary?: number,
    workspace?: Workspace,
    hardSkills?: string,
    softSkills?: string,
  ) {
    this._id = id;
    this.title = title;
    this.description = description;
    this.companyId = companyId;
    this.type = type;
    this.tags = tags;
    this.courses = courses;
    this.contact = contact;
    this.hoursPerWeek = hoursPerWeek;
    this.salary = salary;
    this.workspace = workspace;
    this.hardSkills = hardSkills;
    this.softSkills = softSkills;
  }

  public static register(
    id: JobId,
    title: string,
    description: string,
    companyId: CompanyId,
    type: Type,
    tags: string[],
    courses: Course[],
    contact: Contact,
    hoursPerWeek?: number,
    salary?: number,
    workspace?: Workspace,
    hardSkills?: string,
    softSkills?: string,
  ): Job {
    return new Job(
      id,
      title,
      description,
      companyId,
      type,
      tags,
      courses,
      contact,
      hoursPerWeek,
      salary,
      workspace,
      hardSkills,
      softSkills,
    );
  }

  public id(): JobId {
    return this._id;
  }
}
