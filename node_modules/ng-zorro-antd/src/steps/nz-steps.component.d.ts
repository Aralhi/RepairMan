import { OnInit, OnDestroy } from '@angular/core';
import { NzStepConnectService } from './nz-step-connect.service';
export declare type NzDirection = 'horizontal' | 'vertical';
export declare class NzStepsComponent implements OnInit, OnDestroy {
    private nzStepConnectService;
    _status: string;
    _current: number;
    _stepsClassMap: Object;
    _progressDot: boolean;
    _direction: NzDirection;
    nzDirection: NzDirection;
    nzSize: 'default' | 'small';
    nzProgressDot: boolean | string;
    nzStatus: string;
    nzCurrent: number;
    setDirectionClass(): void;
    constructor(nzStepConnectService: NzStepConnectService);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
