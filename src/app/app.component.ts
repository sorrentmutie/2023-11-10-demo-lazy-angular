import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Demo Lazy loading {{title}}</h1>
    <button routerLink="/customers">Customers</button>
    <button routerLink="/orders">Orders</button>
  
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'my-demo-lazy';
}
