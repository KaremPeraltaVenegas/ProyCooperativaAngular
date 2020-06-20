import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { ListaComponent } from "./components/cooperativas/lista/lista.component";
import { HttpClientModule } from "@angular/common/http";
import { FormComponent } from "./components/cooperativas/form/form.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { ListaComponent as listaProductorComponent } from "./components/productores/lista/lista.component";
import { FormComponent as FormProductorComponent } from "./components/productores/form/form.component";
import { ReporteComponent } from './components/cooperativas/reporte/reporte.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    listaProductorComponent,
    FormComponent,
    FormProductorComponent,
    ReporteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
