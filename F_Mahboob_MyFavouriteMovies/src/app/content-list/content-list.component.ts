import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  list: Content[] = [];

  constructor() { 

  }

  ngOnInit(): void {

    this.list = [{
      id: '',
      title: '',
      description: '',
      creator: '',
      imgURL: '',
      type: '',
      tags: []
    },{
       id: 1,
      title: '',
      description: '',
      creator: '',
      imgURL: '',
      type: '',
      tags: []
    },{
    
      id: 2,
      title: '',
      description: '',
      creator: '',
      imgURL: '',
      type: '',
      tags: []
    },{
    
      id: 3,
      title: '',
      description: '',
      creator: '',
      imgURL: '',
      type: '',
      tags: []
    },
   {
      id: 4,
      title: '',
      description: '',
      creator: '',
      imgURL: '',
      type: '',
      tags: []
    },{
  
      id: 5,
      title: '',
      description: '',
      creator: '',
      imgURL: '',
      type: '',
      tags: []
    }
    ];
  }
}

