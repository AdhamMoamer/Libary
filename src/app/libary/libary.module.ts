import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './components/book/book.component';
import { BooksComponent } from './components/books/books.component';
import { SearchComponent } from './components/search/search.component';
import { LibaryHomeComponent } from './components/libary-home/libary-home.component';
import { FormsModule } from '@angular/forms';
import { EditModelComponent } from './components/edit-model/edit-model.component';
import { LibaryRoutingModule } from './libary-routing.module';

// Material Data tables
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmComponent } from './components/confirm/confirm.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    BookComponent,
    BooksComponent,
    SearchComponent,
    LibaryHomeComponent,
    EditModelComponent,
    ConfirmComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    LibaryRoutingModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSnackBarModule

  ],

  
})
export class LibaryModule { }
