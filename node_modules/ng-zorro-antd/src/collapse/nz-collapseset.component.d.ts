import { NzCollapseComponent } from './nz-collapse.component';
export declare class NzCollapsesetComponent {
    /**
     * all child collapse
     * @type {Array}
     */
    panels: Array<NzCollapseComponent>;
    nzAccordion: boolean;
    nzBordered: boolean;
    nzClick(collapse: any): void;
    addTab(collapse: NzCollapseComponent): void;
    constructor();
}
