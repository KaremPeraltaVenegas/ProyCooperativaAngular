import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { ListaComponent } from "./components/cooperativas/lista/lista.component";
import { ListaComponent as ListaProductoresComponent } from "./components/productores/lista/lista.component";
import { FormComponent } from "./components/cooperativas/form/form.component";
import { FormComponent as FormProductorComponent } from "./components/productores/form/form.component";
import { ReporteComponent } from "./components/cooperativas/reporte/reporte.component";

const routes: Routes = [
  { path: "cooperativas", component: ListaComponent },
  { path: "productores", component: ListaProductoresComponent },
  { path: "reporte", component: ReporteComponent },
  { path: "cooperativas/create", component: FormComponent },
  { path: "cooperativas/:id", component: FormComponent },
  { path: "productores/create", component: FormProductorComponent },
  { path: "productores/:id", component: FormProductorComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
