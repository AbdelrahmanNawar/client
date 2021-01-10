import { Injectable, NgModule } from '@angular/core';
import { BehaviorSubject, Subject } from "rxjs";

@NgModule()
export class SharedDataService {
    constructor(){}
    public editDataDetails: any = [];
    public subject = new Subject<any>();
    private messageSource = new  BehaviorSubject(this.editDataDetails);
    currentMessage = this.messageSource.asObservable();

    changeMessage(message: number) {
        this.messageSource.next(message)
    }
}