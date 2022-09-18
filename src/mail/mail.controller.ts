import { MailerService } from '@nestjs-modules/mailer';
import { Controller, Get, Query } from '@nestjs/common';

@Controller('mail')
export class MailController {
  constructor(private mailService: MailerService) {}

  @Get('text-email')
  async plainTextEmail(@Query('toemail') toEmail) {
    const response = await this.mailService.sendMail({
      to: toEmail,
      from: 'eperez045@gmail.com',
      subject: 'Jobs Email ✔',
      text: 'Email jobsApi enviado',
    });
    return response;
  }
}
