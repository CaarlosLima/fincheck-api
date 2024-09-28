import { Controller, Get } from '@nestjs/common';
import { IsPublic } from '../../shared/decorators/IsPublic';
import { StatusService } from './status.service';

@IsPublic()
@Controller('status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @Get()
  getStatus() {
    return this.statusService.getStatus();
  }
}
