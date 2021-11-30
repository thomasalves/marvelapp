import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroisService } from 'src/app/shared/herois.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {

  heroisName!: string;
  heroi: Observable<any> | undefined

  constructor(private heroisService: HeroisService,  private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.heroisName = params['name']);
  }

  ngOnInit(): void {
    this.heroi = this.heroisService.getCharacterByName(this.heroisName)
    console.log(this.heroisName)
  }

}
