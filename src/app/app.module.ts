import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatProgressSpinnerModule
} from "@angular/material";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { CityCreateComponent } from "./cities/city-create/city-create.component";
import { CityListComponent } from "./cities/city-list/city-list.component";
import { ManagerCreateComponent } from "./managers/manager-create/manager-create.component";
import { ManagerListComponent } from "./managers/manager-list/manager-list.component";
import { DriverCreateComponent } from "./drivers/driver-create/driver-create.component";
import { TruckCreateComponent } from "./truck/truck-create/truck-create.component";
import { AdminLoginComponent } from "./login/admin-login/admin-login.component";
import { ManagerLoginComponent } from "./login/manager-login/manager-login.component";
import { DriverListComponent } from "./drivers/driver-list/driver-list.component";
//import { DriverListComponent } from "./drivers/driver-list/driver-list.component";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CityCreateComponent,
    CityListComponent,
    ManagerCreateComponent,
    ManagerListComponent,
    DriverCreateComponent,
    DriverListComponent,
    TruckCreateComponent,
    AdminLoginComponent,
    ManagerLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}