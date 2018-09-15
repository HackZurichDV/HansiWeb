import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from  'rxjs/Observable';
import { List } from  './../../app/model/list';
import  'rxjs/add/operator/catch';
import  'rxjs/add/operator/map';

@Injectable()
export  class  RestProvider {

  baseUrl:string = "http://localhost:3000/api";

  constructor(private  httpClient : HttpClient) { }

  public  getLists(): Observable<List[]> {
    return this.httpClient.get(this.baseUrl + '/lists').map(lists  => {
      return lists.map((list) => new List(list));
    });
  }
}
