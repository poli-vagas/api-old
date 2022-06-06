import { Inject } from '@nestjs/common';
import { CompanyId } from '../domain/company-id';
import { Contact } from '../domain/contact.entity';
import { JobId } from '../domain/job-id';
import { Job } from '../domain/job.entity';
import { JobRepository } from '../domain/job.repository';
import { RegisterJobCommand } from './register-job.command';

export class RegisterJobHandler {
  constructor(@Inject('JobRepository') private jobRepository: JobRepository) {}

  async execute(command: RegisterJobCommand): Promise<JobId> {
    const {
      title,
      description,
      companyId,
      type,
      tags,
      courses,
      hoursPerWeek,
      salary,
      workspace,
      contact,
    } = command;

    const id = new JobId();
    const job = Job.register(
      id,
      title,
      description,
      new CompanyId(companyId),
      type,
      tags,
      courses,
      Contact.fromStrings(contact?.email, contact?.phone, contact?.url),
      hoursPerWeek,
      salary,
      workspace,
    );

    await this.jobRepository.save(job);

    return id;
  }
}
