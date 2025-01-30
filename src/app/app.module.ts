import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './shared/components/home/home.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { UsersComponent } from './shared/components/users/users.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { AppRoutingModule } from './shared/app-routing.module';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { UserInfoComponent } from './shared/components/users/user-info/user-info.component';
import { UserFormComponent } from './shared/components/users/user-form/user-form.component';
import { ProductdetailsComponent } from './shared/components/products/productdetails/productdetails.component';
import { ProductformComponent } from './shared/components/products/productform/productform.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    UsersComponent,
    NavBarComponent,
    PageNotFoundComponent,
    UserInfoComponent,
    UserFormComponent,
    ProductdetailsComponent,
    ProductformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
