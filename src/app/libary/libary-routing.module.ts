import { LibaryHomeComponent } from './components/libary-home/libary-home.component';
import { SearchComponent } from './components/search/search.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
      { path: '', component: LibaryHomeComponent },
      { path: 'search', component: SearchComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LibaryRoutingModule { }
