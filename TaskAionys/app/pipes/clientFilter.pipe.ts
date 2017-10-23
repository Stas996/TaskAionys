import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'clientFilter',
    pure: false
})
export class ClientFilterPipe implements PipeTransform {
    transform(items: any[], fullname: any, cityId: any): any {
        if (!items || (!fullname && cityId == 0))
            return items;
        if (cityId == 0)
            items.filter(v => v.fullName.toLowerCase().indexOf(fullname) >= 0);

        return items.filter(v => v.fullName.toLowerCase().indexOf(fullname) >= 0 && v.cityId == cityId);
    }

}