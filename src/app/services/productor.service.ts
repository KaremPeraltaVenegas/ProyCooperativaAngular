import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Productor } from "../models/productor";
import { GlobalConstants } from "../common/globals";

@Injectable({
  providedIn: "root",
})
export class ProductorService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Productor>(GlobalConstants.apiUrl + "productores");
  }

  save(modelo: Productor) {
    modelo["cooperativa_id"] = modelo.cooperativa.id;
    modelo["productors_id"] = modelo.productor ? modelo.productor.id : null;
    if (modelo.id === 0) {
      return this.http.post<Productor>(
        GlobalConstants.apiUrl + "productores",
        modelo
      );
    } else {
      return this.http.put<Productor>(
        GlobalConstants.apiUrl + "productores/" + modelo.id,
        modelo
      );
    }
  }

  getById(id: number) {
    return this.http.get<Productor>(
      GlobalConstants.apiUrl + "productores/" + id
    );
  }

  getLideres() {
    return this.http.get<Productor>(
      GlobalConstants.apiUrl + "getProductoresLideres"
    );
  }
}
