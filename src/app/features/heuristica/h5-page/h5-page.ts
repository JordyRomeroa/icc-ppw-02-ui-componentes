import { Component } from '@angular/core';
import { HeaderHeuristicaComponent } from "../components/header-heuristica/header-heuristica";
import { HeuristicaMalo } from "./componentes/heuristica-malo/heuristica-malo";
import { HeuristicaBueno } from "./componentes/heuristica-bueno/heuristica-bueno";

@Component({
  selector: 'app-h5page',
  imports: [HeaderHeuristicaComponent, HeuristicaMalo, HeuristicaBueno],
  templateUrl: './h5-page.html',
  styleUrl: './h5-page.css',
})
export class H5page {

}
