import { Inject } from '@nestjs/common';
import { DataSource, MongoRepository } from 'typeorm';
import { JobRepository } from 'src/jobs/domain/job.repository';
import { Job } from 'src/jobs/domain/job.entity';

export class MongoJobRepository implements JobRepository {
  private repository: MongoRepository<Job>;

  constructor(@Inject('DataSource') dataSource: DataSource) {
    this.repository = dataSource.getMongoRepository(Job);
  }

  public async save(job: Job): Promise<void> {
    this.repository.save(job);
  }
}
