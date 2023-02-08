import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class FruitComponent {
  @Input() public fruit: string = '';
  @Output() private deleteF: EventEmitter<string> = new EventEmitter();

  public deleteFruit() {
    this.deleteF.emit(this.fruit);
  }
}
