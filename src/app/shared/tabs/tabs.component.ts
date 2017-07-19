import { Input, Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TabComponent } from './tab.component';

@Component({
    selector: 'tabs',
    templateUrl: './tabs.component.html'
})
export class TabsComponent implements AfterViewInit {
    tabs: TabComponent[] = [];

    constructor(private route: ActivatedRoute) { }

    ngAfterViewInit() {
        this.route.fragment.map(fragment => fragment)
            .subscribe((fragment) => {
                let tab = this.tabs.find(x => x.id == fragment);
                if(tab) this.selectTab(tab)
            });
    }

    addTab(tab: TabComponent) {
        if(this.tabs.length == 0)
            tab.active();
        this.tabs.push(tab);
    }

    selectTab(tab: TabComponent) {
        this.tabs.forEach(tab => tab.inactive());
        tab.active();
    }
}
