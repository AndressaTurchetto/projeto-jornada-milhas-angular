import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";
import { MaterialModule } from "../core/material/material.module";
import { ReactiveFormsModule } from "@angular/forms";
import { FiltrosComplementaresComponent } from "./filtros-complementares/filtros-complementares.component";
import { PassagemComponent } from "./passagem/passagem.component";
import { PassagemDestaqueComponent } from "./passagem-destaque/passagem-destaque.component";
import { CompanhiasComponent } from "./filtros-complementares/companhias/companhias.component";
import { LabelComponent } from "./filtros-complementares/label/label.component";
import { ParadasComponent } from "./filtros-complementares/paradas/paradas.component";
import { PrecosComponent } from "./filtros-complementares/precos/precos.component";
import { BuscaComponent } from "./busca.component";
import { BuscaRoutingModule } from "./busca-routing.module";

@NgModule ({
  declarations: [
    BuscaComponent,
    CompanhiasComponent,
    FiltrosComplementaresComponent,
    LabelComponent,
    PassagemComponent,
    PassagemDestaqueComponent,
    ParadasComponent,
    PrecosComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    BuscaRoutingModule
  ],
  exports: [
    BuscaComponent,
    CompanhiasComponent,
    FiltrosComplementaresComponent,
    LabelComponent,
    PassagemComponent,
    PassagemDestaqueComponent,
    ParadasComponent,
    PrecosComponent,

  ]
})

export class BuscaModule { }
