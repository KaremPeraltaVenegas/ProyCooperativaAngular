import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Productor } from "src/app/models/productor";
import { Router } from "@angular/router";
import { ProductorService } from "src/app/services/productor.service";

@Component({
  selector: "app-lista",
  templateUrl: "./lista.component.html",
  styleUrls: ["./lista.component.css"],
})
export class ListaComponent implements OnInit {
  public lista: Observable<Productor>;

  constructor(private service: ProductorService, private router: Router) {}

  ngOnInit() {
    this.lista = this.service.getAll();
  }

  onEditar(id: number) {
    this.router.navigate(["/productores/" + id]);
  }
}
