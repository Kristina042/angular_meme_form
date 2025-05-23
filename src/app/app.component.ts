import { Component } from '@angular/core';
import { MemeFormComponent } from '../meme-form/meme-form.component';
import { ResultMessageComponent } from '../result-message/result-message.component';

type nameAndAge = {
  name: string,
  age: string
}

@Component({
  selector: 'app-root',
  imports: [MemeFormComponent, ResultMessageComponent],
  templateUrl: 'app.component.html',
  styleUrl: 'app.component.scss',
})

export class AppComponent {
  title = 'meme_app';

  dispMessage: nameAndAge = {
    name: '',
    age: ''
  }

  saveFormData(formData: nameAndAge){
    this.dispMessage.age = formData.age
    this.dispMessage.name = formData.name

    console.log(`app recieved:`)
    console.log(this.dispMessage)
  }
}
