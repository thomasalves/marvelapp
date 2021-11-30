import { Component, OnInit } from '@angular/core';
import { HeroisService } from './../../shared/herois.service';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  [x: string]: any;

  allHerois: Observable<any> | undefined;

  todsoHerois!: Observable<any>;

  constructor(private heroisService: HeroisService, private router: Router) { }


  public paginaAtual = 1;

  ngOnInit(): void {
    this.getAllHerois()
  }

  getCharactersSearch(query: string): void {
    console.log(query)
    this.allHerois = this.heroisService.getCharacterByName(query)
    console.log(this.allHerois)
}
  getAllHerois() :void {
    this.allHerois = this.heroisService.GetAll();
  }

  getDetalhe(heroi: string): void {
    this.router.navigate(['/detalhe', heroi],  { relativeTo: this.route })
  }

}
