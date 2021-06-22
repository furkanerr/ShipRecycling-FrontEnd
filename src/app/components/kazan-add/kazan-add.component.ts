import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { KazanlarService } from 'src/app/Services/kazanlar.service';
@Component({
  selector: 'app-kazan-add',
  templateUrl: './kazan-add.component.html',
  styleUrls: ['./kazan-add.component.css'],
})
export class KazanAddComponent implements OnInit {
  kazanAddForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private kazanService:KazanlarService
  ) {}

  ngOnInit(): void {
    this.createKazanAddForm();
  }
  createKazanAddForm() {
    this.kazanAddForm = this.formBuilder.group({
      Agirlik: ['', Validators.required],
      SafeWorkingLoad: ['', Validators.required],
      UretimTarihi: ['', Validators.required],
      PeriyordikKontrolBirimDegeri: ['', Validators.required],
      SonKontrolTarihi: ['', Validators.required],
    });
  }

  add() {
    if (this.kazanAddForm.valid) {
      let kazanModel = Object.assign({}, this.kazanAddForm.value);
      this.kazanService.add(kazanModel).subscribe((response) => {
        this.toastrService.success(response.message, 'Başarılı');
      });
    } else {
      this.toastrService.error('Form eksik', 'Dikkat');
    }
  }
}
