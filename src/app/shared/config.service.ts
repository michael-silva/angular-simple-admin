import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
    type: ConfigType = ConfigType.inMemory;
    baseUrl: string;

    constructor() {
        switch(this.type) {
            case ConfigType.inMemory:
            this.baseUrl = '';
            break;
        }
    }
}

enum ConfigType {
    inMemory,
    Development,
    Production
}