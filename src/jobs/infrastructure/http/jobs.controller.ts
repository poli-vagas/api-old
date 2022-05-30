import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { RegisterJobCommand } from 'src/jobs/application/register-job.command';
import { RegisterJobHandler } from 'src/jobs/application/register-job.handler';
import { JoiValidationPipe } from 'src/shared/http/joi-validation.pipe';
import registerJobSchema from '../../application/register-job.schema';

@Controller('jobs')
export class JobsController {
  constructor(private readonly registerJobHandler: RegisterJobHandler) {}

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
