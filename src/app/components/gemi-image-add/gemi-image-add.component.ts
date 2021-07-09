import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { GemilerDto } from 'src/app/models/DTOs/gemilerDto';
import { Gemiler } from 'src/app/models/gemiler';
import { GemiImageService } from 'src/app/Services/gemi-image.service';
import { GemiService } from 'src/app/Services/gemi.service';
@Component({
  selector: 'app-gemi-image-add',
  templateUrl: './gemi-image-add.component.html',
  styleUrls: ['./gemi-image-add.component.css']
})
export class GemiImageAddComponent implements OnInit {


  selectedFile!: File;
  imageAddForm!:FormGroup;
  gemiler:GemilerDto[]=[];
  constructor(
    private gemiService: GemiService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private gemiImageService:GemiImageService,) { }

  ngOnInit(): void {
    this.createImageAddForm();
    this.getGemiler();
  }

  createImageAddForm(){
    this.imageAddForm= this.formBuilder.group({
      GemiId:['',Validators.required],
      

    });

  }

  imageAdd(){
    
    if(this.imageAddForm.valid){
      
      let imageModel = Object.assign({},this.imageAddForm.value)
      console.log(imageModel.GemiId)
      console.log(typeof(imageModel.GemiId))
      imageModel.GemiId= parseInt(imageModel.GemiId);
      console.log(typeof(imageModel.GemiId))
      this.gemiImageService.gemiImageAdd(imageModel,this.selectedFile).subscribe(response=>{
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

  onFileChanged(event:any) {
    this.selectedFile = event.target.files[0]
  }

  getGemiler(){
    this.gemiService.getGemiDetails().subscribe(response =>{
      this.gemiler=response.data;
    })
  }


}
