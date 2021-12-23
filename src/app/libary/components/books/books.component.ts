import { ConfirmComponent } from './../confirm/confirm.component';


import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IBook } from '../../models/book.model';
import { BookService } from '../../services/book.service';
import { EditModelComponent } from '../edit-model/edit-model.component';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { BookComponent } from '../book/book.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';



@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements AfterViewInit {
  books: IBook[] = [];

  displayedColumns: string[] = ['id', 'name', 'type', 'author', 'price', 'update', 'delete'];
  isLoading = true;
  constructor(private bookService: BookService, private model: NgbModal, private dialog: MatDialog) { }
  @ViewChild(MatSort) sort: MatSort = new MatSort();
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  dataSource: MatTableDataSource<IBook> = new MatTableDataSource<IBook>();

  ngAfterViewInit(): void {
    this.bookService.getBooks().subscribe({
      next: (res) => {
        this.books = res;
        this.isLoading = false;
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.filterPredicate = function (data, filter: string): boolean {
          return data.name.toLowerCase().includes(filter) || data.type.toLowerCase().includes(filter) || data.author.toString() === filter;
        };
        if (this.paginator && this.sort) { this.dataSource.paginator = this.paginator; this.dataSource.sort = this.sort; };
      }, error: (error) => { this.isLoading = true; }
    });
  }
  addBook() {
    const modelRef = this.model.open(BookComponent, {
      size: 'lg',
      centered: true,
      windowClass: 'dark-model'
    });
  }
  deleteBook(book: IBook) {

    this.bookService
      .deleteBook(book)
      .then(() => console.log('deleted successfully'));

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
  applyFilter(event: any) {
    let filterValue = event?.target.value.toString()
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  openDeleteDialog(book: IBook) {

    const dialogRef = this.dialog.open(ConfirmComponent, {
      data: { message: "Are you sure that you want to delete book " + book.name + " ?" }}
      );

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteBook(book);
      }
    });
  }
}

