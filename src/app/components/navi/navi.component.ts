import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
this.OtantikeMi();  

  }
  isAuthenticated: boolean = false;

  OtantikeMi(){
   this.isAuthenticated= this.authService.isAuthenticated();
   return this.isAuthenticated;
  
  }
}
