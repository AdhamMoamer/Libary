

import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IBook } from '../../models/book.model';
import { BookService } from '../../services/book.service';
import { EditModelComponent } from '../edit-model/edit-model.component';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styles: [],
})
export class BooksComponent implements OnInit {
  constructor(private bookService: BookService,private model:NgbModal) {}
  books: IBook[] = [];

  ngOnInit() {
    this.bookService.getBooks().subscribe((res: IBook[]) => {
      this.books = res;
    });
  }
  deleteBook(book: IBook){
    if (confirm('Are sure to delete book' + book.name)) {
      this.bookService
        .deleteBook(book)
        .then(()=>console.log('deleted successfully'));
    }
  }
  editBook(book:IBook){
    const modelRef = this.model.open(EditModelComponent,{
      size:'lg',
      centered:true,
      windowClass:'dark-model'
    });
    //to base book id to edit componenet 
    modelRef.componentInstance.id = book.id;

  }
}

