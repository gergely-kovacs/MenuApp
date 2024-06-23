import { CurrencyPipe } from "@angular/common";
import { Component, OnInit, inject } from "@angular/core";
import { CartService } from "../common/cart.service";

@Component({
  selector: "app-cart-page",
  standalone: true,
  imports: [CurrencyPipe],
  template: `
    <div class="p-4 flex flex-wrap gap-4">
      <div class="flex flex-wrap gap-4">
        @for (cartItem of cartItems(); track cartItem.id) {
          <div>{{ cartItem.name }}</div>
          <div>{{ cartItem.price | currency: "HUF" }}</div>
          <div>{{ cartItem.amount }}</div>
        }
      </div>
    </div>
  `,
  styles: [``],
})
export class CartPageComponent implements OnInit {
  cartService = inject(CartService);

  cartItems = this.cartService.cartItems;

  ngOnInit(): void {
    this.cartService.loadCart();
  }
}
