import { Component,OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: MenuItem[] | any;

  home: MenuItem | any;

  ngOnInit() {
    this.items = [{ label: ' ' } ];

    this.home = { icon: 'pi pi-home', routerLink: '/' };
}
}
