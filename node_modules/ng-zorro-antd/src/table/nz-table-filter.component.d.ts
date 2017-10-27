import { OnInit } from '@angular/core';
import { NzDropDownComponent } from '../dropdown/nz-dropdown.component';
export declare class NzTableFilterComponent implements OnInit {
    private nzDropDownComponent;
    _dropDownButton: boolean;
    hideDropDown(): void;
    constructor(nzDropDownComponent: NzDropDownComponent);
    ngOnInit(): void;
}
