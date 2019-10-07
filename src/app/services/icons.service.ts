import { Icons } from '../models/icons';

export class IconsService {
    public getIcons(icon: string, iconFont: string): Array<Icons> {
        const icons = [
            {
                icon: icon,
                iconFont: iconFont,
                size: 'big'
            }
        ];
        return icons;
    }
}
