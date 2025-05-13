import { Api } from './../models/responseApi.model';
import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';
import { Observable } from 'rxjs';
import { map }from 'rxjs/operators';
import { environment } from '../../environments/environment';
import * as CryptoJS from 'crypto-js'; 

@Injectable({
  providedIn: 'root'
})
export class HeroisService {

  constructor(private http: HttpClient) { }

public GetAll(): Observable<Api> {
  const timestamp = new Date().getTime().toString(); 
  const apiKey = environment.public_Key; 
  const privateKey = environment.private_Key;  

  const hash = CryptoJS.MD5(timestamp + privateKey + apiKey).toString(CryptoJS.enc.Hex);


  // Set up the parameters
  const params = {
    ts: timestamp,
    apikey: apiKey,
    hash: hash,
  };
  return this.http.get<Api>(`${environment.urlGetway}`, {
    params,
  }).pipe(map((data): Api => data));
}

  public getCharacterByName(name: string) :Observable<Api> {
    const timestamp = new Date().getTime().toString(); 
    const apiKey = environment.public_Key; 
    const privateKey = environment.private_Key;  

    const hash = CryptoJS.MD5(timestamp + privateKey + apiKey).toString(CryptoJS.enc.Hex);

    let requestUrl = `${environment.urlGetway}?orderBy=name&nameStartsWith=${name}&ts=1647618227&apikey=${environment.public_Key}&hash=${hash}`;
    return this.http.get<Api>(requestUrl)
        .pipe(map((data): Api => data));
  }
}
