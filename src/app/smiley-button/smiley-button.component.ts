import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-smiley-button',
  standalone: true,
  imports: [
    NgClass,
  ],
  templateUrl: './smiley-button.component.html',
  styleUrl: './smiley-button.component.css'
})
export class SmileyButtonComponent {
  @Input() feeling: string = 'neutral';
  @Input() selectedFeeling: string = ''; 

  @Output() selected = new EventEmitter<string>();

  onClick() {
    this.selected.emit(this.feeling);
  }

  getButtonClass() {
    const baseClass = this.feeling === 'neutral' ? 'btn-neutral' : 
                      this.feeling === 'good' ? 'btn-good' :
                      this.feeling === 'veryGood' ? 'btn-very-good' :
                      this.feeling === 'veryVeryGood' ? 'btn-very-very-good' : 'btn-love';

    return `${baseClass} ${this.selectedFeeling === this.feeling ? 'selected' : ''}`;
  }

  getIconPath() {
    switch (this.feeling) {
      case 'neutral':
        return 'assets/icons/neutral.svg';
      case 'good':
        return 'assets/icons/good.svg';
      case 'veryGood':
        return 'assets/icons/veryGood.svg';
      case 'veryVeryGood':
        return 'assets/icons/veryVeryGood.svg';
      case 'love':
        return 'assets/icons/love.svg';
      default:
        return 'assets/icons/neutral.svg';
    }
  }
  
}