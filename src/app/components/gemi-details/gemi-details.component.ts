import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GemilerDto } from 'src/app/models/DTOs/gemilerDto';
import { Gemiler } from 'src/app/models/gemiler';
import { Resimler } from 'src/app/models/resimler';
import { GemiImageService } from 'src/app/Services/gemi-image.service';
import { GemiService } from 'src/app/Services/gemi.service';

@Component({
  selector: 'app-gemi-details',
  templateUrl: './gemi-details.component.html',
  styleUrls: ['./gemi-details.component.css']
})
export class GemiDetailsComponent implements OnInit {

 // gemiler:GemilerDto={id:-1,gemiTipiName:"",bayrakName:"",tonnage:-1,imoNo:-1,gemiSahibiSirket:""};
 gemiler:GemilerDto[]=[];
  gemiId!:number;
  gemiImages:Resimler={id:-1,resimAdresi:"",GemiId:-1};


  


  apiUrl = 'https://localhost:44335';


  constructor(private gemiService:GemiService,
    private gemiImagesService:GemiImageService,
    private activatedRoute:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.gemiId= this.activatedRoute.snapshot.params["gemiId"];
    this.getGemiler(this.gemiId);
   
    this.getGemiImagesByGemiId(this.gemiId);
    
  }


  getGemiler(gemiId:number) {
    this.gemiService.getGemiDetailsById(gemiId).subscribe(response=>{
      this.gemiler = response.data
     
    })   
  }
getGemiImagesByGemiId(gemiId:number){
 
  this.gemiImagesService.getGemiImageByGemiId(gemiId).subscribe(response=>{
    
    this.gemiImages=response.data;
    console.log(this.gemiImages.resimAdresi)
 
  })
}
}
