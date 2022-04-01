import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public title: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let temp =  this.activatedRoute.snapshot.paramMap.get('id');
    this.title = this.getTitle(temp);
  }
  getTitle(str: string){
    let title = "";
    switch(str) { 
      case "travail": { 
        title = "Travail du cheval et enseignement";
        break; 
      }
      case "formules": { 
        title = "Formules et tarifs";
        break; 
      }
      case "stages": { 
        title = "Stages";
        break; 
      }
      default: { 
         title = str;
         break; 
      } 
   } 
    return title;
  }
}
