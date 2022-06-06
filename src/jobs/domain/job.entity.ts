import { Column, Entity, ObjectIdColumn } from 'typeorm';
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
  private title: string;

  @Column()
  private description: string;

  @Column()
  private companyId: CompanyId;

  @Column()
  private type: Type;

  @Column()
  private tags: string[];

  @Column()
  private courses: Course[];

  @Column(() => Contact)
  private contact: Contact;

  @Column()
  private hoursPerWeek?: number;

  @Column()
  private salary?: number;

  @Column()
  private workspace?: Workspace;

  @Column()
  private hardSkills: string;

  @Column()
  private softSkills: string;

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

  public getId(): JobId {
    return this._id;
  }

  public getTitle(): string {
    return this.title;
  }

  public getDescription(): string {
    return this.description;
  }

  public getCompanyId(): CompanyId {
    return this.companyId;
  }

  public getType(): Type {
    return this.type;
  }

  public getTags(): string[] {
    return this.tags;
  }

  public getCourses(): Course[] {
    return this.courses;
  }

  public getContact(): Contact {
    return this.contact;
  }

  public getHoursPerWeek(): number {
    return this.hoursPerWeek;
  }

  public getSalary(): number {
    return this.salary;
  }

  public getWorkspace(): Workspace {
    return this.workspace;
  }

  public getHardSkills(): string {
    return this.hardSkills;
  }

  public getSoftSkills(): string {
    return this.softSkills;
  }
}
