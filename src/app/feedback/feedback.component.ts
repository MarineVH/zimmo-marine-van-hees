import { Component } from '@angular/core';
import { SmileyButtonComponent } from "../smiley-button/smiley-button.component";
import { NgClass, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [
    NgIf,
    NgClass,
    FormsModule,
    SmileyButtonComponent],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {
  showFeedback = false;
  feedbackText = '';
  selectedFeeling = '';
  showError = false;
  successMessage = '';

  openFeedback(feeling: string) {
    this.selectedFeeling = feeling;
    this.showFeedback = true;
    this.successMessage = '';
    this.showError = false;
  }

  submitFeedback() {
    if (!this.feedbackText.trim()) {
      this.showError = true;
      this.successMessage = '';
    } else {
      console.log('Feedback:', this.feedbackText);
      console.log('Feeling:', this.selectedFeeling);
      this.feedbackText = '';
      this.selectedFeeling = '';
      this.showFeedback = false;
      this.showError = false;
      this.successMessage = 'Feedback met succes verzonden!';
    }
  }
}
