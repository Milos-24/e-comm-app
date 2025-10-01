import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  showLoginForm = false;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required],], 
      password: ['', Validators.required]
    });
  }

  toggleLogin(): void {
    this.showLoginForm = !this.showLoginForm;
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.authService.login(username, password).subscribe({
        next: () => {
          this.errorMessage = null;
          this.router.navigate(['/shop']);
        },
        error: (err) => {
          this.errorMessage = err?.error?.error || 'Invalid username or password';
        }
      });
    }
  }
}
