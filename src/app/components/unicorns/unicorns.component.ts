import { Component, OnInit, Input } from "@angular/core";
import { Unicorn } from "../../models/unicorn.model";
import { UnicornService } from "../../services/unicorn.service";
import appConstants from "../../app-constants";
@Component({
  selector: "app-unicorns",
  templateUrl: "./unicorns.component.html",
  styleUrls: ["./unicorns.component.scss"]
})
export class UnicornsComponent implements OnInit {
  unicorns: Unicorn[];
  appConstants = appConstants;
  constructor(private unicornService: UnicornService) {}

  ngOnInit() {
    this.unicorns = this.unicornService.getUnicorns();
  }

  getCols() {
    if (window.innerWidth < 600) {
      return 1;
    } else if (window.innerWidth < 960) {
      return 2;
    } else if (window.innerWidth < 1280) {
      return 3;
    }
    return 4;
  }
}
