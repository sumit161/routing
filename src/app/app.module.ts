import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UsersComponent } from './shared/component/users/users.component';
import { UserComponent } from './shared/component/users/user/user.component';
import { ProductsComponent } from './shared/component/products/products.component';
import { ProductComponent } from './shared/component/products/product/product.component';
import { DashbordComponent } from './shared/component/dashbord/dashbord.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { PageNotFoundComponent } from './shared/component/page-not-found/page-not-found.component';
import { DropdownDirective } from './shared/directive/dropdown.directive';
import { EditProductComponent } from './shared/component/products/edit-product/edit-product.component';
import { EditUserComponent } from './shared/component/users/edit-user/edit-user.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './shared/component/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    ProductsComponent,
    ProductComponent,
    DashbordComponent,
    NavbarComponent,
    PageNotFoundComponent,
    DropdownDirective,
    EditProductComponent,
    EditUserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
