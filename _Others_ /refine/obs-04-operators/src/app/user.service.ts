import { Injectable } from "@angular/core";
import { EventEmitter } from "events";

@Injectable({providedIn: 'root'})
export class UserService {
    activatedEmitter = new EventEmitter<boolean>();
}