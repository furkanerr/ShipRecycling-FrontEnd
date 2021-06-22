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

  add() {
    if(this.gemiAddForm.valid){
      let gemiModel = Object.assign({},this.gemiAddForm.value)
    this.gemiService.add(gemiModel).subscribe(response=>{
      this.toastrService.success(response.message,"Başarılı")
    } )
    }else{
      this.toastrService.error("Form eksik","Dikkat")
    }
}

getBayraklar() {
  this.bayrakService.getBayrak().subscribe(response=>{
    this.bayraklar = response.data
   
  })   
}

}