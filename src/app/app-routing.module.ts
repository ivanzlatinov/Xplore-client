import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './core/about/about.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './trip/catalog/catalog.component';
import { DetailsComponent } from './trip/details/details.component';
import { CreateComponent } from './trip/create/create.component';
import { AuthActivate } from './shared/guards/auth.activate';

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
    path: 'create',
    component: CreateComponent,
    canActivate: [AuthActivate],
    data: {
      title: 'Create',
      loginRequired: true
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
