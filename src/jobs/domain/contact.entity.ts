import { Column } from 'typeorm';

export class Contact {
  @Column()
  private email: string | null;

  @Column()
  private linkedin: string | null;

  @Column()
  private url: string | null;

  private constructor(
    email: string | null,
    linkedin: string | null,
    url: string | null,
  ) {
    this.email = email;
    this.linkedin = linkedin;
    this.url = url;
  }

  public static fromStrings(
    email: string | null,
    linkedin: string | null,
    url: string | null,
  ) {
    return new Contact(email, linkedin, url);
  }
}
