import { NotFoundComponent } from './components/not-found/not-found.component';

import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo:'/home',pathMatch:'full' },
  {
    path: 'libary',
    loadChildren: () => import('./libary/libary.module').then(m => m.LibaryModule)
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
