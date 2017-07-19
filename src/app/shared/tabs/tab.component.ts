import { Input, Component, ElementRef, AfterViewInit, OnInit } from '@angular/core';

import { TabsComponent } from './tabs.component';

@Component({
    selector: 'tab',
    templateUrl: './tab.component.html'
})
export class TabComponent implements AfterViewInit {
    isactive: boolean = false;

    @Input() tabName: string;
    @Input() id: string;

    constructor(private element: ElementRef, tabs: TabsComponent) {
        tabs.addTab(this);

        this.element.nativeElement.classList.add('tab-pane');
    }

    ngAfterViewInit() {
    }

    active() {
        if(!this.isactive) {
            this.isactive = true;
            this.element.nativeElement.classList.add('active');
        }
    }
    inactive() {
        if(this.isactive) {
            this.isactive = false;
            this.element.nativeElement.classList.remove('active');
        }
    }
}
