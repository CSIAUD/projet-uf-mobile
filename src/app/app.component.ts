import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Accueil', url: '/landing'},
    { title: 'Équipe', url: '/team'},
    { title: 'Instalations', url: '/installations'},
  ];

  public toggles = [
    { 
      title: "Prestations", 
      pages: [
        { title: "Travail du cheval et enseignement", url: "/folder/travail"},
        { title: "Formules et tarifs", url: "/folder/formules"},
        { title: "Stages", url: "/folder/stages"}
      ]
    },
    { 
      title: "Philosophie",
      pages: [
        { title: "De Travail", url: "/folder/travail"},
        { title: "Comfortable Natural Life Paddock", url: "/folder/natural"}
      ]
    },
    { 
      title: "À nos côtés", 
      pages: [
        { title: "Ils en parlent", url: "/folder/talk"},
        { title: "Nos partenaires", url: "/folder/partners"},
        { title: "La presse", url: "/folder/press"}
      ]
    },
  ];

  public lastPages = [
    { title: 'Contact', url: '/folder/contact'},
    { title: 'Blog', url: '/folder/blog'}
  ];
  constructor() {}
}
