import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountDetailPageRoutingModule } from './account-detail-routing.module';

import { AccountDetailPage } from './account-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountDetailPageRoutingModule
  ],
  declarations: [AccountDetailPage]
})
export class AccountDetailPageModule {}
