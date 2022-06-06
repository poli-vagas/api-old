import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { ListJobsHandler } from 'src/jobs/application/list-jobs/list-jobs.handler';
import { RegisterJobCommand } from 'src/jobs/application/register-job.command';
import { RegisterJobHandler } from 'src/jobs/application/register-job.handler';
import { JoiValidationPipe } from 'src/shared/http/joi-validation.pipe';
import registerJobSchema from '../../application/register-job.schema';

@Controller('jobs')
export class JobsController {
  constructor(
    private readonly listJobsHandler: ListJobsHandler,
    private readonly registerJobHandler: RegisterJobHandler,
  ) {}

  @Get()
  async listAll() {
    const jobs = await this.listJobsHandler.execute();

    return jobs.map((job) => ({
      id: job.getId(),
      title: job.getTitle(),
      description: job.getDescription(),
      companyId: job.getCompanyId(),
      type: job.getType(),
      tags: job.getTags(),
      courses: job.getCourses(),
      contact: job.getContact(),
      hoursPerWeek: job.getHoursPerWeek(),
      salary: job.getSalary(),
      workspace: job.getWorkspace(),
      hardSkills: job.getHardSkills(),
      softSkills: job.getSoftSkills(),
    }));
  }

  @Post()
  @UsePipes(new JoiValidationPipe(registerJobSchema))
  async create(@Body() command: RegisterJobCommand) {
    try {
      const id = await this.registerJobHandler.execute(command);

      return { id };
    } catch (exception) {
      console.log(exception);
      throw exception;
    }
  }
}
