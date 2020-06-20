import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Cooperativa } from "../models/cooperativa";
import { GlobalConstants } from "../common/globals";

@Injectable({
  providedIn: "root",
})
export class CooperativaService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Cooperativa>(GlobalConstants.apiUrl + "cooperativas");
  }

  save(modelo: Cooperativa) {
    if (modelo.id === 0) {
      return this.http.post<Cooperativa>(
        GlobalConstants.apiUrl + "cooperativas",
        modelo
      );
    } else {
      return this.http.put<Cooperativa>(
        GlobalConstants.apiUrl + "cooperativas/" + modelo.id,
        modelo
      );
    }
  }

  getById(id: number) {
    return this.http.get<Cooperativa>(
      GlobalConstants.apiUrl + "cooperativas/" + id
    );
  }

  getReporte() {
    return this.http.get<Cooperativa>(
      GlobalConstants.apiUrl + "cooperativasreporte/"
    );
  }
}
