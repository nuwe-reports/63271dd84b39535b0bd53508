import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job } from './entities/job.entity';
import { CreateJobDto } from './dto/create-job-dto';

@Injectable()
export class JobsService {
  constructor(
    @InjectRepository(Job)
    private jobRepository: Repository<Job>,
  ) {}

  async getAll() {
    return await this.jobRepository.find();
  }

  async createJob(newJob: CreateJobDto) {
    const nuevo = new Job();
    nuevo.title = newJob.title;
    nuevo.description = newJob.description;
    nuevo.company = newJob.company;
    nuevo.localization = newJob.localization;
    nuevo.salary = newJob.salary;
    return await this.jobRepository
  }
}
