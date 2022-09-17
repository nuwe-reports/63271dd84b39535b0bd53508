import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobsController } from './jobs/jobs.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'nest',
      password: 'app',
      database: 'jobs_db',
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [AppController, JobsController],
  providers: [AppService],
})
export class AppModule {}
