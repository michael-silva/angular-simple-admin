import { Injectable }      from '@angular/core';

@Injectable()
export class DialogService {
    alert(message: string, title?: string): Promise<void> {
        alert(message);
        return Promise.resolve();
    }

    confirm(message: string, title?: string): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            let result = confirm(message);
            if(result) resolve()
            //else reject();
        });
    }
}