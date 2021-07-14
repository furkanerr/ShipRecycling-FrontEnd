import { Component, OnInit } from '@angular/core';

import { GemilerDto } from 'src/app/models/DTOs/gemilerDto';
import { Gemiler } from 'src/app/models/gemiler';
import { GemiService } from 'src/app/Services/gemi.service';

@Component({
  selector: 'app-gemi-list',
  templateUrl: './gemi-list.component.html',
  styleUrls: ['./gemi-list.component.css']
})
export class GemiListComponent implements OnInit {


  gemiler: GemilerDto[] = [];

  constructor(private gemiService:GemiService) { }

  ngOnInit(): void {
    this.getGemiler();
  }


  getGemiler() {
    this.gemiService.getGemiDetails().subscribe(response=>{
      this.gemiler = response.data
     
    })   
  }

gemiDelete(id:number){
  this.gemiService.delete(id).subscribe(response=>{
    
  })
}


}
