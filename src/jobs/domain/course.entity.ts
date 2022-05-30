import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class Course {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;
}
