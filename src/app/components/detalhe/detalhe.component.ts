import { Heroi } from 'src/app/models/heroi.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroisService } from 'src/app/service/herois.service';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {

  heroisName!: string;
  heroi: Heroi[] = []

  constructor(private heroisService: HeroisService,  private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.heroisName = params['name']);
  }

  ngOnInit(): void {
    this.heroisService.getCharacterByName(this.heroisName).subscribe(detalhe =>{
      console.log(detalhe.data.results)
      this.heroi = detalhe.data.results
    })
  }

}
