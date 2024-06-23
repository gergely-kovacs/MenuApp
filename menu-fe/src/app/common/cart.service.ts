import { Injectable, inject, signal } from "@angular/core";
import { CartBackendService, CartItem } from "./cart-backend.service";

@Injectable({
  providedIn: "root",
})
export class CartService {
  cartItems = signal<CartItem[]>([]);

  cartBackendService = inject(CartBackendService);

  async loadCart() {
    try {
      this.cartItems.set((await this.cartBackendService.fetchCartItems()) as CartItem[]);
    } catch {
      console.error("Failed to load recipes");
    }
  }

  async addToCart(dishId: number) {
    try {
      const newItem = await this.cartBackendService.addToCart(dishId) as CartItem;
      this.cartItems.update((items) => {
        return [...items, newItem];
      });
    } catch {
      console.error("Failed to add to cart");
    }
  }
}
