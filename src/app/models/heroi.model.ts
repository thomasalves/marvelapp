import { Api } from './responseApi.model';
import { objectHerois } from './series.model';
export class Heroi {
 public comics!: objectHerois;
 public description!: string;
 public events!: objectHerois;
 public id!: number;
 public modified!: string;
 public name!: string;
 public resourceURI!: string;
 public series!: objectHerois
 public stories!: objectHerois
 public thumbnail!:object | any
 public urls!: Array<object>
}
