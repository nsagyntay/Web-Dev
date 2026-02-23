import { Injectable } from '@angular/core';
import { Category } from './category.model';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  categories: Category[] = [
    { id: 1, name: 'Facial Care'},
    { id: 2, name: 'Cosmetics'},
    { id: 3, name:  'Perfumery'},
    { id: 4, name: 'Hair Care' }
  ];

products: Product[] = [
  {
    id: 1,
    name: 'Dr. Althea крем 345 Relief для лица 50 мл',
    description: 'Освежающий и увлажняющий крем для всех типов кожи.',
    price: 12000,
    rating: 4.5,
    likes: 0,
    categoryId: 1,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h59/h3b/86726530400286.jpg?format=preview-large',
    link: 'https://kaspi.kz/shop/p/dr-althea-krem-345-relief-dlja-litsa-50-ml-115616909/?c=750000000'
  },
  {
    id: 2,
    name: 'Bioderma крем Sebium Hydra для лица 40 мл',
    description: 'Крем для сияния и выравнивания тона кожи.',
    price: 25000,
    rating: 4.7,
    likes: 0,
    categoryId: 1,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p6c/p0a/83177267.jpg?format=preview-large',
    link: 'https://kaspi.kz/shop/p/lab-brightening-serum/'
  },
  {
    id: 3,
    name: 'Avene Thermal Spring Water',
    description: 'Мягкая термальная вода для ухода за чувствительной кожей.',
    price: 8000,
    rating: 4.2,
    likes: 0,
    categoryId: 1,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p7d/pfa/7968903.jpg?format=preview-large',
    link: 'https://kaspi.kz/shop/p/avene-thermal-spring-water-termal-naja-voda-50-ml-21900411/?c=750000000'
  },
  {
    id: 4,
    name: 'La Roche-Posay Effaclar Gel',
    description: 'Очищающий гель для жирной и проблемной кожи.',
    price: 15000,
    rating: 4.4,
    likes: 0,
    categoryId: 1,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p07/p1b/46174028.png?format=preview-large',
    link: 'https://kaspi.kz/shop/p/la-roche-posay-effaclar-gel-ochischajuschii-penjaschiisja-dlja-chuvstvitel-noi-zhirnoi-kozhi-litsa-i-tela-400-ml-21900337/?c=750000000'
  },
  {
    id: 5,
    name: 'Neutrogena Hydro Boost',
    description: 'Гель-крем для интенсивного увлажнения кожи лица.',
    price: 18000,
    rating: 4.6,
    likes: 0,
    categoryId: 1,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p38/pb9/7513747.jpg?format=preview-large',
    link: 'https://kaspi.kz/shop/p/neutrogena-hydro-boost-body-gel-cream-uvlazhnjajuschii-krem-dlja-normal-noi-i-suhoi-kozhi-400-ml-krem-dlja-tela-400-ml-129805338/?c=750000000'
  },


  {
    id: 6,
    name: 'Помада MAC',
    description: 'Матовая стойкая',
    price: 4500,
    rating: 4.7,
    likes: 0,
    categoryId: 2,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p1c/p41/18255089.jpeg?format=preview-large',
    link: 'https://kaspi.kz/shop/p/makeup-mac/'
  },
  {
    id: 7,
    name: 'Тушь Maybelline',
    description: 'Объем и длина',
    price: 3200,
    rating: 4.6,
    likes: 0,
    categoryId: 2,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h92/h72/84810707107870.jpg?format=preview-large',
    link: 'https://kaspi.kz/shop/p/maybelline-mascara/'
  },
  {
    id: 8,
    name: 'Пудра L’Oreal',
    description: 'Матирование и тон',
    price: 2800,
    rating: 4.5,
    likes: 0,
    categoryId: 2,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hba/he0/86882932391966.jpg?format=preview-large',
    link: 'https://kaspi.kz/shop/p/loreal-powder/'
  },
  {
    id: 9,
    name: 'Тональный крем NYX',
    description: 'Легкое покрытие',
    price: 3500,
    rating: 4.6,
    likes: 0,
    categoryId: 2,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hf7/hb3/84683761352734.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/nyx-foundation/'
  },
  {
    id: 10,
    name: 'Румяна Avon',
    description: 'Нежный цвет',
    price: 2900,
    rating: 4.4,
    likes: 0,
    categoryId: 2,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h15/h27/83435874943006.png?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/avon-blush/'
  },

  {
    id: 11,
    name: 'Парфюм Chanel',
    description: 'Цветочный аромат',
    price: 12990,
    rating: 4.9,
    likes: 0,
    categoryId: 3,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h7b/hd7/64523373871134.jpg?format=preview-large',
    link: 'https://kaspi.kz/shop/p/chanel-perfume/'
  },
  {
    id: 12,
    name: 'Духи Dior',
    description: 'Элегантный аромат',
    price: 13990,
    rating: 4.8,
    likes: 0,
    categoryId: 3,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p6c/p2e/39108928.jpg?format=preview-large',
    link: 'https://kaspi.kz/shop/p/dior-perfume/'
  },
  {
    id: 13,
    name: 'Туалетная вода Hugo Boss',
    description: 'Свежий аромат',
    price: 11990,
    rating: 4.7,
    likes: 0,
    categoryId: 3,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pe1/p18/48799513.jpg?format=preview-large',
    link: 'https://kaspi.kz/shop/p/hugo-boss-toilet-water/'
  },
  {
    id: 14,
    name: 'Парфюм Versace',
    description: 'Шлейфовый аромат',
    price: 14990,
    rating: 4.9,
    likes: 0,
    categoryId: 3,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h68/h40/64367566651422.jpg?format=preview-large',
    link: 'https://kaspi.kz/shop/p/versace-perfume/'
  },
  {
    id: 15,
    name: 'Духи Gucci',
    description: 'Сладкий аромат',
    price: 15990,
    rating: 4.8,
    likes: 0,
    categoryId: 3,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p40/p43/47203904.jpg?format=preview-large',
    link: 'https://kaspi.kz/shop/p/gucci-perfume/'
  },

  {
    id: 16,
    name: 'Loreal Professionnel Paris',
    description: 'Увлажнение и питание',
    price: 18990,
    rating: 4.5,
    likes: 0,
    categoryId: 4,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h0e/h49/64369933189150.jpg?format=preview-large',
    link: 'https://kaspi.kz/shop/p/nivea-face-cream/'
  },
  {
    id: 17,
    name: 'Ollin Professional Perfect Hair ',
    description: '15 в 1 крем-спрей 250 мл',
    price: 2990,
    rating: 4.6,
    likes: 0,
    categoryId: 4,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p3c/pb5/21586295.jpg?format=preview-large',
    link: 'https://kaspi.kz/shop/p/loreal-face-mask/'
  },
  {
    id: 18,
    name: 'KeraSys Hair Clinic',
    description: ' Шелк и сияние шампунь 400 мл',
    price: 3500,
    rating: 4.7,
    likes: 0,
    categoryId: 4,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pba/p6a/51645898.jpg?format=preview-large',
    link: 'https://kaspi.kz/shop/p/avon-serum/'
  },
  {
    id: 19,
    name: 'Прелесть Extra Fresh',
    description: 'Освежение и сухой шампунь 200 мл',
    price: 1990,
    rating: 4.4,
    likes: 0,
    categoryId: 4,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/he5/h01/86835082493982.jpg?format=preview-large',
    link: 'https://kaspi.kz/shop/p/garnier-tonic/'
  },
  {
    id: 20,
    name: 'ESTEL PROFESSIONAL',
    description: 'ST4G Matt Hair Modeling Clay Strong',
    price: 2200,
    rating: 4.5,
    likes: 0,
    categoryId: 4,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p6b/pf9/35106238.jpg?format=preview-large',
    link: 'https://kaspi.kz/shop/p/nivea-face-scrub/'
  }
];
  getCategories() {
    return this.categories;
  }

  getProductsByCategory(categoryId: number) {
    return this.products.filter(p => p.categoryId === categoryId);
  }
}
