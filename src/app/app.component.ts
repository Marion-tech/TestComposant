import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent {
  public fruits: string[] = ['kiwi', 'orange', 'fraise'];

  public addFruit(reference: HTMLInputElement) {
    this.fruits.push(reference.value);
    reference.value = '';
    //console.log(reference.type, reference.value);
  }

  public deleteFruit(fruit: string) {
    this.fruits = this.fruits.filter((f: string) => f !== fruit);
  }
}
