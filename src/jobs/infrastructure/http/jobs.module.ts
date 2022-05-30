import { Module } from '@nestjs/common';
import { CompaniesController } from './companies.controller';
import { RegisterCompanyHandler } from '../../application/register-company.handler';
import { MongoCompanyRepository } from '../mongodb/company.repository';
import { DataSource } from 'typeorm';
import { ListCompaniesHandler } from '../../application/list-companies.handler';
import { RegisterJobHandler } from 'src/jobs/application/register-job.handler';
import { MongoJobRepository } from '../mongodb/job.repository';
import { JobsController } from './jobs.controller';

@Module({
  controllers: [CompaniesController, JobsController],
  providers: [
    ListCompaniesHandler,
    RegisterCompanyHandler,
    RegisterJobHandler,
    { provide: 'CompanyRepository', useClass: MongoCompanyRepository },
    { provide: 'JobRepository', useClass: MongoJobRepository },
    {
      provide: 'DataSource',
      useFactory: async () => {
        const dataSource = new DataSource({
          type: 'mongodb',
          url: 'mongodb+srv://poli-vagas:Ktjgy3t363UoYg6H@cluster0.og6ocxg.mongodb.net',
          database: 'jobs',
          useUnifiedTopology: true,
          useNewUrlParser: true,
          entities: [__dirname + '/../../domain/*.entity{.ts,.js}'],
          // synchronize: true,
        });

        return dataSource.initialize();
      },
    },
  ],
})
export class JobsModule {}
