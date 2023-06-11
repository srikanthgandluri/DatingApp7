import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrls: ['./test-error.component.css']
})
export class TestErrorComponent implements OnInit {
baseURL = 'https://localhost:5001/api/'
validationErrors = [];
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  get404Error(){
    this.http.get(this.baseURL+'buggy/not-found').subscribe({
      next: Response => console.log(Response),
      error:error=>console.log(error)
    }    
    )
  }
  get400Error(){
    this.http.get(this.baseURL+'buggy/bad-request').subscribe({
      next: Response => console.log(Response),
      error:error=>console.log(error)
    }    
    )
  }
  get500Error(){
    this.http.get(this.baseURL+'buggy/server-error').subscribe({
      next: Response => console.log(Response),
      error:error=>console.log(error)
    }    
    )
  }
  get401Error(){
    this.http.get(this.baseURL+'buggy/auth').subscribe({
      next: Response => console.log(Response),
      error:error=>console.log(error)
    }    
    )
  }
  get400ValidationError(){
    this.http.post(this.baseURL+'accounts/register',{}).subscribe({
      next: Response => console.log(Response),
      error:error=>{
        this.validationErrors = error;
        console.log(error);
      }
    }    
    )
  }
}
