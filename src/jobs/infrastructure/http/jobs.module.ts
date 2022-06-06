import { Module } from '@nestjs/common';
import { ListJobsHandler } from 'src/jobs/application/list-jobs/list-jobs.handler';
import { RegisterJobHandler } from 'src/jobs/application/register-job.handler';
import { DataSource } from 'typeorm';
import { ListCompaniesHandler } from '../../application/list-companies.handler';
import { RegisterCompanyHandler } from '../../application/register-company.handler';
import { MongoCompanyRepository } from '../mongodb/company.repository';
import { MongoJobRepository } from '../mongodb/job.repository';
import { CompaniesController } from './companies.controller';
import { JobsController } from './jobs.controller';

@Module({
  controllers: [CompaniesController, JobsController],
  providers: [
    ListJobsHandler,
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
