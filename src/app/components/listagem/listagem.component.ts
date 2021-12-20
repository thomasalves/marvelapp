import { Component, OnInit } from '@angular/core';
import { HeroisService } from '../../service/herois.service';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';
import { Heroi } from 'src/app/models/heroi.model';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {


  allHerois: Heroi[] = [];
  testeHeroi!: Heroi;

  todsoHerois!: Observable<any>;

  constructor(private heroisService: HeroisService, private router: Router) { }


  public paginaAtual = 1;

  ngOnInit(): void {
    this.getAllHerois()
  }

  getCharactersSearch(query: string): void {
    console.log(query)
    console.log(this.allHerois)
    // this.allHerois = this.heroisService.getCharacterByName(query)
}
  getAllHerois() :void {
    this.heroisService.GetAll().subscribe(data => {
      this.allHerois = data.data.results;
      console.log(this.allHerois)
    })
    // this.allHerois = this.heroisService.GetAll();
    // console.log(this.allHerois)
  }

  getDetalhe(heroi: string): void {
    this.router.navigate(['/detalhe', heroi])
  }

}
