import { Component } from "@angular/core";
import { UnicornService } from "./services/unicorn.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "app";

  constructor(private unicornService: UnicornService) {
    unicornService.initiUnicorns();
  }
}
