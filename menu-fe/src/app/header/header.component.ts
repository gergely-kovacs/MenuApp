import { Component, inject } from "@angular/core";
import { RouterLink } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="flex items-center m-4">
      <h1 class="text-3xl w-full">MenuApp</h1>
      <a class="mr-4" routerLink="/cart">
        <img width="36" height="36" src="assets/icons/cart.svg" alt="Cart" priority />
      </a>
      <div class="ml-auto">
        <select
          class="border-gray-400 bg-gray-100 border-2 rounded-md p-2"
          name="language"
          (change)="changeLanguage($event)"
        >
          <option value="en">English</option>
          <option value="hu">Magyar</option>
        </select>
      </div>
    </div>
  `,
  styles: ``,
})
export class HeaderComponent {
  private readonly translateService = inject(TranslateService);

  changeLanguage(event: Event) {
    this.translateService.use((event.target as HTMLSelectElement).value);
  }
}
