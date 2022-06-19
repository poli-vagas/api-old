import { Inject } from '@nestjs/common';
import { Job } from 'src/jobs/domain/job.entity';
import { JobRepository } from 'src/jobs/domain/job.repository';
import { DataSource, MongoRepository } from 'typeorm';

export class MongoJobRepository implements JobRepository {
  private repository: MongoRepository<Job>;

  constructor(@Inject('DataSource') dataSource: DataSource) {
    this.repository = dataSource.getMongoRepository(Job);
  }

  public async findAll(): Promise<Job[]> {
    return await this.repository.find({
      order: { createdAt: 'DESC' },
    });
  }

  public async save(job: Job): Promise<void> {
    this.repository.save(job);
  }
}
