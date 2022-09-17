export class CreateJobDto {
  readonly title: string;
  readonly company: string;
  readonly description: string;
  readonly market: string[];
  readonly localization: string;
  readonly salary: number;
}
