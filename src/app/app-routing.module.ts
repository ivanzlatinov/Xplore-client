import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './core/about/about.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    data: {
      title: 'Xplore',
      
    }
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'Xplore',
    }
  },
  {
  path: 'about',
  component: AboutComponent,
  data: {
    title: 'About us',
   } 
  },
  {
    path: 'catalog',
    component: CatalogComponent,
    data: {
      title: 'Catalog',
     }
  },
  
  {
    path: 'details/:id',
    component: DetailsComponent,
    data: {
      title: 'Details',
    }
  },
  {
    path: 'not-found',
    component: PageNotFoundComponent,
    data: {
    title: 'Page not found'
    }
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
