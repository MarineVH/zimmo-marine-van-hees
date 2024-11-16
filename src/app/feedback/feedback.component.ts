import { Component } from '@angular/core';
import { SmileyButtonComponent } from "../smiley-button/smiley-button.component";
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
    SmileyButtonComponent],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {
  showFeedback = false;
  feedbackText = '';
  selectedFeeling = '';

  openFeedback(feeling: string) {
    this.selectedFeeling = feeling;
    this.showFeedback = true;
  }

  submitFeedback() {
    console.log('Feedback:', this.feedbackText);
    console.log('Feeling:', this.selectedFeeling);
    this.feedbackText = '';
    this.selectedFeeling = '';
    this.showFeedback = false;
  }
}
