import { Api } from './../models/responseApi.model';
import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';
import { Observable } from 'rxjs';
import { map }from 'rxjs/operators';
import { environment } from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class HeroisService {

  constructor(private http: HttpClient) { }

 public  GetAll(): Observable<Api> {
    return  this.http.get<Api>(`${environment.url}?ts=1647618227&apikey=${environment.public_Key}&hash=${environment.hash}&limit=100` )
      .pipe(map((data): Api => data))
  }

 public getCharacterByName(name: string) :Observable<Api> {
    let requestUrl = `${environment.url}?orderBy=name&nameStartsWith=${name}&ts=1647618227&apikey=${environment.public_Key}&hash=${environment.hash}`;
    return this.http.get<Api>(requestUrl)
      .pipe(map((data): Api => data));
}
}
