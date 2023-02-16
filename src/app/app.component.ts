import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  items: any = [
    {
      label: 'Home page',
      route: '/home',
    },
    {
      label: 'About page',
      route: '/about',
    },

    {
      label: 'Contact page',
      route: '/contact',
    },
  ];
}
