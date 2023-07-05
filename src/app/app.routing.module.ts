import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { IricComponent } from "./escuela/iric/iric.component";
import { OperasBasComponent } from "./escuela/formularios/operas-bas/operas-bas.component";
import { AlumnoReactiveComponent } from "./formularios/alumno-reactive/alumno-reactive.component";
import { OperasModule } from "./escuela/formularios/operas/operas.module";

const routes:Routes=[
    {path:'',redirectTo:'/home', pathMatch:'full'},
    {path:'Iric',component:IricComponent},
    {path:'Operas',component:OperasModule},
    {path:'FormReactive',component:AlumnoReactiveComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}