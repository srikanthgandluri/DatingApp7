import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public accountService: AccountService) 
  { 

  }
  model : any = {};
  ngOnInit(): void {
  }


  login(){
    this.accountService.login(this.model).subscribe(
      {
        next:Response=>{
          console.log(Response);
      },
        error:error=>console.log(error)
      }
    );
    console.log(this.model);
  }

  logout(){
    this.accountService.logout();
  }

}
