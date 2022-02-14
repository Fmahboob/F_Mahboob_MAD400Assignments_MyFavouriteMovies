
import { Component, Input, OnInit } from '@angular/core';
import { Console } from 'console';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
 @Input() content?: Content;

  constructor() { }

  ngOnInit(): void {
  }
  ImageClick(index : number){
    console.log(this.content?.id, this.content?.title)
  }

}
