import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { BasicAnalyticsPageRoutingModule } from './basic-analytics-routing.module'; // Make sure this import is correct

import { BasicAnalyticsPage } from './basic-analytics.page'; // Make sure this import is correct

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BasicAnalyticsPageRoutingModule,
  ],
  declarations: [BasicAnalyticsPage],
})
export class BasicAnalyticsPageModule {}
