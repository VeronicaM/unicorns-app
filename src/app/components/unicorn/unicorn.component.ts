import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UnicornService } from "../../services/unicorn.service";
import { Unicorn } from "../../models/unicorn.model";
import { NotificationService } from "../../services/notification.service";
import "rxjs/add/operator/map";
import appConstants from "../../app-constants";
@Component({
  selector: "app-unicorn",
  templateUrl: "./unicorn.component.html",
  styleUrls: ["./unicorn.component.scss"]
})
export class UnicornComponent implements OnInit {
  unicorn: Unicorn;
  isSubmited = false;
  matingUnicorns: Unicorn[];
  mateName: string;

  constructor(
    private route: ActivatedRoute,
    private unicornsService: UnicornService,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    console.log("here");
    this.route.params.map(params => params["id"]).subscribe(id => {
      const name = decodeURIComponent(id);
      this.unicorn = this.unicornsService.getUnicorn(name);
      this.matingUnicorns = this.unicornsService.getMatingUnicorns(name);
      if (!this.unicorn) {
        this.router.navigate([appConstants.routes.DASHBOARD]);
      }
    });
  }
  mateUnicorns() {
    const baby = this.unicornsService.mateUnicorns(this.unicorn, this.mateName);
    this.isSubmited = true;
    setTimeout(() => {
      if (baby) {
        this.notificationService.open(
          "Congrats, this is your newborn baby :) !",
          "success-toaster"
        );
        this.router.navigate([appConstants.routes.UNICORN, baby.name]);
      } else {
        this.notificationService.open(
          "Mating finished. No babies, mismatched genders",
          "success-toaster"
        );
      }
      this.isSubmited = false;
    }, 2000);
  }
}
