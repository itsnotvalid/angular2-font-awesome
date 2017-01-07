import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fa, ng2-fa',
  template: `
    <i class="fa fa-{{name}}" [ngClass]="optionalClasses" aria-hidden="true"></i>
  `
})
export class Angular2FontAwesomeComponent implements OnInit {
  @Input() name        : string;
  // Optional Inputs
  @Input() title      ?: string;
  @Input() size       ?: string;
  @Input() fixed      ?: boolean;
  @Input() animation  ?: string;
  @Input() rotate     ?: string | number;

  private optionalClasses: string[] = [];
  constructor() { }

  ngOnInit() {
    if(!this.name){
      throw new Error('Missing "name" property for Angular2 Font Awesome component');
    }
    if(this.size) {
      this.addToOptionalClasses(`fa-${this.size}`);
    }

    if(this.fixed) {
      this.addToOptionalClasses(`fa-fw`);
    }

    if(this.animation) {
      this.addToOptionalClasses(`fa-${this.animation}`);
    }

    if(this.rotate){
      switch(typeof this.rotate){
        case 'number':
          this.addToOptionalClasses(`fa-rotate-${this.rotate}`);
          break;
        case 'string':
          this.addToOptionalClasses(`fa-flip-${this.rotate}`);
          break;
      }
    }

  }

  private addToOptionalClasses(addClass: string): void {
    this.optionalClasses.push(addClass);
  }

}