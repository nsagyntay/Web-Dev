import { Component } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { Product } from './product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [DecimalPipe]
})
export class ProductListComponent {
  constructor(private decimalPipe: DecimalPipe) {}

products: Product[] = [
  { id: 1, name: 'Dr. Althea крем 345 Relief для лица 50 мл', description: 'Освежающий и увлажняющий крем для всех типов кожи.', price: 12000, rating: 4.5, image: 'https://resources.cdn-kaspi.kz/img/m/p/h59/h3b/86726530400286.jpg?format=preview-large', images: ['https://resources.cdn-kaspi.kz/img/m/p/h59/h3b/86726530400286.jpg?format=preview-large'], link: 'https://kaspi.kz/shop/p/dr-althea-krem-345-relief-dlja-litsa-50-ml-115616909/?c=750000000' },
  { id: 2, name: 'Bioderma крем Sebium Hydra для лица 40 мл', description: 'Крем для сияния и выравнивания тона кожи.', price: 25000, rating: 4.7, image: 'https://resources.cdn-kaspi.kz/img/m/p/p6c/p0a/83177267.jpg?format=preview-large', images: ['https://resources.cdn-kaspi.kz/img/m/p/p6c/p0a/83177267.jpg?format=preview-large','https://resources.cdn-kaspi.kz/img/m/p/p9b/pbd/25952389.png?format=gallery-medium'], link: 'https://kaspi.kz/shop/p/lab-brightening-serum/' },
  { id: 3, name: 'Avene Thermal Spring Water', description: 'Мягкая термальная вода для ухода за чувствительной кожей.', price: 8000, rating: 4.2, image: 'https://resources.cdn-kaspi.kz/img/m/p/p7d/pfa/7968903.jpg?format=preview-large', images: ['https://resources.cdn-kaspi.kz/img/m/p/p7d/pfa/7968903.jpg?format=preview-large'], link: 'https://kaspi.kz/shop/p/avene-thermal-spring-water-termal-naja-voda-50-ml-21900411/?c=750000000' },
  { id: 4, name: 'La Roche-Posay Effaclar Gel', description: 'Очищающий гель для жирной и проблемной кожи.', price: 15000, rating: 4.4, image: 'https://resources.cdn-kaspi.kz/img/m/p/p07/p1b/46174028.png?format=preview-large', images: ['https://resources.cdn-kaspi.kz/img/m/p/p07/p1b/46174028.png?format=preview-large'], link: 'https://kaspi.kz/shop/p/la-roche-posay-effaclar-gel-ochischajuschii-penjaschiisja-dlja-chuvstvitel-noi-zhirnoi-kozhi-litsa-i-tela-400-ml-21900337/?c=750000000' },
  { id: 5, name: 'Neutrogena Hydro Boost', description: 'Гель-крем для интенсивного увлажнения кожи лица.', price: 18000, rating: 4.6, image: 'https://resources.cdn-kaspi.kz/img/m/p/p38/pb9/7513747.jpg?format=preview-large', images: ['https://resources.cdn-kaspi.kz/img/m/p/p38/pb9/7513747.jpg?format=preview-large'], link: 'https://kaspi.kz/shop/p/neutrogena-hydro-boost-body-gel-cream-uvlazhnjajuschii-krem-dlja-normal-noi-i-suhoi-kozhi-400-ml-krem-dlja-tela-400-ml-129805338/?c=750000000' },
  { id: 6, name: 'Bioderma Sensibio H2O', description: 'Мицеллярная вода для чувствительной кожи.', price: 14000, rating: 4.8, image: 'https://resources.cdn-kaspi.kz/img/m/p/pd6/pa9/81535667.png?format=preview-large', images: ['https://resources.cdn-kaspi.kz/img/m/p/pd6/pa9/81535667.png?format=preview-large'], link: 'https://kaspi.kz/shop/p/bioderma-sensibio-h2o-mitselljarnaja-voda-500-ml-21900212/?c=750000000' },
  { id: 7, name: 'The Ordinary Niacinamide 10% + Zinc 1%', description: 'Сыворотка для уменьшения пор и контроля себума.', price: 10000, rating: 4.3, image: 'https://resources.cdn-kaspi.kz/img/m/p/pf7/pde/22594987.jpg?format=preview-large', images: ['https://resources.cdn-kaspi.kz/img/m/p/pf7/pde/22594987.jpg?format=preview-large'], link: 'https://kaspi.kz/shop/p/the-ordinary-syvorotka-niacinamide-10-zinc-1-dlja-litsa-dlja-zony-dekol-te-30-ml-100703687/?c=750000000' },
  { id: 8, name: 'CeraVe Moisturizing Cream', description: 'Питательный крем для сухой кожи лица и тела.', price: 20000, rating: 4.7, image: 'https://resources.cdn-kaspi.kz/img/m/p/pc4/p0a/78007310.jpg?format=gallery-medium', images: ['https://resources.cdn-kaspi.kz/img/m/p/pc4/p0a/78007310.jpg?format=preview-large'], link: 'https://kaspi.kz/shop/p/cerave-uvlazhnjajuschii-krem-dlja-suhoi-i-ochen-suhoi-kozhi-litsa-i-tela-340-gr-100757429/?c=750000000' },
  { id: 9, name: 'Kiehl’s Calendula Toner', description: 'Тоник с календулой для успокаивания и очищения кожи.', price: 22000, rating: 4.5, image: 'https://resources.cdn-kaspi.kz/img/m/p/pac/p9d/3596664.jpg?format=preview-large', images: ['https://resources.cdn-kaspi.kz/img/m/p/pac/p9d/3596664.jpg?format=preview-large'], link: 'https://kaspi.kz/shop/p/kiehls-tonik-calendula-250-ml-121326371/?c=750000000' },
  { id: 10, name: 'Vichy Mineral 89', description: 'Укрепляющий и увлажняющий концентрат для кожи.', price: 30000, rating: 4.9, image: 'https://resources.cdn-kaspi.kz/img/m/p/p00/p1b/26056142.jpeg?format=preview-large', images: ['https://resources.cdn-kaspi.kz/img/m/p/p00/p1b/26056142.jpeg?format=preview-large'], link: 'https://kaspi.kz/shop/p/vichy-mineral-89-intensivno-uvlazhnjajuschii-krem-72-ch-dlja-vseh-tipov-kozhi-50-ml-110232453/?c=750000000' }
];

  getStars(rating: number): boolean[] {
    const fullStars = Math.floor(rating);
    return Array.from({ length: 5 }, (_, i) => i < fullStars);
  }

  selectedImages: { [key: number]: string } = {};

  selectImage(productId: number, imageUrl: string) {
    this.selectedImages[productId] = imageUrl;
  }

  shareWhatsApp(product: Product) {
    const url = `https://wa.me/?text=${encodeURIComponent('Посмотри этот товар: ' + product.link)}`;
    window.open(url, '_blank');
  }

  shareTelegram(product: Product) {
    const url = `https://t.me/share/url?url=${encodeURIComponent(product.link)}&text=${encodeURIComponent(product.name)}`;
    window.open(url, '_blank');
  }
}
