import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [
    NgFor,
    CardComponent
  ],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {

  cards = [
    {
      title: '6 makkelijke manieren om voor een huis te sparen',
      description: 'Een huis kopen een onbereikbare toekomstdroom? Dat hoeft helemaal niet!',
      imageUrl: 'assets/articleImage/piggybank.png',
    },
    {
      title: '6 makkelijke manieren om voor een huis te sparen',
      description: 'Een huis kopen een onbereikbare toekomstdroom? Dat hoeft helemaal niet!',
      imageUrl: 'assets/articleImage/piggybank.png',
    },
    {
      title: '6 makkelijke manieren om voor een huis te sparen',
      description: 'Een huis kopen een onbereikbare toekomstdroom? Dat hoeft helemaal niet!',
      imageUrl: 'assets/articleImage/piggybank.png',
    },
    {
      title: '6 makkelijke manieren om voor een huis te sparen',
      description: 'Een huis kopen een onbereikbare toekomstdroom? Dat hoeft helemaal niet!',
      imageUrl: 'assets/articleImage/piggybank.png',
    },
  ];

}
