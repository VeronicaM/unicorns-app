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
  cols;
  constructor(private unicornService: UnicornService) {}

  ngOnInit() {
    this.unicorns = this.unicornService.getUnicorns();
    this.cols = this.getCols(window.innerWidth);
  }

  getCols(width) {
    if (width < 600) {
      return 1;
    } else if (width < 960) {
      return 2;
    } else if (width < 1280) {
      return 3;
    }
    return 4;
  }
  onResize(event) {
    this.cols = this.getCols(event.target.innerWidth);
  }
}
