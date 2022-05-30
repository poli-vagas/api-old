import { Inject } from '@nestjs/common';
import { CompanyId } from '../domain/company-id';
import { Contact } from '../domain/contact.entity';
import { CourseId } from '../domain/course-id';
import { JobId } from '../domain/job-id';
import { Job } from '../domain/job.entity';
import { JobRepository } from '../domain/job.repository';
import { Type } from '../domain/type.entity';
import { Workspace } from '../domain/workspace.entity';
import { RegisterJobCommand } from './register-job.command';

export class RegisterJobHandler {
  constructor(@Inject('JobRepository') private jobRepository: JobRepository) {}

  async execute(command: RegisterJobCommand): Promise<JobId> {
    const {
      description,
      companyId,
      type,
      hoursPerWeek,
      salary,
      workspace,
      courses,
      contact,
    } = command;

    const id = new JobId();
    const job = Job.register(
      id,
      description,
      new CompanyId(companyId),
      Type[type],
      hoursPerWeek,
      salary,
      Workspace[workspace],
      courses?.map((c) => new CourseId(c)) ?? [],
      Contact.fromStrings(contact?.email, contact?.phone, contact?.url),
    );

    await this.jobRepository.save(job);

    return id;
  }
}
