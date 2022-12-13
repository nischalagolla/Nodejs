import { Module } from '@nestjs/common';
import { LoanModule } from './loan/loan.module';
import { AccountModule } from './account/account.module';
//import { AppController } from../app.controllerer';
//import { AppService } from../app.servicece';

@Module({
  imports: [LoanModule, AccountModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(){
    console.log("This is APP Module");
  }
}
