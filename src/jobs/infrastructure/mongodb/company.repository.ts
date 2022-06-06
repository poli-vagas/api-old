import { Inject } from '@nestjs/common';
import { CompanyId } from 'src/jobs/domain/company-id';
import { Company } from 'src/jobs/domain/company.entity';
import { CompanyRepository } from 'src/jobs/domain/company.repository';
import { DataSource, MongoRepository } from 'typeorm';

export class MongoCompanyRepository implements CompanyRepository {
  private repository: MongoRepository<Company>;

  constructor(@Inject('DataSource') dataSource: DataSource) {
    this.repository = dataSource.getMongoRepository(Company);
  }

  public async findAll(): Promise<Company[]> {
    return await this.repository.find();
  }

  public async findOneById(id: CompanyId): Promise<Company> {
    return await this.repository.findOneBy({
      where: {
        id: { $eq: id },
      },
    });
  }

  public async findByName(name: string): Promise<Company[]> {
    return await this.repository.findBy({
      where: {
        name: { $eq: name },
      },
    });
  }

  public async save(company: Company): Promise<void> {
    this.repository.save(company);
  }
}
