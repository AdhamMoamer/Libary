import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { NgForm } from '@angular/forms';
import { IBook } from '../../models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  book: IBook = { id: '', name: '', type: '', author: '', price: 0 };
  constructor(private bookService: BookService) {}

  ngOnInit(): void {}
  addBook(bookForm: NgForm) {
    debugger;
    this.bookService.addBook(bookForm.value).then(() => {
      bookForm.reset();
    });
  }
}
