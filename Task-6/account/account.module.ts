import { Module } from '@nestjs/common';
import { CurrentaccountModule } from './currentaccount/currentaccount.module';
import { SavingaccountModule } from './savingaccount/savingaccount.module';

@Module({
  imports: [CurrentaccountModule, SavingaccountModule]
})
export class AccountModule {
  constructor(){
    console.log("This is AccountModule");
  }
}
