import { Body, Controller, Post, Get, Put, Delete } from '@nestjs/common';
import { CreateJobDto } from './dto/create-job-dto';

@Controller('jobs')
export class JobsController {
  @Post()
  create(@Body() createJobDto: CreateJobDto) {
    return 'job create';
  }

  @Get()
  getAll() {
    return 'job list';
  }

  @Put('::id')
  update(@Body() updateJobDto: CreateJobDto) {
    return 'job updated';
  }

  @Delete('::id')
  delete() {
    return 'job deleted';
  }
}
