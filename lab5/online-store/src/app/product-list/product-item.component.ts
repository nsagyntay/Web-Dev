import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {

  @Input() product!: Product;
  @Output() delete = new EventEmitter<number>();

  starsArray = [1,2,3,4,5];

  like() {
    this.product.likes++;
  }
  removelike(){
    this.product.likes--;
    }

  remove() {
    if (confirm('Are you sure?')) {
      this.delete.emit(this.product.id);
    }
  }

  shareWhatsApp() {
    window.open(
      `https://wa.me/?text=${encodeURIComponent(this.product.link)}`,
      '_blank'
    );
  }

  shareTelegram() {
    window.open(
      `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}`,
      '_blank'
    );
  }
  getRoundedRating(): number {
    return Math.round(this.product.rating);
  }
}
