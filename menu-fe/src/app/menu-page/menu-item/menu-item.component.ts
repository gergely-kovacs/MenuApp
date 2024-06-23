import { CurrencyPipe } from "@angular/common";
import { Component, inject, input } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { CartService } from "../../common/cart.service";
import { IsInCartPipe } from "../../common/is-in-cart.pipe";
import { Recipe } from "../menu-backend.service";

@Component({
  selector: "app-menu-item",
  standalone: true,
  imports: [CurrencyPipe, TranslateModule, IsInCartPipe],
  template: `
    <div
      class="flex flex-wrap w-[200px] h-full border-gray-600 border-2 rounded-md p-4"
    >
      <h3 class="w-full">{{ recipe().name }}</h3>
      <div class="w-full pb-3">{{ recipe().price | currency: "HUF" }}</div>
      @if (recipe().glutenFree || recipe().lactoseFree) {
        <div class="flex flex-wrap gap-2 w-full pb-3">
          @if (recipe().glutenFree) {
            <img
              width="64"
              height="64"
              srcset="
                assets/gluten-free-icon-128w.jpg  128w,
                assets/gluten-free-icon.jpg      3969w
              "
              sizes="64px"
              alt="Gluten-free"
              priority
            />
          }
          @if (recipe().lactoseFree) {
            <img
              width="64"
              height="64"
              srcset="
                assets/lactose-free-icon-128w.jpg 128w,
                assets/lactose-free-icon.jpg      490w
              "
              sizes="64px"
              alt="Lactose-free"
              priority
            />
          }
        </div>
      }
      <div class="w-full text-center mt-auto">
        @if (recipe().id | isInCart) {
          <button
            class="border-gray-600 border-2 rounded-md px-4 py-1"
            disabled
          >
            {{ "MENU_PAGE.MENU_ITEM_COMPONENT.ADDED_TO_CART" | translate }}
          </button>
        } @else {
          <button
            class="border-gray-600 border-2 rounded-md px-4 py-1"
            (click)="addToCart()"
          >
            {{ "MENU_PAGE.MENU_ITEM_COMPONENT.ADD_TO_CART" | translate }}
          </button>
        }
      </div>
    </div>
  `,
  styles: ``,
})
export class MenuItemComponent {
  cartService = inject(CartService);

  recipe = input.required<Recipe>();

  addToCart() {
    this.cartService.addToCart(this.recipe().id);
  }
}
