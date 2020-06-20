import { Component, OnInit } from "@angular/core";
import { CooperativaService } from "src/app/services/cooperativa.service";
import { Observable } from "rxjs";
import { Cooperativa } from "src/app/models/cooperativa";
import { Router } from "@angular/router";

@Component({
  selector: "app-lista",
  templateUrl: "./lista.component.html",
  styleUrls: ["./lista.component.css"],
})
export class ListaComponent implements OnInit {
  public lista: Observable<Cooperativa>;

  constructor(
    private cooperativaService: CooperativaService,
    private router: Router
  ) {}

  ngOnInit() {
    this.lista = this.cooperativaService.getAll();
  }

  onEditar(id: number) {
    this.router.navigate(["/cooperativas/" + id]);
  }
}
