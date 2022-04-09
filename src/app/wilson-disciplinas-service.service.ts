import { Injectable } from '@angular/core';

interface Task {
  codigo: string;
  nome: string;
  dia: string;
  hora: string;
  ementa: string;
}

@Injectable()
export class WilsonDisciplinasServiceService {
  list: Array<Task> = [
    {
      codigo: 'ISW012A',
      nome: 'Desenvolvimento para Dispositivos Móveis I',
      dia: 'Segunda',
      hora: '19:00',
      ementa: 'clique',
    },
  
    {
      codigo: 'AGM004A',
      nome: 'Negócios e Marketing e Eletrônicos',
      dia: 'Quarta',
      hora: '19:00',
      ementa: 'clique',
    },

    {
      codigo: 'IDS002A',
      nome: 'Desenvolvimento para Servidores II',
      dia: 'Quinta',
      hora: '19:00',
      ementa: 'clique',
    },

    {
      codigo: 'ITE004A',
      nome: 'Tópicos Especiais em Sistemas para Internet II',
      dia: 'Sexta',
      hora: '19:00',
      ementa: 'clique',
    },

    {
      codigo: 'ISW011A',
      nome: 'Projeto de Prototipagem e Testes de Usabilidade',
      dia: 'Sábado',
      hora: '08:00',
      ementa: 'clique',
    }
  
  ]

  constructor() { }

  getList(){
    return this.list;

  }

  add(codigo: string){
    this.list.push();

  }
  remove(index: number){
    this.list.splice(index, 1);

  }
}
  

