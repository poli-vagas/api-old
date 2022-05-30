export class CompanyException {
  private constructor(
    public readonly message: string,
    public readonly context: object,
  ) {}

  public static duplicateCompany(name: string): CompanyException {
    return new CompanyException('Cannot have two companies with same name.', {
      name,
    });
  }
}
