import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Services/auth.service';
@Component({
  selector: 'app-sing-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signupForm!:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private authService:AuthService, private toastrService:ToastrService) { }

  ngOnInit(): void {

    this.createSignUpForm();
    
  }
  createSignUpForm(){
    this.signupForm = this.formBuilder.group({
      email: ["",Validators.required],
      password:["",Validators.required],
      firstName: ["",Validators.required],
      lastName:["",Validators.required]
    })
  }

signUp(){
  if(this.signupForm.valid){
    console.log(this.signupForm.value);
    let signUpForm = Object.assign({},this.signupForm.value)

    this.authService.signUp(signUpForm).subscribe(response=>{
      this.toastrService.info(response.message)
      console.log(response);
      localStorage.setItem("token",response.data.token)
      window.location.assign('http://localhost:4200/gemi');

    },responseError=>{
      console.log(responseError);
      this.toastrService.error(responseError.message)
    })

}

}}
