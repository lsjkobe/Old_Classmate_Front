import { MdHttpService } from 'src/app/service/http/md-http.service';
import { MdFile } from './../../../entity/MdFile';
import { Component, OnInit} from '@angular/core';
import { EditorConfig } from './editor-config';
import { isNullOrUndefined } from 'util';
declare var editormd: any;
@Component({
  selector: 'app-mditor-md',
  templateUrl: './mditor-md.component.html',
  styleUrls: ['./mditor-md.component.css']
})
export class MditorMdComponent implements OnInit {


  constructor(private mdHttpService:MdHttpService) { }
  editor:any;
  conf = new EditorConfig();
  // markdown = '';

  mdFile: MdFile = new MdFile();
  ngOnInit() {
    let md = this;
    this.editor = editormd('md', this.conf); // 创建编辑器
    // 当编辑器内容改变时，触发textarea的change事件
    this.editor.on('change', function () {
      md.mdFile.data = this.getMarkdown();
    });
    this.get();
  }

  title = 'app';

  
  // 同步属性内容
  syncModel(str:any): void {
    this.mdFile.data = str;
  }
  save(){
    if(!isNullOrUndefined(this.mdFile.data)){
      this.mdHttpService.uploadMd(this.mdFile).subscribe(
        data=>{
          console.log(data);
        },
        error=>{
          console.log(error);
        }
      );
    } 
  }

  get(){
    this.mdHttpService.findById('81499b09-198b-47f9-b259-9e399dc39604').subscribe(
      data=>{
        this.mdFile = data;
        this.editor.setMarkdown(this.mdFile.data);
      },
      error=>{
        console.info(error);
      }
    );
  }


  
}
