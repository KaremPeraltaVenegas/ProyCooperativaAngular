import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Cooperativa } from "src/app/models/cooperativa";
import { CooperativaService } from "src/app/services/cooperativa.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-reporte",
  templateUrl: "./reporte.component.html",
  styleUrls: ["./reporte.component.css"],
})
export class ReporteComponent implements OnInit {
  public lista: Observable<Cooperativa>;

  constructor(private cooperativaService: CooperativaService) {}

  ngOnInit() {
    this.lista = this.cooperativaService.getReporte();
  }
}
