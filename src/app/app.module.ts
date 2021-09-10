import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { DatePipe } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportComponent } from './dashboard/report/report.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { OperatorStatsComponent } from './dashboard/operator-stats/operator-stats.component';
import { LTVReportComponent } from './dashboard/ltvreport/ltvreport.component';
import { MSISDNLogsComponent } from './dashboard/msisdnlogs/msisdnlogs.component';
import { BlacklistComponent } from './dashboard/blacklist/blacklist.component';
import { UnsubscribeComponent } from './dashboard/unsubscribe/unsubscribe.component';
import { AffiliateReportComponent } from './dashboard/affiliate-report/affiliate-report.component';
import { SingleRecordComponent } from './dashboard/operator-stats/single-record/single-record.component';
import { ToastrModule } from 'ngx-toastr';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { AddUnsubComponent } from './dashboard/unsubscribe/add-unsub/add-unsub.component';
import { NgxUiLoaderModule } from "ngx-ui-loader";
import { AddBlacklistComponent } from './dashboard/blacklist/add-blacklist/add-blacklist.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ReportComponent,
    OperatorStatsComponent,
    LTVReportComponent,
    MSISDNLogsComponent,
    BlacklistComponent,
    UnsubscribeComponent,
    AffiliateReportComponent,
    SingleRecordComponent,
    ProfileComponent,
    AddUnsubComponent,
    AddBlacklistComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PaginationModule.forRoot(),
    FormsModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    ToastrModule.forRoot(),
    NgxUiLoaderModule
    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
