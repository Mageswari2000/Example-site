import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { tab } from '../dashboard.modal';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit,OnDestroy {
  tab=new tab()
@Input() inputcontact:any;
@Output() outputboolean=new EventEmitter<any>()
  constructor() { }

  ngOnInit(): void {
    console.log(this.inputcontact,"input")
  }

  ngOnDestroy() {
    console.log("output")
      this.tab.iscontact=false
      this.outputboolean.emit(this.tab)
  }

}
