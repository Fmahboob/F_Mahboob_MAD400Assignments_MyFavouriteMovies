import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { watch } from 'fs';
import { title } from 'process';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  lists: Content[] = [];

  constructor() { 
    this.lists = [{
      id: 0,
      title: 'The Royal Treatment',
      description: 'New York hairdresser Izzy seizes the chance to work at the wedding of a charming prince. When sparks start to fly between the two of them, love and duty are put to the test as the time of the wedding draws closer.',
      creator: 'Rick Jacobson',
      imgURL: 'https://m.media-amazon.com/images/M/MV5BNjc5ZTg0MjgtOGFiNy00YjE5LThlZmYtMzE3NjViZWI2OTU2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
      type: 'romantic comedy',
      tags: []
    },{
       id: 1,
      title: 'it',
      description: 'Seven young outcasts in Derry, Maine, are about to face their worst nightmare -- an ancient, shape-shifting evil that emerges from the sewer every 27 years to prey on the town children. Banding together over the course of one horrifying summer, the friends must overcome their own personal fears to battle the murderous, bloodthirsty clown known as Pennywise.',
      creator: 'Andy Muschietti',
      imgURL: 'https://m.media-amazon.com/images/I/61LokfYMGnL._AC_SY679_.jpg',
      type: 'horror',
      tags: []
    },{
    
       id: 2,
      title: 'Home Alone',
      description: 'When bratty 8-year-old Kevin McCallister (Macaulay Culkin) acts out the night before a family trip to Paris, his mother makes him sleep in the attic. After the McCallisters mistakenly leave for the airport without Kevin, he awakens to an empty house and assumes his wish to have no family has come true. But his excitement sours when he realizes that two con men (Joe Pesci, Daniel Stern) plan to rob the McCallister residence, and that he alone must protect the family home.',
      creator: 'Chris Columbus',
      imgURL: 'https://m.media-amazon.com/images/I/A1T+lZ6iUZL._AC_SL1500_.jpg',
      type: 'comedy',
      tags: []
    },{
    
      id: 3,
      title: 'Spider-Man: No Way Home',
      description: 'With Spider-Man identity now revealed, our friendly neighborhood web-slinger is unmasked and no longer able to separate his normal life as Peter Parker from the high stakes of being a superhero. When Peter asks for help from Doctor Strange, the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.',
      creator: 'Jon Watts',
      imgURL: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x_masonry/spider-mannowayhome_lob_crd_03.jpg',
      type: 'action',
      tags: []
    },
   {
      id: 4,
      title: 'A Quiet Place',
      description: 'If they hear you, they hunt you. A family must live in silence to avoid mysterious creatures that hunt by sound. Knowing that even the slightest whisper or footstep can bring death, Evelyn and Lee are determined to find a way to protect their children while desperately searching for a way to fight back.',
      creator: 'John Krasinski',
      imgURL: 'https://m.media-amazon.com/images/I/A1zV1fxtMEL._AC_SL1500_.jpg',
      type: 'Horror',
      tags: []
    },{
  
      id: 5,
      title: 'The Maze Runner',
      description: 'Thomas  a teenager, arrives in a glade at the center of a giant labyrinth. Like the other youths dumped there before him, he has no memory of his previous life. Thomas quickly becomes part of the group and soon after demonstrates a unique perspective that scores him a promotion to Runner status -- those who patrol the always-changing maze to find an escape route. Together with Teresa (Kaya Scodelario), the only female, Thomas tries to convince his cohorts that he knows a way out.',
      creator: 'Wes Ball',
      imgURL: 'https://lumiere-a.akamaihd.net/v1/images/image_c09a58e5.jpeg',
      type: 'Action',
      tags: []
    }
    {
  
      id: 6,
      title: 'Nomadland',
      description: 'A woman in her sixties who, after losing everything in the Great Recession, embarks on a journey through the American West, living as a van-dwelling modern-day nomad.',
      creator: 'Chlo?? Zhao',
      imgURL: 'https://m.media-amazon.com/images/I/81HGoyM9atS._SL1500_.jpg',
      type: 'horror'
    }
    ];

  }
  FetchContent(searchString : String): String{
    var result = 'no';
    if(searchString.length == 0){
      result = 'null';
    }
    for (var movie of this.lists ){
      if(watch.title.toUpperCase() === searchString.toUpperCase()){
        result = "yes";
      }
    }
    return result;
  }

  ngOnInit(): void {

    
  }
}

