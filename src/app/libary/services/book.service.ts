
import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc, deleteDoc, doc, setDoc, updateDoc } from 'firebase/firestore';
import { docData } from 'rxfire/firestore';
import { Observable } from 'rxjs';
import { IBook } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private fireStore: Firestore) { }

  getBooks(){
    const booksRef= collection(this.fireStore,'books');
    return collectionData(booksRef,{idField:'id'}) as Observable<IBook[]>;
  }
  getBook(id:string){
    const bookref = doc(this.fireStore,`books/${id}`);
    return docData(bookref,{idField:'id'}) as Observable<IBook>;
  }
  addBook(book :IBook){
    const booksRef = collection(this.fireStore,'books');
    return addDoc (booksRef,book);
  }
  deleteBook(book:IBook){
    const docRef = doc(this.fireStore,`books/${book.id}`);
    return deleteDoc(docRef);
  }
  updateBook(book : IBook){
    const bookref = doc(this.fireStore,`books/${book.id}`);
    return setDoc(bookref,book);
  }
  modifyBookPrice(book: IBook, amount: number) {
    const bookDocRef = doc(this.fireStore, `books/${book.id}`);
    return updateDoc(bookDocRef, { price: amount });
  }

}
