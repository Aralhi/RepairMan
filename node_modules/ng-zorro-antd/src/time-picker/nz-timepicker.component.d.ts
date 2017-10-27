import { NzTimePickerInnerComponent } from './nz-timepicker-inner.component';
import { ConnectionPositionPair } from '../core/overlay/index';
export declare class NzTimePickerComponent extends NzTimePickerInnerComponent {
    _disabled: boolean;
    _dropDownPosition: string;
    _triggerWidth: number;
    _positions: ConnectionPositionPair[];
    trigger: any;
    nzDisabled: boolean;
    _setTriggerWidth(): void;
    onPositionChange(position: any): void;
    _manualChangeInput(box: any): void;
    _overHour(): void;
    _overMinute(): void;
    _overSecond(): void;
    _clearValue(): void;
    _openCalendar(): void;
    _closeCalendar(): void;
    setDisabledState(isDisabled: boolean): void;
}
