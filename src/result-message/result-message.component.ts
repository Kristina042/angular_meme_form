import { Component, input } from '@angular/core';

@Component({
  selector: 'app-result-message',
  imports: [],
  templateUrl: './result-message.component.html',
  styleUrl: './result-message.component.scss'
})
export class ResultMessageComponent {
  name = input('')
  age = input('')
  isVisible= input<boolean>()
}
