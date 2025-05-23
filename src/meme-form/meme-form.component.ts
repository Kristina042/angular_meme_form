import { Component, EventEmitter, Output } from '@angular/core';
import { InputComponent } from '../Input/Input.component';

type nameAndAge = {
    name: string,
    age: string
  }

@Component({
  selector: 'app-meme-form',
  imports: [InputComponent],
  templateUrl: './meme-form.component.html',
  styleUrl: './meme-form.component.scss'
})

export class MemeFormComponent {

  // getDataFromInput(e: string){
  //     console.log(e);
  // }

  Name = ''
  Age = ''

  formData:nameAndAge ={
    name: this.Name,
    age: this.Age
  }

  updateName = (name: string) => {
    this.formData.name = name;

    // console.log(`your name is ${this.formData.name}`)
  }

  updateAge = (age: string) => {
    this.formData.age = age;

    //console.log(`your age is ${this.formData.age}`)
  }

  @Output() formEmitter = new EventEmitter<nameAndAge>();
  
  sendDataUp(){
    this.formEmitter.emit(this.formData);
  }

}
