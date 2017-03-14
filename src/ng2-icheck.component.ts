import {Component} from '@angular/core';

@Component({
    selector: '[iCheck]',
    styles: [`
    :host {
        font-family: "Consolas", "Microsoft YaHei", Arial, arial, sans-serif;
        overflow: hidden;
    }
  `,`
    :host > div > div {
        width: 24px;
        height: 24px;
        display: inline-block;
        vertical-align: middle;
        background: url('https://cdn.rawgit.com/fronteed/icheck/1.x/skins/square/blue.png') no-repeat left;
        background-position: 0 0;
    }
  `,`
    :host > div > div:hover {
        background-position: -24px 0;
    }
  `,`
    :host > div > div.disabled {
        background-position: -72px 0;
        cursor: default;
    }    
  `,`
    :host > div > div.checked {
        background-position: -48px 0;
    }
  `,`
    :host > div > div.checked.disabled {
        background-position: -96px 0;
    }
  `,`
    :host .label {
        display: inline-block;
        vertical-align: middle;
    }
  `],
    template: `
    <div (click)="isChecked = !isChecked;" class="ng2-icheck">
        <div [class.checked]="isChecked"></div>
        <ng-content class="label"></ng-content>
    </div>
  `
})

export class ICheckComponent {
    isChecked: boolean = false;
    constructor() {

    }
}
