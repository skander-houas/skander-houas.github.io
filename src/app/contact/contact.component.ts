import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  items: MenuItem[] | any;

  home: MenuItem | any;
  ngOnInit() {
    this.items = [{ label: 'Contact' } ];

    this.home = { icon: 'pi pi-home', routerLink: '/' };
}
}
