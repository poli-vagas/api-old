export class RegisterCompanyCommand {
  constructor(
    public readonly name: string,
    public readonly website: string | null,
  ) {}
}
