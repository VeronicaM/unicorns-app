import { Component, OnInit } from "@angular/core";
import appConstants from "../../app-constants";
@Component({
  selector: "app-topbar",
  templateUrl: "./topbar.component.html",
  styleUrls: ["./topbar.component.scss"]
})
export class TopbarComponent implements OnInit {
  appConstants = appConstants;
  constructor() {}

  ngOnInit() {}
}
