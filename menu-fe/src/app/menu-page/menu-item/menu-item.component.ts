import { CurrencyPipe } from "@angular/common";
import { Component, input } from "@angular/core";
import { Recipe } from "../menu-backend.service";

@Component({
  selector: "app-menu-item",
  standalone: true,
  imports: [CurrencyPipe],
  template: `
    <div class="min-w-[160px] h-full border-gray-600 border-2 rounded-md p-4">
      <h3>{{ recipe().name }}</h3>
      <div>{{ recipe().price | currency : "HUF" }}</div>
      <div class="flex flex-wrap gap-2">
        @if (recipe().glutenFree) {
        <img
          width="64"
          height="64"
          srcset="assets/gluten-free-icon-128w.jpg 128w, assets/gluten-free-icon.jpg 3969w"
          sizes="64px"
          alt="Gluten-free"
          priority
        />
        } @if (recipe().lactoseFree) {
        <img
          width="64"
          height="64"
          srcset="assets/lactose-free-icon-128w.jpg 128w, assets/lactose-free-icon.jpg 490w"
          sizes="64px"
          alt="Lactose-free"
          priority
        />
        }
      </div>
    </div>
  `,
  styles: ``,
})
export class MenuItemComponent {
  recipe = input.required<Recipe>();
}
