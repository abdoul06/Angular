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

}
