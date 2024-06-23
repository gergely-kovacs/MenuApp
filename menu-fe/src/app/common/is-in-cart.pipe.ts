import { Pipe, PipeTransform, inject } from "@angular/core";
import { CartService } from "./cart.service";

@Pipe({
  name: "isInCart",
  standalone: true,
  pure: false,
})
export class IsInCartPipe implements PipeTransform {
  cartService = inject(CartService);

  transform(dishId: number): boolean {
    return this.cartService.cartItems().some((item) => item.dishId === dishId);
  }
}
