import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ProductorService } from "src/app/services/productor.service";
import { Router, ActivatedRoute } from "@angular/router";
import { CooperativaService } from "src/app/services/cooperativa.service";
import { Observable } from "rxjs";
import { Cooperativa } from "src/app/models/cooperativa";
import { Productor } from "src/app/models/productor";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"],
})
export class FormComponent implements OnInit {
  public mainForm = new FormGroup({
    id: new FormControl(0, Validators.required),
    nombre: new FormControl("", Validators.required),
    apellido: new FormControl("", Validators.required),
    direccion: new FormControl(""),
    dni: new FormControl(""),
    cooperativa: new FormControl({}, Validators.required),
    productor: new FormControl({}),
  });

  cooperativas: Observable<Cooperativa>;
  lideres: Observable<Productor>;

  constructor(
    private service: ProductorService,
    private cooperativasService: CooperativaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get("id");
    this.cooperativas = this.cooperativasService.getAll();
    this.lideres = this.service.getLideres();

    if (id) {
      this.service.getById(id).subscribe((data) => {
        console.log(data, "asdasdasd");
        this.mainForm.setValue({
          id: data.id,
          nombre: data.nombre,
          apellido: data.apellido,
          direccion: data.direccion,
          dni: data.dni,
          cooperativa: data.cooperativa,
          productor: data.productor,
        });

        console.log(this.mainForm.get("productor"), "productor");
      });
    } else {
      this.mainForm.reset({
        id: 0,
        nombre: "",
        apellido: "",
        direccion: "",
        dni: "",
        cooperativa: {},
        productor: {},
      });
    }
  }

  onFormSubmit() {
    if (this.mainForm.valid) {
      this.service.save(this.mainForm.value).subscribe((data) => {
        this.router.navigate(["/productores"], {});
      });
    }
  }

  compareFn(c1, c2): boolean {
    console.log(c1, c2);
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
}
