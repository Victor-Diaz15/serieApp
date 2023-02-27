import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Portada', url: '/portada', icon: 'book' },
    { title: 'Personajes', url: '/personajes', icon: 'people' },
    { title: 'Momentos', url: 'momentos', icon: 'images' },
    { title: 'Acerca de', url: '/acerca-de', icon: 'document' },
    { title: 'En mi vida', url: '/mi-vida', icon: 'pricetag' },
    { title: 'Contratame', url: '/contratame', icon: 'person-add' },
  ];
  constructor() {}
}
