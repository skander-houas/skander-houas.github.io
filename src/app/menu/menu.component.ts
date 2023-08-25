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
  responsiveOptions: any[] | any;
  showDiv1: boolean = true;
  showDiv2: boolean = false;
  showDiv3: boolean = false;

  constructor(private productService: ProductService) {}
  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '768px',
        numVisible: 1,
        numScroll: 1
      }
    ];
    this.productService.getProducts().then((data) => {
      this.products = data;
  });

    this.items = [{ label: 'Menu' }   ];

    this.home = { icon: 'pi pi-home', routerLink: '/' };
}

showDialog() {
  this.dialogVisible = true;
}
showDiv(divNumber: number) {
  // Set the corresponding showDiv property to true based on the button clicked
  if (divNumber === 1) {
    this.showDiv1 = true;
    this.showDiv2 = false;
    this.showDiv3 = false;
  } else if (divNumber === 2) {
    this.showDiv1 = false;
    this.showDiv2 = true;
    this.showDiv3 = false;
  } else if (divNumber === 3) {
    this.showDiv1 = false;
    this.showDiv2 = false;
    this.showDiv3 = true;
  }}


closeDiv() {
  // Close all divs by setting all showDiv properties to false
  this.showDiv1 = false;
  this.showDiv2 = false;
  this.showDiv3 = false;
}

}
