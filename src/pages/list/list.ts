import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from  './../../providers/rest/rest';
import { List } from  './../../app/model/list';

@Component({
  selector: 'page-home',
  templateUrl: 'list.html'
})
export class ListPage {

  private  lists : List[] = [];

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.restProvider.getLists().subscribe((lists : List[])=>{
      this.lists = lists;

      console.log(this.lists)
    });
  }

}
