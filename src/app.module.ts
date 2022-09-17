import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobsController } from './jobs/jobs.controller';
import { Job } from './jobs/entities/job.entity';
import { JobsService } from './jobs/jobs.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'nest',
      password: 'app',
      database: 'jobs_db',
      entities: [Job],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Job]),
  ],
  controllers: [AppController, JobsController],
  providers: [AppService, JobsService],
})
export class AppModule {}
