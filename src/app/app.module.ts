import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./core/modules/material/material.module";
import { NormalComponent } from "./components/normal/normal.component";
import { FormFillComponent } from "./components/form-fill/form-fill.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { VirtualScorllingComponent } from "./components/virtual-scorlling/virtual-scorlling.component";

// import { NgxMaterialTimepickerModule } from "ngx-material-timepicker";

@NgModule({
  declarations: [
    AppComponent,
    NormalComponent,
    FormFillComponent,
    VirtualScorllingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ScrollingModule,
    // NgxMaterialTimepickerModule,
    //    ,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
