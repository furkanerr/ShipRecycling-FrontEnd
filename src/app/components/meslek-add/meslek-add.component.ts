import { Component, OnInit } from '@angular/core';
import { FormGroup,
  FormBuilder,
  FormControl,
  Validators, } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MesleklerService } from 'src/app/Services/meslekler.service';

@Component({
  selector: 'app-meslek-add',
  templateUrl: './meslek-add.component.html',
  styleUrls: ['./meslek-add.component.css']
})
export class MeslekAddComponent implements OnInit {


  meslekAddForm! : FormGroup;

  constructor(private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private meslekService:MesleklerService
    ) { }

  ngOnInit(): void {
    this.createMeslekAddForm();
  }


  createMeslekAddForm() {
    this.meslekAddForm = this.formBuilder.group({
      MeslekAdi: ['', Validators.required],
      
    });
  }

  add() {
    if(this.meslekAddForm.valid){
      let meslekModel = Object.assign({},this.meslekAddForm.value)
    this.meslekService.add(meslekModel).subscribe(response=>{
      this.toastrService.success(response.message,"Başarılı")
    } )
    }else{
      this.toastrService.error("Form eksik","Dikkat")
    }
}



}
