import { Component } from '@angular/core';
import { FeedbackComponent } from './feedback/feedback.component';
import { DescriptionComponent } from './description/description.component';
import { CardsComponent } from './cards/cards.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FeedbackComponent,
    DescriptionComponent,
    CardsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '';
}
