import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { OneToOneComponent } from './one-to-one/one-to-one.component';
import { SuperLeagueComponent } from './super-league/super-league.component';
import { OfferComponent } from './offer/offer.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';

const routes: Routes = [{
    path: '',
    component: DashboardComponent,
    children: [
        {
          path: 'one-to-one',
          component: OneToOneComponent,
          children: [
            {
              path: '',
              redirectTo: 'tab-start',
              pathMatch: 'full',
            }
          ],
        },
        {
            path: 'super-league',
            component: SuperLeagueComponent,
        },
        {
            path: 'offer',
            component: OfferComponent
        },
        {
            path: 'scoreboard',
            component: ScoreboardComponent
        }          
    ],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class DashboardRoutingModule {
  }