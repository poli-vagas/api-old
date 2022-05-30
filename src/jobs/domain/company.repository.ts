import { CompanyId } from './company-id';
import { Company } from './company.entity';

export interface CompanyRepository {
  findAll(): Promise<Company[]>;
  findOneById(id: CompanyId): Promise<Company>;
  findByName(name: string): Promise<Company[]>;
  save(company: Company): Promise<void>;
}
