import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HazMatService } from 'src/app/Services/haz-mat.service';

@Component({
  selector: 'app-haz-mat-add',
  templateUrl: './haz-mat-add.component.html',
  styleUrls: ['./haz-mat-add.component.css']
})
export class HazMatAddComponent implements OnInit {
  hazMatAddForm! : FormGroup;

  constructor(
     private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private hazMatService: HazMatService,
    ) { }

    ngOnInit(): void {
      this.createHazMatAddForm();
    }



    createHazMatAddForm() {
      this.hazMatAddForm = this.formBuilder.group({
        IHMRaporID: ['', Validators.required],
        blokID: ['', Validators.required],
        olcuBirimiID: ['', Validators.required],
        gemiID: ['', Validators.required],
        miktar:['', Validators.required],
        markalamaTarihi: ['', Validators.required],
        hazMatTipID: ['', Validators.required],
        
      });
    }
  


    add(){
      if(this.hazMatAddForm.valid){
        let hazMatModel = Object.assign({},this.hazMatAddForm.value)
        this.hazMatService.add(hazMatModel).subscribe(response=>{
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
