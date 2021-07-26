import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  SignOut(){
    localStorage.removeItem("token");
    location.reload();
  }

}
