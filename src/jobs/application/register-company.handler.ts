import { Inject } from '@nestjs/common';
import { CompanyId } from '../domain/company-id';
import { Company } from '../domain/company.entity';
import { CompanyRepository } from '../domain/company.repository';
import { CompanyException } from '../domain/exceptions/company.exception';
import { RegisterCompanyCommand } from './register-company.command';

export class RegisterCompanyHandler {
  constructor(
    @Inject('CompanyRepository') private companyRepository: CompanyRepository,
  ) {}

  async execute(command: RegisterCompanyCommand): Promise<CompanyId> {
    const { name, website } = command;

    const othersWithSameName = await this.companyRepository.findByName(name);
    if (othersWithSameName.length > 0) {
      throw CompanyException.duplicateCompany(name);
    }

    const id = new CompanyId();
    const company = Company.register(id, name, website);

    await this.companyRepository.save(company);

    return id;
  }
}
