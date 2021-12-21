import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './components/book/book.component';
import { BooksComponent } from './components/books/books.component';
import { SearchComponent } from './components/search/search.component';
import { LibaryHomeComponent } from './components/libary-home/libary-home.component';
import { FormsModule } from '@angular/forms';
import { EditModelComponent } from './components/edit-model/edit-model.component';
import { LibaryRoutingModule } from './libary-routing.module';


@NgModule({
  declarations: [
    BookComponent,
    BooksComponent,
    SearchComponent,
    LibaryHomeComponent,
    EditModelComponent,
    
  ],
  imports: [CommonModule, FormsModule,LibaryRoutingModule],
})
export class LibaryModule {}
