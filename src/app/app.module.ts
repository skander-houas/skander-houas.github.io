import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import { ButtonModule } from 'primeng/button';
 import { BreadcrumbModule } from 'primeng/breadcrumb';
 import { TabViewModule } from 'primeng/tabview';
 import { RatingModule } from 'primeng/rating';
 import { TagModule } from 'primeng/tag';
 import { ProductService } from './service/productservice';
 import { TableModule } from 'primeng/table';
 import { PaginatorModule } from 'primeng/paginator';
 import { DataViewModule, DataViewLayoutOptions } from 'primeng/dataview';
 import { DialogModule } from 'primeng/dialog';
  import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchFilterPipe } from './search-filter.pipe';
import { CarouselModule } from 'primeng/carousel';
 @NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MenuComponent,
    ContactComponent,
    FooterComponent,
    NavbarComponent,
    SearchFilterPipe
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    BreadcrumbModule,TabViewModule,RatingModule,TagModule,TableModule,PaginatorModule,DataViewModule,DialogModule,
    Ng2SearchPipeModule,CarouselModule

  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
