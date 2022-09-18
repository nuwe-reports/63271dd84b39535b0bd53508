import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job } from './entities/job.entity';
import { CreateJobDto } from './dto/create-job-dto';
import { Request } from 'express';

@Injectable()
export class JobsService {
  constructor(
    @InjectRepository(Job)
    private jobRepository: Repository<Job>,
  ) {}

  async getAll(request: Request): Promise<Job[]> {
    return await this.jobRepository.find(request.query);
  }

  async createJob(newJob: CreateJobDto): Promise<Job> {
    const nuevo = new Job();
    nuevo.title = newJob.title;
    nuevo.description = newJob.description;
    nuevo.company = newJob.company;
    nuevo.localization = newJob.localization;
    nuevo.salary = newJob.salary;
    return this.jobRepository.save(nuevo);
  }

  async updateJob(idJob: number, actualizeJob: CreateJobDto): Promise<Job> {
    const jobUpdate = await this.jobRepository.findOne({
      where: { id: idJob },
    });
    jobUpdate.title = actualizeJob.title;
    jobUpdate.description = actualizeJob.description;
    jobUpdate.company = actualizeJob.company;
    jobUpdate.localization = actualizeJob.localization;
    jobUpdate.salary = actualizeJob.salary;

    return await this.jobRepository.save(jobUpdate);
  }

  async deleteJob(idJob: number): Promise<any> {
    return await this.jobRepository.delete(idJob);
  }
}
