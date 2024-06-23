import { Injectable } from "@angular/core";
import { z } from "zod";

const recipeScheme = z
  .object({
    id: z.number(),
    name: z.string(),
    price: z.string(),
    isGlutenFree: z.boolean(),
    isLactoseFree: z.boolean(),
  })
  .transform((recipe) => ({
    id: recipe.id,
    name: recipe.name,
    price: Number(recipe.price),
    glutenFree: recipe.isGlutenFree,
    lactoseFree: recipe.isLactoseFree,
  }));

const recipesSchema = z.array(recipeScheme);

export type Recipe = z.infer<typeof recipeScheme>;

@Injectable({
  providedIn: "root",
})
export class MenuBackendService {
  async fetchRecipes() {
    try {
      const response = await fetch(`http://localhost:3000/menu`);
      const recipes = await response.json();
      return recipesSchema.parse(recipes);
    } catch (error) {
      console.error(error);
      return;
    }
  }
}
