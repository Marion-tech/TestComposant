import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class FruitComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() public fruit!: string;
  @Output() private deleteF: EventEmitter<string> = new EventEmitter();
  @ViewChild('ref', { static: true }) public el!: ElementRef<HTMLButtonElement>;

  constructor() {
    console.log('constructor');
    // console.log(this.fruit);
  }

  public deleteFruit() {
    this.deleteF.emit(this.fruit);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges : ', changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    // console.log(this.fruit);
    // console.log(this.el);
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('OnDestroy');
  }
}
