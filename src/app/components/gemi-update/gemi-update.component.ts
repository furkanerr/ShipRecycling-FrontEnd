import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { GemiService } from 'src/app/Services/gemi.service';
import { BayrakService } from 'src/app/Services/bayrak.service';
import { Bayrak } from 'src/app/models/bayrak';
import { ActivatedRoute } from '@angular/router';
import { GemilerDto } from 'src/app/models/DTOs/gemilerDto';
import { Gemiler } from 'src/app/models/gemiler';

@Component({
  selector: 'app-gemi-update',
  templateUrl: './gemi-update.component.html',
  styleUrls: ['./gemi-update.component.css'],
})
export class GemiUpdateComponent implements OnInit {
  gemiUpdateForm!: FormGroup;
  gemiId!:number;
  constructor(
    private gemiService: GemiService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private bayrakService: BayrakService,
    private activatedRoute:ActivatedRoute
  ) {}

  bayraklar: Bayrak[] = [];
    gemiler: Gemiler[]=[] ;
   
  ngOnInit(): void {
    this.createGemiUpdateForm();
    this.getBayraklar();

   this.gemiId= this.activatedRoute.snapshot.params["gemiId"];
  
   this.getGemiById(this.gemiId);
 
  }

  createGemiUpdateForm() {
    this.gemiUpdateForm = this.formBuilder.group({
      gemiTipiID: ['', Validators.required],
      bayrakID: ['', Validators.required],
      tonnage: ['', Validators.required],
      imoNo: ['', Validators.required],
      gemiSahibiSirket: ['', Validators.required],
    });
  }

  update() {
    if (this.gemiUpdateForm.valid) {
      let gemiModel = Object.assign({}, this.gemiUpdateForm.value);
      this.gemiService.add(gemiModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Başarılı');
          console.log(response);
        },
        (responseError) => {
          console.log(responseError);
          if (responseError.error.Errors.length > 0) {
            for (let i = 0; i < responseError.error.Errors.length; i++) {
              this.toastrService.error(
                responseError.error.Errors[i].ErrorMessage,
                'Doğrulama hatası'
              );
            }
          }
        }
      );
    } else {
      this.toastrService.error('Formunuz eksik', 'Dikkat');
    }
  }
    getGemiById(gemiId:number){
      this.gemiService.getGemiDetailsById(gemiId).subscribe((response) =>{
        this.gemiler=response.data;
       
      })


    }
  getBayraklar() {
    this.bayrakService.getBayrak().subscribe((response) => {
      this.bayraklar = response.data;
    });
  }
}
