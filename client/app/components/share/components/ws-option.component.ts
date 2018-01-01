import {
  Component,
  ContentChild,
  Input,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector     : 'ws-option',
  encapsulation: ViewEncapsulation.None,
  template     : `
    <ng-content></ng-content>
  `,
  styleUrls    : []
})
export class WsOptionComponent implements OnDestroy, OnInit {
  private _disabled = false;

  _value: string;
  _label: string;
  @ContentChild('nzOptionTemplate') wsOptionTemplate;

  @Input()
  set nzValue(value: string) {
    if (this._value === value) {
      return;
    }
    this._value = value;
  }

  get nzValue(): string {
    return this._value;
  }

  @Input()
  set nzLabel(value: string) {
    if (this._label === value) {
      return;
    }
    this._label = value;
  }

  get nzLabel(): string {
    return this._label;
  }

  @Input()
  set nzDisabled(value: boolean) {
    this._disabled = this.toBoolean(value);
  }

  get nzDisabled(): boolean {
    return this._disabled;
  }

  constructor() {
  }

  ngOnInit(): void {
    // this._nzSelect.addOption(this);
  }

  ngOnDestroy(): void {
    // this._nzSelect.removeOption(this);
  }

  toBoolean(value: boolean | string): boolean {
    return value === '' || (value && value !== 'false');
  }
}
