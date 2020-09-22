'use strict';

import { ActivatedRoute, Router } from '@angular/router';
import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { BooksService } from '../../services/books.service';
import { IBookDto } from '../../interfaces/book.Dto';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  bookstore: IBookDto;
  bookstoreForm: FormGroup;

  constructor(private route: ActivatedRoute, private bookstoreService: BooksService,
    private ngZone: NgZone, private router: Router, private formBuilder: FormBuilder) {

    this.bookstoreForm = this.formBuilder.group({
      dateOfPublish: '',
      language: '',
      author: '',
      title: '',
      _id: ''
    });
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {

      this.bookstoreService.GetBookById(params.get('bookId'))
        .subscribe((bookstore: IBookDto) => {

          this.bookstore = bookstore;
          console.log(`${this.bookstore.title}`);
        });
    });
  }

  /* For Modify */
  onBookEdit(id: string, bookstoreData: IBookDto): void {

    console.warn(`Book Edit Request for Id: ${id}`);

    this.bookstoreService.EditBookById(id, bookstoreData).subscribe(res => {

      console.log('Book Modified!')
      this.ngZone.run(() => this.router.navigateByUrl('/books'))
    });
  }

}
