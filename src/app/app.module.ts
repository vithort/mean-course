import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
} from "@angular/material";

import { AppComponent } from "./app.component";

import { PostCreateComponent } from "./posts/post-create/post-create.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [AppComponent, PostCreateComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    // Angular Material
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
