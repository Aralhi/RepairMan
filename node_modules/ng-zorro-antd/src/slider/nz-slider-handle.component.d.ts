import { OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { NzToolTipComponent } from '../tooltip/nz-tooltip.component';
import { NzSliderComponent } from './nz-slider.component';
export declare class NzSliderHandleComponent implements OnInit, OnChanges {
    private _slider;
    nzClassName: string;
    nzVertical: string;
    nzOffset: number;
    nzValue: number;
    nzTipFormatter: Function;
    nzActive: boolean;
    tooltip: NzToolTipComponent;
    tooltipTitle: string;
    style: any;
    constructor(_slider: NzSliderComponent);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    onMouseEnter($event: any): void;
    onMouseLeave($event: any): void;
    private _updateTooltipTitle();
    private _updateTooltipPosition();
    private _updateStyle();
}
