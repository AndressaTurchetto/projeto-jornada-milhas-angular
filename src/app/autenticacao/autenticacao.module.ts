import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "../core/material/material.module";
import { SharedModule } from "../shared/shared.module";
import { CadastroComponent } from "./cadastro/cadastro.component";
import { LoginComponent } from "./login/login.component";
import { PerfilComponent } from "./perfil/perfil.component";
import { ReactiveFormsModule } from "@angular/forms";
import { AutenticacaoRoutingModule } from "./autenticacao-routing.module";

@NgModule ({
  declarations: [
    CadastroComponent,
    LoginComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
    AutenticacaoRoutingModule,
  ],
  exports: [
    CadastroComponent,
    LoginComponent,
    PerfilComponent
  ]
})

export class AutenticacaoModule { }
