import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatToolbarModule,
} from "@angular/material";

import { AppComponent } from "./app.component";

import { PostCreateComponent } from "./posts/post-create/post-create.component";

import { HeaderComponent } from "./header/header.component";

@NgModule({
  declarations: [AppComponent, PostCreateComponent, HeaderComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    // Angular Material
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
