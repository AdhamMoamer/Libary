import { IBook } from './../../models/book.model';
import { Component, Input, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-edit-model',
  templateUrl: './edit-model.component.html',
  styles: [
  ]
})
export class EditModelComponent implements OnInit {

  constructor(private bookService: BookService,public activeModal: NgbActiveModal) { }
  @Input() id: string = "";
  book: IBook = { id: "", name: "", type: "", author: "", price: 0 };

  ngOnInit(): void {
    if (this.id) {
      this.bookService.getBook(this.id).subscribe((res: IBook) => {
        this.book = res;
      });
    }
  }
  updateBook(){
    this.bookService.updateBook(this.book).then(() => {
      this.activeModal.close();
      console.log('Data add successfully');
    })
  }
  setPrice(book: IBook, price: number) {
    this.bookService.modifyBookPrice(book, price)
  }

}
