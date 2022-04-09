import { Injectable } from '@angular/core';

interface Task {
  codigo: string,
  nome: string,
  dia: string,
  hora: string,
  ementa: string
}

@Injectable()
export class WilsonDisciplinasServiceService {
  list: Array<Task> = [
    {
      codigo: 'ISW012A',
      nome: 'Desenvolvimento para Dispositivos Móveis I',
      dia: 'Segunda',
      hora: '19:00',
      ementa: '',
    }]

  constructor() { }
  }

