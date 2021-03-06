import { Component, OnInit } from '@angular/core';
import { HeroisService } from '../../service/herois.service';
import { Router } from '@angular/router';
import { Heroi } from 'src/app/models/heroi.model';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  allHerois: Heroi[] = [];

  constructor(private heroisService: HeroisService, private router: Router) { }

  public paginaAtual = 1;

  ngOnInit(): void {
    this.getAllHerois()
  }

  getCharactersSearch(query: string): void {
    this.heroisService.getCharacterByName(query).subscribe(resp => {
      this.allHerois = resp.data.results
    })
  }
  getAllHerois() :void {
    this.heroisService.GetAll().subscribe(data => {
      this.allHerois = data.data.results;
    })
  }


  getDetalhe(heroi: string): void {
    this.router.navigate(['/detalhe', heroi])
  }

}
