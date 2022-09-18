import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobsController } from './jobs/jobs.controller';
import { Job } from './jobs/entities/job.entity';
import { JobsService } from './jobs/jobs.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { MailController } from './mail/mail.controller';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.sendgrid.net',
        auth: {
          user: 'apikey',
          pass: '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',
        },
      },
    }),
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
  controllers: [AppController, JobsController, MailController],
  providers: [AppService, JobsService],
})
export class AppModule {}
