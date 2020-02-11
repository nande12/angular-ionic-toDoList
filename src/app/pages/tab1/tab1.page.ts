import { Component } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( public todoService: TodoService,
               private router: Router,
               public alertController: AlertController  ) {


  }
  

  async addList() {
    
    const alert = await this.alertController.create({
      header: 'New List',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'List Name'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar');
          }
        },
        {
          text: "Create",
          handler: ( data ) => {
            console.log(data);
            if ( data.title.length === 0 ) {
              return;
            }

            const listId = this.todoService.createList( data.title );

            this.router.navigateByUrl(`/tabs/tab1/add/${ listId }`);
          }
        }
      ]
    });

    alert.present();

  }

}
