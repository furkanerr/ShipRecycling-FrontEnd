import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GemiTipiService } from 'src/app/Services/gemi-tipi.service';

@Component({
  selector: 'app-gemi-tipi-update',
  templateUrl: './gemi-tipi-update.component.html',
  styleUrls: ['./gemi-tipi-update.component.css']
})
export class GemiTipiUpdateComponent implements OnInit {

  gemiTipiUpdateForm! : FormGroup;
  gemiTipiId!:number;
  constructor( private gemiTipiService:GemiTipiService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.createGemiTipiUpdateForm();

    this.gemiTipiId= this.activatedRoute.snapshot.params["gemiTipiId"];
  console.log(this.gemiTipiId);
   this.getGemiTipiById(this.gemiTipiId);
  }

  createGemiTipiUpdateForm() {
    this.gemiTipiUpdateForm = this.formBuilder.group({
      id:[],
      gemiTipi: ['', Validators.required]
     
    });
 }

 getGemiTipiById(gemiTipiId:number){
  this.gemiTipiService.getGemiDetailsById(gemiTipiId).subscribe((response) =>{
    console.log(response.data);
    this.gemiTipiUpdateForm.setValue(response.data);
   
  })


}
  update(){
    if(this.gemiTipiUpdateForm.valid){
      let gemiTipiModel = Object.assign({},this.gemiTipiUpdateForm.value)
      this.gemiTipiService.update(gemiTipiModel).subscribe(response=>{
        this.toastrService.success(response.message,"Başarılı")
        console.log(response)
      },responseError=>{
        console.log(responseError)
        if(responseError.error.Errors.length>0){
          for (let i = 0; i <responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage
              ,"Doğrulama hatası")
          }       
        } 
      })
      
    }else{
      this.toastrService.error("Formunuz eksik","Dikkat")
    }
    
  }
}
