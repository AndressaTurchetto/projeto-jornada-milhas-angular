import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { BuscaComponent } from "./busca.component";

const routes: Routes = [
  {
    path: '',
    component: BuscaComponent
  }
];

@NgModule ({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})


export class BuscaRoutingModule { }
