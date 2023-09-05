import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-status-card',
  styleUrls: ['./status-card.component.scss'],
  templateUrl: './status-card.component.html'
})
export class StatusCardComponent {
  constructor( private router: Router , private route: ActivatedRoute) {}
  @Input() title: string;
  @Input() type: string;
  @Input() on = true;

  routeToModulePage(val){
    if(val.title == "Düello")
    {
      this.router.navigate([`../pages/iot-dashboard/one-to-one/`]);
    }
    else if (val.title == "Süper Lig")
    {
      this.router.navigate([`../pages/iot-dashboard/super-league/`]);
    }
    else if (val.title == "Teklif")
    {
      this.router.navigate([`../pages/iot-dashboard/offer/`]);
    }
    else if (val.title == "Scoreboard")
    {
      this.router.navigate([`../pages/iot-dashboard/scoreboard/`]);
    }
  }
}
