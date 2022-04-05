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
        { title: "Travail du cheval et enseignement", url: "/prestas/travail"},
        { title: "Formules et tarifs", url: "/prestas/formules"},
        { title: "Stages", url: "/prestas/stages"}
      ]
    },
    { 
      title: "Philosophie",
      pages: [
        { title: "De Travail", url: "/prestas/travail"},
        { title: "Comfortable Natural Life Paddock", url: "/prestas/natural"}
      ]
    },
    { 
      title: "À nos côtés", 
      pages: [
        { title: "Ils en parlent", url: "/prestas/talk"},
        { title: "Nos partenaires", url: "/prestas/partners"},
        { title: "La presse", url: "/prestas/press"}
      ]
    },
  ];

  public lastPages = [
    { title: 'Contact', url: '/prestas/contact'},
    { title: 'Blog', url: '/prestas/blog'}
  ];
  constructor() {}
  
  public redirect(link: string) {
    window.open(link,'_blank');
  }
}
