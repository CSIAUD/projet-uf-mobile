import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit() {
    initToggle();
  }
  public toggle(id: string, ev: Event){
    let toggle = document.getElementById(id) as HTMLElement;
    let open: boolean = toggle.dataset.open == "true" ? true : false ;
    let button = ev.target as HTMLElement;

    if(open){
      toggle.dataset.open = "false";
      toggle.style.height = toggle.dataset.height+"px";
      button.textContent = "Voir moins...";
    }else{
      toggle.dataset.open = "true";
      toggle.style.height = "0px";
      button.textContent = "Voir plus...";
    }
  }
}

function initToggle(){
  let toggle = document.getElementById("karineMassot") as HTMLElement;
  toggle.dataset.height = (toggle.getBoundingClientRect().height).toString();
  toggle.style.height = "0px";
}