import { Input, Component, OnInit } from '@angular/core';

import { TabComponent } from './tab.component';

@Component({
    selector: 'tabs',
    templateUrl: 'app/shared/tabs/tabs.component.html'
})
export class TabsComponent implements OnInit {
    tabs: TabComponent[] = [];
    
    ngOnInit() {
    }

    addTab(tab: TabComponent) {
        if(this.tabs.length == 0)
            tab.active = true;
        this.tabs.push(tab);
    }

    selectTab(tab: TabComponent) {
        this.tabs.forEach(tab => tab.active = false);
        tab.active = true;
        return false;
    }
}
