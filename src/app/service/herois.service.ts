import { Api } from './../models/responseApi.model';
import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';
import { Observable } from 'rxjs';
import { map }from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class HeroisService {

  constructor(private http: HttpClient) { }

 public  GetAll(): Observable<Api> {
    return  this.http.get<Api>(`${environment.urlGetway}?ts=1647618227&apikey=${environment.public_Key}&hash=${environment.hash}&limit=100` )
      .pipe(map((data): Api => data))
  }

 public getCharacterByName(name: string) :Observable<Api> {
    let requestUrl = `${environment.urlGetway}?orderBy=name&nameStartsWith=${name}&ts=1647618227&apikey=${environment.public_Key}&hash=${environment.hash}`;
    return this.http.get<Api>(requestUrl)
      .pipe(map((data): Api => data));
}
}
