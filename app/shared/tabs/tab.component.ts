import { Input, Component, OnInit } from '@angular/core';

import { TabsComponent } from './tabs.component';

@Component({
    selector: 'tab',
    templateUrl: 'app/shared/tabs/tab.component.html'
})
export class TabComponent implements OnInit {
    active: boolean;
    test: string = "teste";

    @Input() tabName: string;
    @Input() id: string;

    constructor(tabs: TabsComponent) {
        tabs.addTab(this);
        this.id = '#';
    }

    ngOnInit() {

    }
}
