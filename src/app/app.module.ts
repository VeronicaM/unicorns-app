import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { UnicornComponent } from "./components/unicorn/unicorn.component";
import { NewUnicornComponent } from "./components/new-unicorn/new-unicorn.component";
import { UnicornService } from "./services/unicorn.service";
import { UnicornCardComponent } from "./components/unicorn-card/unicorn-card.component";
import { UnicornsComponent } from "./components/unicorns/unicorns.component";
import { MaterialModule } from "@angular/material";
import { NotificationService } from "./services/notification.service";
import { TopbarComponent } from "./components/topbar/topbar.component";

@NgModule({
  declarations: [
    AppComponent,
    UnicornsComponent,
    UnicornComponent,
    NewUnicornComponent,
    UnicornCardComponent,
    TopbarComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [UnicornService, NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
