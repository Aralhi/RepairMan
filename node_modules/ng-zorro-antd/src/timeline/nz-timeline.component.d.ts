import { OnInit, QueryList, AfterContentInit, TemplateRef } from '@angular/core';
import { NzTimelineItemComponent } from './nz-timeline-item.component';
export declare class NzTimelineComponent implements OnInit, AfterContentInit {
    _isPending: boolean;
    items: Array<NzTimelineItemComponent>;
    _listOfTimeline: QueryList<NzTimelineItemComponent>;
    _pendingContent: TemplateRef<any>;
    constructor();
    ngOnInit(): void;
    ngAfterContentInit(): void;
}
