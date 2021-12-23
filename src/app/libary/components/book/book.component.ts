import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { NgForm } from '@angular/forms';
import { IBook } from '../../models/book.model';
import {MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  book: IBook = { id: '', name: '', type: '', author: '', price: 0 };
  constructor(private bookService: BookService,private _snackBar: MatSnackBar) {}

  ngOnInit(): void {}
  addBook(bookForm: NgForm) {
    this.bookService.addBook(bookForm.value).then(() => {
      bookForm.reset();
      this._snackBar.open("Book added successfully :)","OK");
    });
  }
   

}
