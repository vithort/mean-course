import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatExpansionModule,
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
} from "@angular/material";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { AuthInterceptor } from "./auth/auth-interceptor";
import { ErrorComponent } from "./error/error.component";
import { ErrorInterceptor } from "./error.interceptor";
import { HeaderComponent } from "./header/header.component";
import { LoginComponent } from "./auth/login/login.component";
import { PostCreateComponent } from "./posts/post-create/post-create.component";
import { PostListComponent } from "./posts/post-list/post-list.component";
import { SignupComponent } from "./auth/signup/signup.component";

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    HeaderComponent,
    LoginComponent,
    PostCreateComponent,
    PostListComponent,
    SignupComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    // Angular Material
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatExpansionModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  entryComponents: [ErrorComponent],
})
export class AppModule {}
