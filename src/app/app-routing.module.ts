import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AffiliateReportComponent } from './dashboard/affiliate-report/affiliate-report.component';
import { AddBlacklistComponent } from './dashboard/blacklist/add-blacklist/add-blacklist.component';
import { BlacklistComponent } from './dashboard/blacklist/blacklist.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LTVReportComponent } from './dashboard/ltvreport/ltvreport.component';
import { MSISDNLogsComponent } from './dashboard/msisdnlogs/msisdnlogs.component';
import { OperatorStatsComponent } from './dashboard/operator-stats/operator-stats.component';
import { SingleRecordComponent } from './dashboard/operator-stats/single-record/single-record.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { AuthenticationGuard } from './authentication.guard';
import { ReportComponent } from './dashboard/report/report.component';
import { AddUnsubComponent } from './dashboard/unsubscribe/add-unsub/add-unsub.component';
import { UnsubscribeComponent } from './dashboard/unsubscribe/unsubscribe.component';
import { LoginComponent } from './login/login.component';
import { IsNoeticGuard } from './is-noetic.guard';

const routes: Routes = [
  {
    path:'login',component:LoginComponent
  },
  {
    path:'',redirectTo:'unsub',pathMatch:'full'
  },
  {
    path:'', canActivate:[AuthenticationGuard], component:DashboardComponent ,children:[
      {
        path:'blacklist', canActivate:[IsNoeticGuard],
        component:BlacklistComponent
      },
      {
        path:'blacklist/add', canActivate:[IsNoeticGuard],component:AddBlacklistComponent
      },
      { 
        path:'ltv', canActivate:[IsNoeticGuard],
        component:LTVReportComponent
      },
      { 
        path:'msisdnlogs',
        component:MSISDNLogsComponent
      },
      { 
        path:'report', canActivate:[IsNoeticGuard],
        component:ReportComponent
      },
      {
        path:'operatorStats/:id', canActivate:[IsNoeticGuard],component:SingleRecordComponent
      },
      { 
        path:'operatorStats', canActivate:[IsNoeticGuard],
        component:OperatorStatsComponent
      },
      {
        path:'unsub/add',  component:AddUnsubComponent
      },
      { path:'unsub',
        component:UnsubscribeComponent
      },
      
      { 
        path:'affiliate', canActivate:[IsNoeticGuard],
        component:AffiliateReportComponent
      },
      { 
        path:'profile',
        component:ProfileComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
