import { Job } from './job.entity';

export interface JobRepository {
  findAll(): Promise<Job[]>;

  save(job: Job): Promise<void>;
}
