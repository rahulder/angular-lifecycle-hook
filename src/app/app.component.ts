import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, OnChanges, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemoComponent } from "./demo/demo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnChanges, OnInit,
 DoCheck, OnDestroy{
  title = 'angular-lifecycle-hook';
  inputVal: string = '';
  @ViewChild('temp') tempPara!: ElementRef;
  @ViewChildren('temp') tempParaGroup!: QueryList<ElementRef>;
  @ContentChild('temp') tempChildContent!: ElementRef;
  isDestroy: boolean = false;

  constructor() {
    console.log('App Component Constructor Called');
  }
  
  ngOnChanges() {
    console.log('App Component ngOnChanges Hook Called');
  }
  
  ngOnInit() {
    console.log('App Component ngOnInit Hook Called');
  }

  ngDoCheck(): void {
    console.log('App Component ngDoCheck Hook Called');
  }

  // ngAfterContentInit() {
  //   console.log('App Component ngAfterContentInit Hook Called');
  // }

  // ngAfterContentChecked() {
  //   console.log('App Component ngAfterContentCheck Hook Called');
  // }

  // ngAfterViewInit() {
  //   console.log('App Component ngAfterViewInit Hook Called');
  // }

  // ngAfterViewChecked() {
  //   console.log('App Component ngAfterViewChecked Hook Called');
  // }

  DestroyComponent() {
    this.isDestroy = !this.isDestroy; 
  }

  ngOnDestroy() {
    console.log('App Component ngOnDestroy Hook Called')
  }

  Onsubmit(inputel: HTMLInputElement) {
    // console.log(inputel.value)
    this.inputVal = inputel.value;
    console.log("ViewChildContent", this.tempPara.nativeElement.textContent);
    this.tempParaGroup.forEach((el) => {
      console.log('el', el.nativeElement.innerHTML)
    });

    // console.log('tempChildContent', this.tempChildContent.nativeElement.textContent);
  }

}
