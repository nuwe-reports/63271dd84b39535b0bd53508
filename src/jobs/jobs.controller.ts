import {
  Body,
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Res,
  HttpStatus,
  Param,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateJobDto } from './dto/create-job-dto';
import { JobsService } from './jobs.service';

@Controller('jobs')
export class JobsController {
  constructor(private jobsService: JobsService) {}

  @Post()
  create(@Body() createJobDto: CreateJobDto, @Res() response) {
    this.jobsService
      .createJob(createJobDto)
      .then((job) => {
        response.status(HttpStatus.CREATED).json(job);
      })
      .catch(() => {
        response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'error' });
      });
  }

  @Get()
  async findAll(@Req() request: Request) {
    return this.jobsService.getAll(request);
  }

  @Put(':id')
  update(
    @Body() updateJobDto: CreateJobDto,
    @Res() response,
    @Param('id') idJob,
  ) {
    this.jobsService
      .updateJob(idJob, updateJobDto)
      .then((job) => {
        response.status(HttpStatus.OK).json(job);
      })
      .catch(() => {
        response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'error' });
      });
  }

  @Delete(':id')
  delete(@Res() response, @Param('id') jobId) {
    this.jobsService
      .deleteJob(jobId)
      .then((res) => {
        response.status(HttpStatus.OK).json(res);
      })
      .catch(() => {
        response.status(HttpStatus.FORBIDDEN).json({ mensaje: 'error' });
      });
  }
}
