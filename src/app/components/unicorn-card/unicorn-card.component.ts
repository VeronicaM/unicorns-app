import { Component, OnInit, Input } from "@angular/core";
import { Unicorn } from "../../models/unicorn.model";
import { UtilsService } from "../../services/utils.service";

@Component({
  selector: "app-unicorn-card",
  templateUrl: "./unicorn-card.component.html",
  styleUrls: ["./unicorn-card.component.scss"]
})
export class UnicornCardComponent implements OnInit {
  @Input() unicorn: Unicorn;
  transparentColor;
  constructor(private utilsService: UtilsService) {}

  ngOnInit() {
    this.addTransparancy(0.35);
  }
  addTransparancy(transparency) {
    const rgbValues = this.utilsService.hexToRgb(this.unicorn.color);
    this.transparentColor = this.utilsService.addTransparency(
      rgbValues,
      transparency
    );
  }
}
