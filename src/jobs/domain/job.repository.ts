import { Job } from './job.entity';

export interface JobRepository {
  save(job: Job): Promise<void>;
}
