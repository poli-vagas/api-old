import { Column } from 'typeorm';

export class Contact {
  @Column()
  private email: string | null;

  @Column()
  private phone: string | null;

  @Column()
  private url: string | null;

  private constructor(
    email: string | null,
    phone: string | null,
    url: string | null,
  ) {
    this.email = email;
    this.phone = phone;
    this.url = url;
  }

  public static fromStrings(
    email: string | null,
    phone: string | null,
    url: string | null,
  ) {
    return new Contact(email, phone, url);
  }
}
