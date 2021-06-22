import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { KazanDoldurmaOperasyonlari } from 'src/app/models/kazanDoldurmaOperasyonlari';
import { KazanDoldurmaService } from 'src/app/Services/kazan-doldurma.service';

@Component({
  selector: 'app-kazan-doldurma-add',
  templateUrl: './kazan-doldurma-add.component.html',
  styleUrls: ['./kazan-doldurma-add.component.css']
})
export class KazanDoldurmaAddComponent implements OnInit {

  kazanDoldurmaOperasyonlari:KazanDoldurmaOperasyonlari[] = [];

  
  kazanDoldurmaOperasyonlariAddForm! : FormGroup;

  constructor( 
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private kazanDoldurmaService:KazanDoldurmaService,) { }

  ngOnInit(): void {
    this.createKazanDoldurmaOperasyonlariAddForm();
  }

  createKazanDoldurmaOperasyonlariAddForm(){
    this.kazanDoldurmaOperasyonlariAddForm = this.formBuilder.group({
      HazMatID:["",Validators.required],
      KazanID: ["",Validators.required],
      MateryalID:["", Validators.required],
      AhsapciID:["",Validators.required],
      MadenAyristirmaciID:["",Validators.required],
      MadenAyristirmaSuresi: ["",Validators.required],
      IcerikYuzdeleri:["", Validators.required]
     
    })
 }

  add(){
    if(this.kazanDoldurmaOperasyonlariAddForm.valid){
      let kazanDoldurmaModel = Object.assign({},this.kazanDoldurmaOperasyonlariAddForm.value)
      this.kazanDoldurmaService.add(kazanDoldurmaModel).subscribe(response=>{
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
