import { Module } from '@nestjs/common';
import { JobsModule } from './jobs/infrastructure/http/jobs.module';

@Module({
  imports: [JobsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
