import { Injectable } from "@angular/core";
import { z } from "zod";

const cartItemSchema = z.object({
  id: z.number(),
  dishId: z.number(),
  name: z.string(),
  amount: z.number(),
  price: z.string(),
}).transform((cartItem) => ({
  ...cartItem,
  price: Number(cartItem.price),
}))

const cartSchema = z.object({
  id: z.number(),
  items: z.array(cartItemSchema),
});

export type CartItem = z.infer<typeof cartItemSchema>;
export type Cart = z.infer<typeof cartSchema>;

@Injectable({
  providedIn: "root",
})
export class CartBackendService {
  async fetchCartItems() {
    try {
      const response = await fetch(`http://localhost:3000/cart`);
      const responseBody = await response.json();
      const cart = cartSchema.parse(responseBody);
      return cart.items;
    } catch (error) {
      console.error(error);
      return;
    }
  }

  async addToCart(dishId: number) {
    try {
      const response = await fetch(`http://localhost:3000/cart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ dishId }),
      });
      const responseBody = await response.json();
      return cartItemSchema.parse(responseBody);
    } catch (error) {
      console.error(error);
      return;
    }
  }
}
