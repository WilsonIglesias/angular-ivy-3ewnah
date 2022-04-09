import { Component, OnInit } from '@angular/core';
import { WilsonDisciplinasServiceService } from '../wilson-disciplinas-service.service';

@Component({
  selector: 'app-wilson-lista-component',
  templateUrl: './wilson-lista-component.component.html',
  styleUrls: ['./wilson-lista-component.component.css']
})
export class WilsonListaComponentComponent implements OnInit {

  constructor(public tasks: WilsonDisciplinasServiceService) { }

  ngOnInit() {
  }

}