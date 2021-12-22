

import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IBook } from '../../models/book.model';
import { BookService } from '../../services/book.service';
import { EditModelComponent } from '../edit-model/edit-model.component';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls:['./books.component.css']
})
export class BooksComponent implements OnInit, AfterViewInit {
  books: IBook[] = [];

  displayedColumns: string[] = ['id', 'name', 'type', 'author', 'price', 'actions'];
  isLoading = true;
  constructor(private bookService: BookService, private model: NgbModal) { }
  @ViewChild(MatSort) sort: MatSort = new MatSort();
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  listData: MatTableDataSource<IBook> = new MatTableDataSource<IBook>();

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    this.bookService.getBooks().subscribe({
      next: (res) => {
        this.books = res;
        this.isLoading = false;
        this.listData = new MatTableDataSource(res);
        if (this.paginator && this.sort) { this.listData.paginator = this.paginator; this.listData.sort = this.sort; };
      }, error: (error) => { this.isLoading = true; }
    });
  }
  deleteBook(book: IBook) {
    if (confirm('Are sure to delete book' + book.name)) {
      this.bookService
        .deleteBook(book)
        .then(() => console.log('deleted successfully'));
    }
  }
  editBook(book: IBook) {
    const modelRef = this.model.open(EditModelComponent, {
      size: 'lg',
      centered: true,
      windowClass: 'dark-model'
    });
    //to pass book id to edit componenet 
    modelRef.componentInstance.id = book.id;
  }
}

