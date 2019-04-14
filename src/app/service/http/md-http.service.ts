import { MdFile } from './../../entity/MdFile';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpUrl } from '../http-url';

@Injectable({
  providedIn: 'root'
})
export class MdHttpService {

  constructor(private http: HttpClient) { }
  
  uploadMd(mdFile: MdFile){
    return this.http.post<MdFile>(HttpUrl.MD_UPLOAD, mdFile);
  }

  findById(id: string){
    return this.http.get<MdFile>(HttpUrl.MD_GET_BY_ID+'/'+id);
  }
}