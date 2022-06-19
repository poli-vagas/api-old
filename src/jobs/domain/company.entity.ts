import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { CompanyId } from './company-id';

@Entity()
export class Company {
  @ObjectIdColumn()
  private _id: CompanyId;

  @Column()
  public readonly name: string;

  @Column()
  public readonly website: string | null;

  private constructor(id: CompanyId, name: string, website: string | null) {
    this._id = id;
    this.name = name;
    this.website = website;
  }

  public static register(
    id: CompanyId,
    name: string,
    website: string | null,
  ): Company {
    return new Company(id, name, website);
  }

  public id(): CompanyId {
    return this._id;
  }
}
