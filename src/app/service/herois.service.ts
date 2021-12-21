import { Api } from './../models/responseApi.model';
import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';
import { Observable } from 'rxjs';
import { map }from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HeroisService {


  PUBLIC_KEY = '38610a3dfe5d1bb4758924e29798a5fa';
  HASH = '78cc56b83e445fb309b64ef1db417783';
  URL = `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`
  private _marvelCharacterUrl: string = "https://gateway.marvel.com:443/v1/public/characters";

  constructor(private http: HttpClient) { }

 public  GetAll(): Observable<Api> {
    return  this.http.get<Api>(this.URL)
      .pipe(map((data): Api => data))
  }

 public getCharacterByName(name: string) {
    let requestUrl = this._marvelCharacterUrl + "?orderBy=name" + "&nameStartsWith=" + name + "&ts=1&apikey=" + this.PUBLIC_KEY+ "&hash=" + this.HASH;
    return this.http.get<Api>(requestUrl)
      .pipe(map((data): Api => data));
}
}
