import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { UnicornComponent } from "./components/unicorn/unicorn.component";
import { NewUnicornComponent } from "./components/new-unicorn/new-unicorn.component";
import { UnicornsComponent } from "./components/unicorns/unicorns.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: "dashboard",
        component: UnicornsComponent
      },
      {
        path: "unicorn/:id",
        component: UnicornComponent
      },
      {
        path: "newUnicorn",
        component: NewUnicornComponent
      },

      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      { path: "**", redirectTo: "dashboard", pathMatch: "full" }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
