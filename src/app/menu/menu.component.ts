import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Product } from '../domain/products';
import { ProductService } from '../service/productservice';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; // Import Ng2SearchPipeModule
import { DataViewLayoutOptions } from 'primeng/dataview';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  layout: string = 'list';
  products!: Product[];
  dialogVisible: boolean = false;
  items: MenuItem[] | any;
  nameFilter: string = '';
  searchTerm: string = '';
  home: MenuItem | any;

  constructor(private productService: ProductService) {}
  ngOnInit() {

    this.productService.getProducts().then((data) => {
      this.products = data;
  });

    this.items = [{ label: 'Menu' }   ];

    this.home = { icon: 'pi pi-home', routerLink: '/' };
}
showDialog() {
  this.dialogVisible = true;
}
}
