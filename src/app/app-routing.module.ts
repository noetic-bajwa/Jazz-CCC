import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AffiliateReportComponent } from './dashboard/affiliate-report/affiliate-report.component';
import { BlacklistComponent } from './dashboard/blacklist/blacklist.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LTVReportComponent } from './dashboard/ltvreport/ltvreport.component';
import { MSISDNLogsComponent } from './dashboard/msisdnlogs/msisdnlogs.component';
import { OperatorStatsComponent } from './dashboard/operator-stats/operator-stats.component';
import { SingleRecordComponent } from './dashboard/operator-stats/single-record/single-record.component';
import { ReportComponent } from './dashboard/report/report.component';
import { UnsubscribeComponent } from './dashboard/unsubscribe/unsubscribe.component';

const routes: Routes = [
  {
    path:'',redirectTo:'operatorStats',pathMatch:'full'
  },
  {
    path:'', component:DashboardComponent ,children:[
      {
        path:'blacklist',
        component:BlacklistComponent
      },
      { 
        path:'ltv',
        component:LTVReportComponent
      },
      { 
        path:'msisdnlogs',
        component:MSISDNLogsComponent
      },
      { 
        path:'report',
        component:ReportComponent
      },
      {
        path:'operatorStats/:id',component:SingleRecordComponent
      },
      { 
        path:'operatorStats',
        component:OperatorStatsComponent
      },
      { path:'unsub',
        component:UnsubscribeComponent
      },
      { 
        path:'affiliate',
        component:AffiliateReportComponent
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
