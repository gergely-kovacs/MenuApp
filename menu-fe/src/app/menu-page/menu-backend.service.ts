import { Injectable } from '@angular/core';
import { z } from 'zod';

const recipeScheme = z.object({
  name: z.string(),
  price: z.number(),
  glutenFree: z.boolean(),
  lactoseFree: z.boolean(),
});

const recipesSchema = z.array(recipeScheme);

export type Recipe = z.infer<typeof recipeScheme>;

@Injectable({
  providedIn: 'root',
})
export class MenuBackendService {
  async fetchRecipes() {
    try {
      const response = await fetch(`http://localhost:3000/recipes`);
      const recipes = await response.json();
      return recipesSchema.parse(recipes);
    } catch (error) {
      console.error(error);
      return;
    }
  }
}
