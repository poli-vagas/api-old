import { Inject } from '@nestjs/common';
import { Company } from '../domain/company.entity';
import { CompanyRepository } from '../domain/company.repository';

export class ListCompaniesHandler {
  constructor(
    @Inject('CompanyRepository') private companyRepository: CompanyRepository,
  ) {}

  async execute(): Promise<Company[]> {
    return this.companyRepository.findAll();
  }
}
