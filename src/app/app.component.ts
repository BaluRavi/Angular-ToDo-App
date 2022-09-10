import { Component } from '@angular/core';
import { LoggerService} from './logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  count = 0;  

  constructor(private logger : LoggerService)
  {


  }

  onLogMe()
  {
    this.logger.writeCount(this.count);
    this.count++;

  }
  // title = 'my-first-project';
  // message = 'my name is balu';
  // canClick = false;
  // sayHelloId = 2;
  // fontColor = "Green";

  // alertMessage()
  // {
  //   alert(this.message);    
  // }

  // message= 'i am read only' ;
  // canEdit = false;

  // onEditClick()
  // {


  //   this.canEdit = !this.canEdit;

  //   if(this.canEdit)
  //   {
  //       this.message = 'you can edit me' ;
  //   }
  //   else
  //   {
  //      this.message = 'i am readonly'
  //   }

  // }


}
