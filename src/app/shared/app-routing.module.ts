import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { UsersComponent } from "./components/users/users.component";
import { ProductsComponent } from "./components/products/products.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { UserInfoComponent } from "./components/users/user-info/user-info.component";
import { UserFormComponent } from "./components/users/user-form/user-form.component";
import { ProductdetailsComponent } from "./components/products/productdetails/productdetails.component";
import { ProductformComponent } from "./components/products/productform/productform.component";

const appRoutes : Routes = [
       {
        path : '',  //http://localhost:4200/
        component : HomeComponent,
        title : 'Home'
       },
       {
        path : 'home', //http://localhost:4200/home
        component : HomeComponent,
        title : 'Home'
       }, 
       {
        path : 'users', //http://localhost:4200/users
        component : UsersComponent,
        title : 'Users'
       },
       {
        path : 'users/adduser', //http://localhost:4200/users/123/editUser 
        component : UserFormComponent ,
        title : 'Users'
       },
       {
        path : 'users/:userId', //http://localhost:4200/users/123
        component : UserInfoComponent ,
        title : 'Users'
       },
       {
        path : 'users/:userId/edituser', //http://localhost:4200/users/123/editUser 
        component : UserFormComponent ,
        title : 'Users'
       },
       {
        path : 'products', //http://localhost:4200/products
        component : ProductsComponent,
        title : 'Products'
       },
       {
        path : 'products/addproduct', //http://localhost:4200/products/addproduct
        component : ProductformComponent,
        title : 'Products'
       },
       {
        path : 'products/:prodId', //http://localhost:4200/products/pid
        component : ProductdetailsComponent,
        title : 'Products'
       },
       {
        path : 'products/:prodId/editproduct', //http://localhost:4200/products/pid/editproduct
        component : ProductformComponent,
        title : 'Products'
       },
       {
        path : 'page-not-found',
        component : PageNotFoundComponent
       },
       {
        path : '**',
        redirectTo : 'page-not-found'
       }

]

@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports : [RouterModule]
})
export class AppRoutingModule {
  
}

//Routing Configuration.
//http://localhost:4200/ or http://localhost:4200/home >> HomeComp
//http://localhost:4200/users >> usersComp
//http://localhost:4200/products >> productsComp