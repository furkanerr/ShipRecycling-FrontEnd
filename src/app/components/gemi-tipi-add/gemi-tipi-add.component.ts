import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { GemiTipiService } from 'src/app/Services/gemi-tipi.service';



@Component({
  selector: 'app-gemi-tipi-add',
  templateUrl: './gemi-tipi-add.component.html',
  styleUrls: ['./gemi-tipi-add.component.css']
})
export class GemiTipiAddComponent implements OnInit {


  gemiTipiAddForm! : FormGroup;
  constructor(
    private gemiTipiService:GemiTipiService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    ) { }

  ngOnInit(): void {
     this.createGemiAddForm();
  }

 createGemiAddForm() {
     this.gemiTipiAddForm = this.formBuilder.group({
       gemiTipi: ['', Validators.required]
      
     });
  }

   add() {
     if(this.gemiTipiAddForm.valid){
       let gemiTipiModel = Object.assign({},this.gemiTipiAddForm.value)
       
     this.gemiTipiService.add(gemiTipiModel ).subscribe(response=>{
     
       this.toastrService.success(response.message,"Başarılı")
     }   )
     }else{
      
      this.toastrService.error("Form eksik","Dikkat")
    }
}

}
