import { Component, OnInit } from '@angular/core';
import { FormGroup,
  FormBuilder,
  FormControl,
  Validators, } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BayrakService } from 'src/app/Services/bayrak.service';

@Component({
  selector: 'app-bayrak-add',
  templateUrl: './bayrak-add.component.html',
  styleUrls: ['./bayrak-add.component.css'],
})
export class BayrakAddComponent implements OnInit {

  bayrakAddForm!: FormGroup;
  constructor(
   
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private bayrakService: BayrakService,
     

  ) {}

  ngOnInit(): void {
    this.createBayrakAddForm();

  } 
  
  createBayrakAddForm() {
    
    this.bayrakAddForm = this.formBuilder.group({
      ulkeAdi: ['', Validators.required],
     
    });
  }



  add() {
    if(this.bayrakAddForm.valid){
      let bayrakModel = Object.assign({},this.bayrakAddForm.value)
      this.bayrakService.add(bayrakModel).subscribe(response=>{
      this.toastrService.success(response.message,"Başarılı")
    } )
    }else{
      this.toastrService.error("Form eksik","Dikkat")
    }
}
}
