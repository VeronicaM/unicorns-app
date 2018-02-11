import { Component, OnInit, Input } from "@angular/core";
import { Unicorn } from "../../models/unicorn.model";

@Component({
  selector: "app-unicorn-card",
  templateUrl: "./unicorn-card.component.html",
  styleUrls: ["./unicorn-card.component.scss"]
})
export class UnicornCardComponent implements OnInit {
  @Input() unicorn: Unicorn;
  constructor() {}

  ngOnInit() {}
}
