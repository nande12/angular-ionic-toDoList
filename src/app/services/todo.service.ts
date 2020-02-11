import { Injectable } from '@angular/core';
import { List } from "../models/list.model";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  lists: List[] = [];

  constructor() { 

    this.loadStorage();

    // const list1 = new List('Hacer compras');
    // const list2 = new List('Hacer pagos');

    // this.lists.push(list1, list2);

    

  }

  createList( title: string ) {

    const newList = new List(title);
    this.lists.push( newList );
    this.saveStorage();

    return newList.id;

  }

  getList( id: string | number ) {

    id = Number(id);

    return this.lists.find( listData => {
      return listData.id === id;
    });
  }

  saveStorage() {

    localStorage.setItem( 'data', JSON.stringify( this.lists ) );

  }

  loadStorage() {

    if (localStorage.getItem('data') ) {
      this.lists = JSON.parse( localStorage.getItem( 'data' ) );
    } else {
      this.lists = [];
    }

  }



}
