import { Component } from '@angular/core';
import { HeaderHeuristicaComponent } from '../components/header-heuristica/header-heuristica';
import { HeuristicaMalo } from "./componentes/heuristica-malo/heuristica-malo";
import { HeuristicaBueno } from "./componentes/heuristica-bueno/heuristica-bueno";

@Component({
  selector: 'app-h6page',
  imports: [HeaderHeuristicaComponent, HeuristicaMalo, HeuristicaBueno],

  templateUrl: './h6-page.html',
  styleUrl: './h6-page.css',
})
export class H6page {

}
