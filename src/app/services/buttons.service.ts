import { Buttons } from '../models/buttons';
import { Injectable } from "@angular/core";

@Injectable()
export class ButtonsService {
    public getButtons(design, color, label = ''): Array<Buttons> {
        const buttons = [
            {
                design: design,
                color: color,
                label: label,
                type: 'button',
                disabled: false
            },
            {
                design: design,
                color: color,
                label: label,
                type: 'button',
                icon: 'done',
                disabled: false
            },
            {
                design: design,
                color: color,
                type: 'button',
                icon: 'done',
                disabled: false
            },
            {
                design: design,
                color: color,
                label: label,
                type: 'button',
                icon: 'done',
                disabled: true
            }
        ];
        return buttons;
    }
}
