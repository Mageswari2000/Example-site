import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { tab } from '../dashboard.modal';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit,OnDestroy{
  tab=new tab();
  @Input() inputprofile:any;
  @Output() outputboolean=new EventEmitter<object>()
  constructor() { }

  ngOnInit(): void {
    console.log(this.inputprofile,"input")
  }

  ngOnDestroy() {
    console.log("output")
      this.tab.isprofile=false
      this.outputboolean.emit(this.tab)
  }

}
