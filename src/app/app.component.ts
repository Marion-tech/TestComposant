import {
  Component,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { FruitComponent } from './fruit/fruit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent {
  public fruits: string[] = ['fraise'];
  @ViewChild('myinput', { static: true })
  public el!: ElementRef<HTMLInputElement>;

  @ViewChildren(FruitComponent) public list!: QueryList<FruitComponent>;

  // @ViewChild('fruit', { static: true })
  // public elFruit!: ElementRef<FruitComponent>;

  public addFruit() {
    this.fruits.push(this.el?.nativeElement.value);
    // console.log(this.list);
  }

  public deleteFruit(fruit: string) {
    this.fruits = this.fruits.filter((f: string) => f !== fruit);
  }
}
