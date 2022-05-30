export class CompanyException {
  private constructor(
    public readonly message: string,
    public readonly context: object,
  ) {}
}
