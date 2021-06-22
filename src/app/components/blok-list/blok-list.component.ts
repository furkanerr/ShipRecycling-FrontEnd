import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BlokService } from 'src/app/Services/blok.service';

@Component({
  selector: 'app-blok-list',
  templateUrl: './blok-list.component.html',
  styleUrls: ['./blok-list.component.css'],
})
export class BlokListComponent implements OnInit {
  blokAddForm!: FormGroup;
  constructor(
    private blokService: BlokService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createGemiAddForm();
  }

  createGemiAddForm() {
    this.blokAddForm = this.formBuilder.group({
      gemidenKesimBaslangicTarihi: ['', Validators.required],
      gemidenKesimBitisTarihi: ['', Validators.required],
      gemidenKesimSuresi: ['', Validators.required],
      blogunSahayaGelisTarihi: ['', Validators.required],
      sahadakiKesimSuresi: ['', Validators.required],

      sahadakiKesimBaslangicTarihi: ['', Validators.required],
      sahadakiKesimBitisTarihi: ['', Validators.required],
      madenAyristirmaSuresi: ['', Validators.required],
      madenAyristirmaBaslangicTarihi: ['', Validators.required],
      madenAyristirmaBitisTarihi: ['', Validators.required],

      icerikYuzdeleri: ['', Validators.required],
      madenAyristirmaciID: ['', Validators.required],
      gemidekiKesimciID: ['', Validators.required],
     
    });
  }

  add() {
    if (this.blokAddForm.valid) {
      let gemiModel = Object.assign({}, this.blokAddForm.value);
      this.blokService.add(gemiModel).subscribe((response) => {
        this.toastrService.success(response.message, 'Başarılı');
      });
    } else {
      this.toastrService.error('Form eksik', 'Dikkat');
    }
  }
}
