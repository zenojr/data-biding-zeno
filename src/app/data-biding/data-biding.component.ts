import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.css']
})
export class DataBidingComponent implements OnInit {

  url: string = 'http://zenofranca.com';
  urlImagem = 'http://lorempixel.com/400/200/food/';

  

  getValor() {
    return 1;
  }

  zenoDev: boolean = true;
    
  getZenoDev() {
    return true;
  }

  botaoClicado() {
    return alert('Wowww');
  }

  clickZeno(){
    return alert('OK');
  }

  valorAtual: string ='';
  onKeyUp(evento: KeyboardEvent){
    
    this.valorAtual = (<HTMLInputElement>evento.target).value;
    
    
  }

  constructor() { }

  ngOnInit() {
  }

}
