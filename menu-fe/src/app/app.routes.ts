import { Routes } from "@angular/router";
import { CartPageComponent } from "./cart-page/cart-page.component";
import { MenuPageComponent } from "./menu-page/menu-page.component";

export const routes: Routes = [
  { path: "", redirectTo: "menu", pathMatch: "full" },
  { path: "menu", component: MenuPageComponent },
  { path: "cart", component: CartPageComponent },
];
