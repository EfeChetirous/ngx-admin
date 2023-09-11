import { OfferHistoryModel } from './../Models/offer-history-model';
import { Component, OnInit } from '@angular/core';
import { OfferModel } from '../Models/offer-model';

@Component({
  selector: 'ngx-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {

  constructor() { }
  offer : OfferModel =  {
    startDate:"2023-09-01",
    name:"Kredi Satış Teklifi!",
    endDate:"2023-09-30",
    message:"Yukarıda belirtilen tarih aralıklarında 15 kredi satışı hedefi size atanmıştır. Başarılar dileriz."
  }

  offerHistory : OfferHistoryModel [] = [
    {name : "kredi Satışı", offerDateRange:"2023-08-20 / 2023-08-25",offerResultMessage:"Hedeflenen 5 Kredi satışının 3'ünü tamamladınız."},
    {name : "kredi Kartı Satışı", offerDateRange:"2023-07-10 / 2023-07-15",offerResultMessage:"Hedeflenen 5 Kredi Kartı satışının 8'ini tamamladınız."},
    {name : "Sigorta Satışı", offerDateRange:"2023-06-05 / 2023-06-15",offerResultMessage:"Hedeflenen 5 Sigorta satışının 5'ini tamamladınız."},
]

  ngOnInit(): void {
  }
  tabClicked(e){
    console.log(e.tabTitle);
  }
}
