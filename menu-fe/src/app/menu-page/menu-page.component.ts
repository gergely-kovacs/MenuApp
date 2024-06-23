import { Component, OnInit, computed, inject, signal } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { deburr } from "lodash-es";
import { CartService } from "../common/cart.service";
import {
  MenuFilter,
  MenuFilterFormComponent,
} from "./menu-filter/menu-filter.component";
import { MenuItemComponent } from "./menu-item/menu-item.component";
import { MenuService } from "./menu.service";

@Component({
  selector: "app-menu-page",
  standalone: true,
  imports: [MenuItemComponent, MenuFilterFormComponent, TranslateModule],
  template: `
    <div class="p-4 flex flex-wrap gap-4">
      <h1 class="text-3xl w-full">
        {{ "MENU_PAGE.MENU_PAGE_COMPONENT.MENU" | translate }}
      </h1>
      <app-menu-filter
        class="w-full"
        [displayedRecipes]="displayedRecipes()"
        (filterChanged)="updateFilter($event)"
      ></app-menu-filter>
      <div class="flex flex-wrap gap-4">
        @for (recipe of recipes(); track $index) {
          <app-menu-item [recipe]="recipe"></app-menu-item>
        }
      </div>
    </div>
  `,
  styles: ``,
})
export class MenuPageComponent implements OnInit {
  menuService = inject(MenuService);
  cartService = inject(CartService);

  menuFilter = signal<MenuFilter>({
    search: "",
    glutenFree: false,
    lactoseFree: false,
  });

  recipes = computed(() =>
    this.menuService.recipes().filter((recipe) => {
      const { search, glutenFree, lactoseFree } = this.menuFilter();
      return (
        deburr(recipe.name.toLowerCase()).includes(
          deburr(search.toLowerCase()),
        ) &&
        (recipe.glutenFree || !glutenFree) &&
        (recipe.lactoseFree || !lactoseFree)
      );
    }),
  );

  displayedRecipes = computed(() => this.recipes().length);

  ngOnInit() {
    this.menuService.loadRecipes();
    this.cartService.loadCart();
  }

  updateFilter(filter: MenuFilter) {
    this.menuFilter.set(filter);
  }
}
