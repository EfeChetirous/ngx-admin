import { Component, OnInit } from '@angular/core';
import { OneToOneHistory } from '../Models/one-to-one-history';

@Component({
  selector: 'ngx-one-to-one',
  templateUrl: './one-to-one.component.html',
  styleUrls: ['./one-to-one.component.scss']
})
export class OneToOneComponent implements OnInit {

  constructor() { }
  // tabs: any[] = [
  //   {
  //     title: 'Düello Başlat',
  //     route: '/pages/iot-dashboard/one-to-one/tab-start',
  //   },
  //   {
  //     title: 'Düello Geçmiş',
  //     route: '/pages/iot-dashboard/one-to-one/tab-history',
  //   }
  // ];
  historyItems: OneToOneHistory [] = [
    { name: 'Carla Espinosa', result: 'Kazandın :)', duelloDate:"2012-09-10" },
    { name: 'Bob Kelso', result: 'Kaybettin :(', duelloDate:"2012-09-09" },
    { name: 'Janitor', result: 'Kaybettin :(', duelloDate:"2012-09-08" },
    { name: 'Perry Cox', result: 'Kazandın :)', duelloDate:"2012-09-06" },
    { name: 'Ben Sullivan', result: 'Kazandın :)', duelloDate:"2012-09-05" },
  ];
  ngOnInit(): void {
    
  }

  tabClicked(e){
    console.log(e.tabTitle);
  }
}
