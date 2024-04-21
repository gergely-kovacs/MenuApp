import { Injectable, inject, signal } from '@angular/core';
import { MenuBackendService, Recipe } from './menu-backend.service';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private readonly menuBackendService = inject(MenuBackendService);
  recipes = signal<Recipe[]>([]);

  async loadRecipes() {
    try {
      this.recipes.set(await this.menuBackendService.fetchRecipes() as Recipe[]);
    } catch {
      console.error('Failed to load recipes');
    }
  }
}
