import { Component, OnInit, OnDestroy } from "@angular/core";
import { Unicorn } from "../../models/unicorn.model";
import { UnicornService } from "../../services/unicorn.service";
import { Router } from "@angular/router";
import { NotificationService } from "../../services/notification.service";
import appConstants from "../../app-constants";
@Component({
  selector: "app-new-unicorn",
  templateUrl: "./new-unicorn.component.html",
  styleUrls: ["./new-unicorn.component.scss"]
})
export class NewUnicornComponent implements OnInit, OnDestroy {
  unicorn: Unicorn;
  isSubmited = false;
  autoSaveInterval;
  constructor(
    private unicornService: UnicornService,
    private router: Router,
    private notificationService: NotificationService
  ) {}
  ngOnDestroy() {
    clearInterval(this.autoSaveInterval);
  }
  ngOnInit() {
    this.unicorn = this.unicornService.getSavedUnicorn();
    //autosave every 5 minutes, 300000 milliseconds
    this.autoSaveInterval = setInterval(() => {
      this.autoSave();
      this.notificationService.open("Unicorn auto-saved!", "success-toaster");
    }, 300000);
  }
  createUnicorn() {
    this.isSubmited = true;
    if (this.unicornService.isUniqueName(this.unicorn.name)) {
      this.unicornService.createUnicorn(this.unicorn);
      //simulating network latency
      setTimeout(() => {
        this.router.navigate([appConstants.routes.UNICORN, this.unicorn.name]);
        this.notificationService.open("Unicorn created!", "success-toaster");
        this.unicornService.cleanSavedUnicorn();
        clearInterval(this.autoSaveInterval);
        this.isSubmited = false;
      }, 1000);
    } else {
      this.notificationService.open(
        "An unicorn with this name already exists!",
        "error-toaster"
      );
      this.isSubmited = false;
    }
  }
  autoSave() {
    this.unicornService.saveUnicorn(this.unicorn);
  }
  handleChange(event) {
    this.unicorn.picture = this.unicornService.getRandomPic(event.value);
    this.unicorn.gender = event.value;
    this.autoSave();
  }
}
