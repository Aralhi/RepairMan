import { OnInit, ElementRef, TemplateRef, EventEmitter } from '@angular/core';
import { Moment } from 'moment';
import 'moment/locale/zh-cn';
export interface MonthInterface {
    index: number;
    name: string;
    year: number;
    isCurrentMonth: boolean;
    isSelectedMonth: boolean;
}
export declare type QuartersType = Array<MonthInterface>;
export interface DayInterface {
    number: number;
    isLastMonth: boolean;
    isNextMonth: boolean;
    isCurrentDay: boolean;
    isSelectedDay: boolean;
    title: string;
    date: Moment;
    disabled: boolean;
    firstDisabled: boolean;
    lastDisabled: boolean;
}
export interface WeekInterface {
    days: Array<DayInterface>;
}
export declare class NzCalendarComponent implements OnInit {
    private _elementRef;
    _el: HTMLElement;
    _weeksCalendar: Array<WeekInterface>;
    _quartersCalendar: Array<QuartersType>;
    _listOfWeekName: Array<string>;
    _listOfMonthName: Array<string>;
    _listOfYearName: Array<string>;
    _yearUnit: string;
    _monthUnit: string;
    _showMonth: number;
    _showYear: number;
    _value: Date;
    _locale: string;
    dateCell: TemplateRef<any>;
    monthCell: TemplateRef<any>;
    nzClickDay: EventEmitter<any>;
    nzClickMonth: EventEmitter<any>;
    nzClearTime: boolean;
    nzDatePicker: boolean;
    nzMode: string;
    nzFullScreen: boolean;
    nzShowHeader: boolean;
    nzDisabledDate: Function;
    nzValue: Date;
    nzShowYear: number;
    nzShowMonth: number;
    nzLocale: string;
    _removeTime(date: any): any;
    _clickDay($event: any, day: any): void;
    _clickMonth($event: any, month: any): void;
    _buildMonth(d: Moment): Array<WeekInterface>;
    _buildWeek(date: Moment, month: Moment): Array<DayInterface>;
    _buildYears(date: Moment): any[];
    _buildCalendar(): void;
    _generateYears(year: any): any[];
    constructor(_elementRef: ElementRef);
    ngOnInit(): void;
}
