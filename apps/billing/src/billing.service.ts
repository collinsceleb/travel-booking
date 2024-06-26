import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class BillingService {
  private readonly logger: Logger = new Logger(BillingService.name);
  bill(data: any) {
    this.logger.log('Billing...', data);
  }
  getHello(): string {
    return 'Hello World!';
  }
}
