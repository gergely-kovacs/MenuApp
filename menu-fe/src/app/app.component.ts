import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <app-header></app-header>
    <router-outlet />
  `,
  styles: ``,
})
export class AppComponent {
  title = "menu-fe";

  constructor(public translate: TranslateService) {
    translate.addLangs(["en", "hu"]);
    translate.setDefaultLang("en");
  }
}
