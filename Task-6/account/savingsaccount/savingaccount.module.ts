import { Module } from '@nestjs/common';
import { SingleaccountModule } from './singleaccount/singleaccount.module';
import { JoinaccountModule } from './jointaccount/jointaccount.module';

@Module({
  imports: [SingleaccountModule, JoinaccountModule]
})
export class SavingaccountModule {
  constructor(){
    console.log("This is Savings account Module");
  }
}
