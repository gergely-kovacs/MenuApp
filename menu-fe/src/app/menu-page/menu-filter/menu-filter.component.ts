import { Component, inject, input, output } from "@angular/core";
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { TranslateModule, TranslateService } from "@ngx-translate/core";

export interface MenuFilter {
  search: string;
  glutenFree: boolean;
  lactoseFree: boolean;
}

@Component({
  selector: "app-menu-filter",
  standalone: true,
  imports: [ReactiveFormsModule, TranslateModule],
  providers: [TranslateService],
  template: `
    <form [formGroup]="filterForm" (submit)="onFormSubmit()">
      <div class="flex flex-wrap items-center gap-4">
        <input
          formControlName="search"
          type="text"
          [placeholder]="'MENU_PAGE.MENU_FILTER_COMPONENT.SEARCH' | translate"
          class="border-gray-600 border-2 rounded-md p-2"
        />
        <label class="">
          <input
            formControlName="glutenFree"
            type="checkbox"
            class="border-gray-600 border-2 rounded-md p-2"
            (change)="onFormSubmit()"
          />
          <span class="ml-2">{{ "MENU_PAGE.MENU_FILTER_COMPONENT.GLUTEN_FREE" | translate }}</span>
        </label>
        <label class="">
          <input
            formControlName="lactoseFree"
            type="checkbox"
            class="border-gray-600 border-2 rounded-md p-2"
            (change)="onFormSubmit()"
          />
          <span class="ml-2">{{ "MENU_PAGE.MENU_FILTER_COMPONENT.LACTOSE_FREE" | translate }}</span>
        </label>
        <div
          [translate]="'MENU_PAGE.MENU_FILTER_COMPONENT.RECIPE_COUNT'"
          [translateParams]="{ count: displayedRecipes() }"
          class="ml-auto p-2"
        ></div>
      </div>
    </form>
  `,
  styles: ``,
})
export class MenuFilterFormComponent {
  private readonly fb = inject(FormBuilder);

  displayedRecipes = input<number>();

  filterChanged = output<MenuFilter>();

  filterForm = this.fb.nonNullable.group({
    search: "",
    glutenFree: false,
    lactoseFree: false,
  });

  onFormSubmit() {
    if (this.filterForm.valid) {
      this.filterChanged.emit(this.filterForm.value as MenuFilter);
    }
  }
}
