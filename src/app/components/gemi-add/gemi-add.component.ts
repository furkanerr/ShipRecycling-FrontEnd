import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Bayrak } from 'src/app/models/bayrak';
import { BayrakService } from 'src/app/Services/bayrak.service';
import { GemiService } from 'src/app/Services/gemi.service';

@Component({
  selector: 'app-gemi-add',
  templateUrl: './gemi-add.component.html',
  styleUrls: ['./gemi-add.component.css'],
})
export class GemiAddComponent implements OnInit {

 
  gemiAddForm! : FormGroup;
  
  constructor(
    
    private gemiService: GemiService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private bayrakService:BayrakService
  ) {}


  bayraklar:Bayrak[] = [];

  ngOnInit(): void {
    this.createGemiAddForm();
    this.getBayraklar();
  }

  createGemiAddForm() {
    this.gemiAddForm = this.formBuilder.group({
      gemiTipiID: ['', Validators.required],
      bayrakID: ['', Validators.required],
      tonnage: ['', Validators.required],
      imoNo: ['', Validators.required],
      gemiSahibiSirket:['', Validators.required],
    });
  }

  add(){
    if(this.gemiAddForm.valid){
      let gemiModel = Object.assign({},this.gemiAddForm.value)
      this.gemiService.add(gemiModel).subscribe(response=>{
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

getBayraklar() {
  this.bayrakService.getBayrak().subscribe(response=>{
    this.bayraklar = response.data
   
  })   
}

}