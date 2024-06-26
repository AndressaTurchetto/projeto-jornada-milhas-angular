import { FormularioService } from './../../core/services/formulario.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UnidadeFederativa } from 'src/app/core/types/types';
import { FormValidations } from '../form-validation';

@Component({
  selector: 'app-form-base',
  templateUrl: './form-base.component.html',
  styleUrls: ['./form-base.component.scss']
})
export class FormBaseComponent implements OnInit{

  cadastroForm!: FormGroup;
  estadoControl = new FormControl<UnidadeFederativa | null>(null, Validators.required);
  @Input() perfilComponent!: boolean;
  @Output() acaoClique: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private formBuilder: FormBuilder,
    private FormularioService: FormularioService
  ) { }


  ngOnInit(): void {
    this.cadastroForm = this.formBuilder.group({
      nome:
        [null, Validators.required],
      nascimento:
        [null, [Validators.required]],
      cpf:
        [null, [Validators.required]],
      cidade:
        [null, Validators.required],
      email:
        [null, [Validators.required, Validators.email]],
      senha:
        [null, [Validators.required, Validators.minLength(3)]],
      genero:
        ['outro'],
      telefone:
        [null, Validators.required],
      estado:
        this.estadoControl,
      confirmarEmail:
        [null, [Validators.required, Validators.email, FormValidations.equalTo('email')]],
      confirmarSenha:
        [null, [Validators.required, Validators.minLength(3), FormValidations.equalTo('senha')]],
      aceitarTermos:
        [null, [Validators.requiredTrue]]
    });

    this.FormularioService.setCadastro(this.cadastroForm)
  }

  executarAcao() {
    this.acaoClique.emit();
  }

}
