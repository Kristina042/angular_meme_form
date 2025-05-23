import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input',
  imports: [CommonModule, FormsModule],
  templateUrl:'./Input.component.html',
  styleUrl: './Input.component.scss'
})

export class InputComponent{
  @Input() label: string = '';
  @Input() inputType: string = '';  // can be 'text' or 'number'

  inputValue:string = '';


  @Output() inputEmitter = new EventEmitter<string>();

//  sendDataUp(event: Event) {
//     const rawValue = (event.target as HTMLInputElement).value;

//     if (this.inputType === 'number')
//     {
//       const validatedData = rawValue.replace(/\D/g, '');

//       this.inputValue = validatedData;
//       console.log(`validated number: ${this.inputValue}`);

//       this.inputEmitter.emit(validatedData);
//     } else {

//       this.inputValue = rawValue;
//       console.log(`validated text: ${this.inputValue}`);

//       this.inputEmitter.emit(rawValue);
//     }
//   }

sendDataUp(event: Event) {
    const rawValue = (event.target as HTMLInputElement).value;

    if (this.inputType === 'number')
    {
      const validatedData = rawValue.replace(/\D/g, '');

      this.inputValue = validatedData;
      console.log(`validated number: ${this.inputValue}`);

      this.inputEmitter.emit(validatedData);
    } else {

      this.inputValue = rawValue;
      console.log(`validated text: ${this.inputValue}`);

      this.inputEmitter.emit(rawValue);
    }
  }
}
