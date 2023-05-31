import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { tab } from '../dashboard.modal';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit,OnDestroy{
  @Input() inputboolean:tab=new tab();
  @Output() outputboolean=new EventEmitter<object>()
  constructor() { }

  ngOnInit(): void {
    console.log(this.inputboolean,"input")
  }

  ngOnDestroy() {
    console.log("output")
      this.inputboolean.isprofile=false
      this.outputboolean.emit(this.inputboolean)
  }

}
