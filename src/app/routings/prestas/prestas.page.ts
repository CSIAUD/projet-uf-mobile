import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-Prestas',
  templateUrl: './Prestas.page.html',
  styleUrls: ['./Prestas.page.scss'],
})
export class PrestasPage implements OnInit {
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
