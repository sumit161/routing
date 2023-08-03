import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './shared/component/users/users.component';
import { ProductsComponent } from './shared/component/products/products.component';
import { DashbordComponent } from './shared/component/dashbord/dashbord.component';
import { PageNotFoundComponent } from './shared/component/page-not-found/page-not-found.component';
import { ProductComponent } from './shared/component/products/product/product.component';
import { UserComponent } from './shared/component/users/user/user.component';
import { EditProductComponent } from './shared/component/products/edit-product/edit-product.component';
import { EditUserComponent } from './shared/component/users/edit-user/edit-user.component';
import { AuthGuard } from './shared/services/auth.guard';
import { LoginComponent } from './shared/component/login/login.component';
import { UserRoleGuardGuard } from './shared/services/user-role-guard.guard';
import { ProductResolveService } from './shared/services/ProductResolve.service';
import { CommonDeactivateGuard } from './shared/services/common-deactivate.guard';

const routes: Routes = [
  // { path: '', component: DashbordComponent },
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component:LoginComponent,title:"login"},
  { path: 'home', component: DashbordComponent },
  {
    path: 'users',
    component: UsersComponent,canActivateChild:[AuthGuard],
    title:"users",
    children: [
      { path: ':userid', component: UserComponent },
      { path: ':userid/editUser', component: EditUserComponent },
    ],//, canActivate:[AuthGuard]
  },
  // { path: 'users/:userid', component: UserComponent },
  // { path: 'users/:userid/editUser', component: EditUserComponent },canActivate:[AuthGuard],
  {
    path: 'products',
    component: ProductsComponent,
    title:"products",
    canActivate:[UserRoleGuardGuard],
    data:{
      userRole :"admin"
    },
    children: [
      { path: ':singleProduct1', component: ProductComponent ,resolve:{ResolveProduct:ProductResolveService}},
      { path: ':singleProduct2/edit', component: EditProductComponent,canDeactivate:[CommonDeactivateGuard] },
    ],
  },
  // { path: 'products/:singleProduct1', component: ProductComponent },
  // { path: 'products/:singleProduct2/edit', component: EditProductComponent },//7/05
  { path: '**', redirectTo: 'PageNotFound' },
  { path: 'PageNotFound', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
