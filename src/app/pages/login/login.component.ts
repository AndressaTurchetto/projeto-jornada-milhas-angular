import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/core/services/autenticacao.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup;

  constructor (
    private FormBuilder: FormBuilder,
    private authService: AutenticacaoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.FormBuilder.group({
      email: [
        null,
        [Validators.required, Validators.email]
      ],
      senha: [
        null,
        [Validators.required]
      ],
    })
  }

  login() {
    const email = this.loginForm.value.email;
    const senha = this.loginForm.value.senha;

    this.authService.autenticar(email, senha).subscribe({
        next: (value) => {
            console.log('Login realizado com sucesso', value)
            this.router.navigateByUrl('/')
        },
        error: (err) => {
            console.log('Erro no login', err)
        }
    })
}

}
