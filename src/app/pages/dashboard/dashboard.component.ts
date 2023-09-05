import {Component, OnDestroy} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators' ;
import { SolarData } from '../../@core/data/solar';

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnDestroy {

  private alive = true;

  solarValue: number;
  oneToOne: CardSettings = {
    title: 'Düello',
    iconClass: 'nb-person',
    type: 'primary',
  };
  superLeague: CardSettings = {
    title: 'Süper Lig',
    iconClass: 'nb-bar-chart',
    type: 'success',
  };
  offer: CardSettings = {
    title: 'Teklif',
    iconClass: 'nb-lightbulb',
    type: 'info',
  };
  scoreboard: CardSettings = {
    title: 'Scoreboard',
    iconClass: 'nb-star',
    type: 'warning',
  };

  statusCards: string;

  commonStatusCardsSet: CardSettings[] = [
    this.oneToOne,
    this.superLeague,
    this.offer,
    this.scoreboard,
  ];

  statusCardsByThemes: {
    default: CardSettings[];
    cosmic: CardSettings[];
    corporate: CardSettings[];
    dark: CardSettings[];
  } = {
    default: this.commonStatusCardsSet,
    cosmic: this.commonStatusCardsSet,
    corporate: [
      {
        ...this.oneToOne,
        type: 'warning',
      },
      {
        ...this.superLeague,
        type: 'primary',
      },
      {
        ...this.offer,
        type: 'danger',
      },
      {
        ...this.scoreboard,
        type: 'info',
      },
    ],
    dark: this.commonStatusCardsSet,
  };

  constructor(private themeService: NbThemeService,
              private solarService: SolarData) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.statusCards = this.statusCardsByThemes[theme.name];
    });

    this.solarService.getSolarData()
      .pipe(takeWhile(() => this.alive))
      .subscribe((data) => {
        this.solarValue = data;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
