import {
  Controller,
  Get,
  Post,
  Body,
  UsePipes,
  BadRequestException,
} from '@nestjs/common';
import { JoiValidationPipe } from 'src/shared/http/joi-validation.pipe';
import { ListCompaniesHandler } from 'src/jobs/application/list-companies.handler';
import { RegisterCompanyCommand } from 'src/jobs/application/register-company.command';
import { RegisterCompanyHandler } from 'src/jobs/application/register-company.handler';
import { Company } from 'src/jobs/domain/company.entity';
import { CompanyException } from 'src/jobs/domain/exceptions/company.exception';
import registerCompanySchema from '../../application/register-company.schema';

@Controller('companies')
export class CompaniesController {
  constructor(
    private readonly listCompaniesHandler: ListCompaniesHandler,
    private readonly registerCompanyHandler: RegisterCompanyHandler,
  ) {}

  @Get()
  async listAll() {
    return (await this.listCompaniesHandler.execute()).map(
      (company: Company) => ({
        id: company.getId(),
        name: company.getName(),
        website: company.getWebsite(),
      }),
    );
  }

  @Post()
  @UsePipes(new JoiValidationPipe(registerCompanySchema))
  async create(@Body() registerCompany: RegisterCompanyCommand) {
    try {
      const id = await this.registerCompanyHandler.execute(registerCompany);

      return { id };
    } catch (exception) {
      if (exception instanceof CompanyException) {
        throw new BadRequestException(exception.message);
      } else {
        throw exception;
      }
    }
  }
}
