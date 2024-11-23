import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moviePrice'
})
export class MoviePricePipe implements PipeTransform {
  transform(price: any): number {
    // تحويل السعر إلى رقم ثم إضافة 29 وقيمة عشوائية بين 0 و 100
    const basePrice = parseInt(price.toString(), 10);
    return basePrice + 29 + Math.floor(Math.random() * 100);
  }
}

