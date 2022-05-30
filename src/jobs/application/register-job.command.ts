type Contact = {
  email: string | null;
  phone: string | null;
  url: string | null;
};

export class RegisterJobCommand {
  constructor(
    public readonly description: string,
    public readonly companyId: string,
    public readonly type: string,
    public readonly hoursPerWeek: number | null,
    public readonly salary: number | null,
    public readonly workspace: string | null,
    public readonly courses: string[],
    public readonly contact: Contact,
  ) {}
}
