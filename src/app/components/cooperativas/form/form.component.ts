import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Cooperativa } from "src/app/models/cooperativa";
import { CooperativaService } from "src/app/services/cooperativa.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"],
})
export class FormComponent implements OnInit {
  public mainForm = new FormGroup({
    id: new FormControl(0, Validators.required),
    nombre: new FormControl("", Validators.required),
    fecha_inscripcion: new FormControl(new Date(), Validators.required),
    numero_orden: new FormControl(0, Validators.required),
  });

  constructor(
    private service: CooperativaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get("id");

    if (id) {
      this.service.getById(id).subscribe((data) => {
        this.mainForm.setValue({
          id: data.id,
          nombre: data.nombre,
          fecha_inscripcion: new Date(data.fecha_inscripcion)
            .toISOString()
            .substring(0, 10),
          numero_orden: data.numero_orden,
        });
      });
    } else {
      this.mainForm.reset({
        id: 0,
        nombre: "",
        fecha_inscripcion: new Date(),
        numero_orden: 0,
      });
    }
  }

  onFormSubmit() {
    if (this.mainForm.valid) {
      this.service.save(this.mainForm.value).subscribe((data) => {
        this.router.navigate(["/cooperativas"], {});
      });
    }
  }
}
