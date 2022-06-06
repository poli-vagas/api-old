import { Inject } from '@nestjs/common';
import { Job } from 'src/jobs/domain/job.entity';
import { JobRepository } from 'src/jobs/domain/job.repository';

export class ListJobsHandler {
  constructor(@Inject('JobRepository') private jobRepository: JobRepository) {}

  async execute(): Promise<Job[]> {
    return this.jobRepository.findAll();
  }
}
