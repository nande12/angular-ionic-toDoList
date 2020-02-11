import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { ActivatedRoute } from '@angular/router';
import { List } from "../../models/list.model";
import { ListItem } from "../../models/list-item.model";

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  list: List;
  itemName = '';

  constructor( private todoService: TodoService,
               private route: ActivatedRoute )  {

    const listId = this.route.snapshot.paramMap.get('listId');
    this.list = this.todoService.getList(listId);


  }

  ngOnInit() {
  }

  addItem() {

    if ( this.itemName.length === 0 ) {
      return;
    }

    const newItem = new ListItem( this.itemName );
    this.list.items.push(newItem );

    this.itemName = '';
    this.todoService.saveStorage();

  }

}
