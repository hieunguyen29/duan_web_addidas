import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private route: Router) {
  }

  authForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  })

  onSubmit() {
    const data = this.authForm.value;
    this.authService.signIn(data).subscribe((ressponse) => {
      alert("Dang nhap tai khoan thanh cong!")
      const user = {
        accessToken: ressponse.accessToken,
        user: ressponse.user
      }
      
      localStorage.setItem(
        'user',
        JSON.stringify(user)
      );
      this.route.navigateByUrl('/')
    }, error => {
      alert(error.error.message)
      
    })
    
    
  }
}
