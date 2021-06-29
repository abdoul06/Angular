import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { BookService } from './book.service';
import { Book } from './book';

@Component({
	selector: 'app-book',
	templateUrl: './book.component.html',
	styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
	//Component properties
	allBooks: Book[];
	statusCode: number;
	requestProcessing = false;
	bookIdToUpdate = null;
	processValidation = false;
	//Create form
	bookForm = new FormGroup({
		title: new FormControl('', Validators.required),
		author: new FormControl('', Validators.required)
	});
	//Create constructor to get service instance
	constructor(private bookService: BookService) {
	}
	//Create ngOnInit() and and load books
	ngOnInit(): void {
		this.getAllBooks();
	}
	//Fetch all books
	getAllBooks() {
		this.bookService.getAllBooks()
			.subscribe(
				data => this.allBooks = data,
				errorCode => this.statusCode = errorCode);
	}
	//Handle create and update book
	onBookFormSubmit() {
		this.processValidation = true;
		if (this.bookForm.invalid) {
			return; //Validation failed, exit from method.
		}
		//Form is valid, now perform create or update
		this.preProcessConfigurations();
		let book = this.bookForm.value;
		if (this.bookIdToUpdate === null) {
			//Generate book id then create book
			this.bookService.getAllBooks()
				.subscribe(books => {
					//Generate book id (logic is for demo)	 
					let maxIndex = books.length - 1;
					let bookWithMaxIndex = books[maxIndex];
					let bookId = bookWithMaxIndex.id + 1;
					book.id = bookId;

					//Create book
					this.bookService.createBook(book)
						.subscribe(statusCode => {
							//Expecting success code 201 from server
							this.statusCode = statusCode;
							this.getAllBooks();
							this.backToCreateBook();
						},
							errorCode => this.statusCode = errorCode
						);
				});
		} else {
			//Handle update book
			book.id = this.bookIdToUpdate;
			this.bookService.updateBook(book)
				.subscribe(statusCode => {
					//this.statusCode = statusCode;
					//Expecting success code 204 from server
					this.statusCode = 200;
					this.getAllBooks();
					this.backToCreateBook();
				},
					errorCode => this.statusCode = errorCode);
		}
	}
	//Load book by id to edit
	loadBookToEdit(bookId: string) {
		this.preProcessConfigurations();
		this.bookService.getBookById(bookId)
			.subscribe(book => {
				this.bookIdToUpdate = book.id;
				this.bookForm.setValue({ title: book.title, author: book.author });
				this.processValidation = true;
				this.requestProcessing = false;
			},
				errorCode => this.statusCode = errorCode);
	}
	//Delete book
	deleteBook(bookId: string) {
		this.preProcessConfigurations();
		this.bookService.deleteBookById(bookId)
			.subscribe(successCode => {
				//this.statusCode = successCode;
				//Expecting success code 204 from server
				this.statusCode = 204;
				this.getAllBooks();
				this.backToCreateBook();
			},
				errorCode => this.statusCode = errorCode);
	}
	//Perform preliminary processing configurations
	preProcessConfigurations() {
		this.statusCode = null;
		this.requestProcessing = true;
	}
	//Go back from update to create
	backToCreateBook() {
		this.bookIdToUpdate = null;
		this.bookForm.reset();
		this.processValidation = false;
	}
}
