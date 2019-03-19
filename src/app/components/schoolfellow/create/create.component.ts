import { HttpService } from './../../../service/http/http.service';
import { Component, OnInit } from '@angular/core';
import { UserVO } from 'src/app/entity/UserVO';
import { isNullOrUndefined, error } from 'util';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  userVO: UserVO = new UserVO();
  confirmPwd: string = '';
  constructor(private http: HttpService) { }

  ngOnInit() {
  }

  confirm(){
    if(!isNullOrUndefined(this.userVO.password) && this.userVO.password == this.confirmPwd){
      this.userVO.createdOn = Date.now();
      this.userVO.updatedOn = Date.now();
      this.userVO.enable = true;
      this.http.create(this.userVO).subscribe(
        data=>{
          console.log(data);
        },
        error=>{
          console.log(error);
        }
      );
    }
  }
}
