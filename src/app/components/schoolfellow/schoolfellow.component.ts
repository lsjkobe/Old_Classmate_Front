import { HttpService } from 'src/app/service/http/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schoolfellow',
  templateUrl: './schoolfellow.component.html',
  styleUrls: ['./schoolfellow.component.css']
})
export class SchoolfellowComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  results: any;
  getSchoolfellow(){
    this.httpService.getSchoolfellowById().subscribe(
      data=>{
        this.results = data["data"].studentInfos;
      },
      error=>{
        console.log(error);
      }
      
    );
  }

}
