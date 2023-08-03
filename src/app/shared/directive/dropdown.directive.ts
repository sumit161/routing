import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective implements OnInit {
  @Input() Property!: string;

  constructor(private eleRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    // console.log(this.eleRef.nativeElement)
  }
  @HostListener('click') onclick() {
    var ParentEle = this.eleRef.nativeElement as HTMLElement;

    // console.log(ParentEle.classList)
    if (ParentEle.className.includes(this.Property)) {
      ParentEle.classList.remove(this.Property);
      ParentEle.lastElementChild?.classList.remove(this.Property);
    } else {
      ParentEle.classList.add(this.Property);
      ParentEle.lastElementChild?.classList.add(this.Property);
    }
  }
}
// var child = this.eleRef.nativeElement.lastChild as HTMLElement;
// child.classList.add('show');
// child.classList.remove('show');
// var ParentEle = this.eleRef.nativeElement as HTMLElement;
// var child = this.eleRef.nativeElement.lastChild as HTMLElement;
// console.log(ParentEle);
// console.log(child);
// console.log(Array.from(element)[0]);
// let element = (this.eleRef.nativeElement as HTMLElement).children;

// console.log(this.eleRef.nativeElement.querySelector('div'));
// this.renderer.setStyle(eleRef.nativeElement.firstChild as HTMLElement, 'color', 'red');
// this.eleRef.nativeElement.this.renderer.
// console.log(this.eleRef.nativeElement.firstChild);
// console.log(this.eleRef.nativeElement.firstElementChild);   console.log(ParentEle);
// console.log(child);
// console.log(ParentEle.classList.contains('show'));
// if (ParentEle.classList.contains('show')) { */
// console.log((ParentEle as HTMLElement).getAttribute("class").includes("fa-arrow-down"))

// if(ParentEle.classList)eve.target.firstElementChild.getAttribute("class").includes("fa-arrow-down"))
