import { Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent implements OnChanges, OnInit, DoCheck, OnDestroy {

  @Input() message: string = '';
  inputVal: string = '';
  @ViewChild('temp') tempPara!: ElementRef;
  @ViewChildren('temp') tempParaGroup!: QueryList<ElementRef>;
  @ContentChild('temp') tempChildContent!: ElementRef;

  constructor() {
    console.log('Demo Component Constructor Called');
  }

  ngOnChanges() {
    console.log('Demo Component ngOnChanges Hook Called');
  }

  ngOnInit(): void {
    console.log('Demo Component ngOnInit Hook Called');
    // console.log(this.tempPara.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('Demo Component ngDoCheck Hook Called');
    // console.log(this.tempPara.nativeElement.textContent);
  }

  ngAfterContentInit() {
    console.log('Demo Component ngAfterContentInit Hook Called');
    console.log(this.tempChildContent.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('Demo Component ngAfterContentCheck Hook Called');
  }

  ngAfterViewInit() {
    console.log('Demo Component ngAfterViewInit Hook Called');
    console.log(this.tempPara.nativeElement.textContent);

  }

  ngAfterViewChecked() {
    console.log('Demo Component ngAfterViewChecked Hook Called');
  }

  ngOnDestroy() {
    console.log('Demo Component ngOnDestroy Hook Called');
  }
}
