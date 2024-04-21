import { Component, OnInit, computed, inject, signal } from '@angular/core';
import {
  MenuFilter,
  MenuFilterFormComponent,
} from './menu-filter/menu-filter.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { MenuService } from './menu.service';
import { deburr } from 'lodash-es';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-menu-page',
  standalone: true,
  imports: [MenuItemComponent, MenuFilterFormComponent, TranslateModule],
  template: `
    <div class="p-4 flex flex-wrap gap-4">
      <h1 class="text-3xl w-full">{{ 'MENU_PAGE.MENU_PAGE_COMPONENT.MENU' | translate }}</h1>
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
  menuFilter = signal<MenuFilter>({
    search: '',
    glutenFree: false,
    lactoseFree: false,
  });

  recipes = computed(() =>
    this.menuService.recipes().filter((recipe) => {
      const { search, glutenFree, lactoseFree } = this.menuFilter();
      return (
        deburr(recipe.name.toLowerCase()).includes(
          deburr(search.toLowerCase())
        ) &&
        (recipe.glutenFree || !glutenFree) &&
        (recipe.lactoseFree || !lactoseFree)
      );
    })
  );

  displayedRecipes = computed(() => this.recipes().length);

  ngOnInit() {
    this.menuService.loadRecipes();
  }

  updateFilter(filter: MenuFilter) {
    this.menuFilter.set(filter);
  }
}
