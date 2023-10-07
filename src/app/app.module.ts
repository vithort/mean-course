import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { AngularMaterialModule } from "./angular-material.module";
import { AuthInterceptor } from "./auth/auth-interceptor";
import { ErrorComponent } from "./error/error.component";
import { ErrorInterceptor } from "./error.interceptor";
import { HeaderComponent } from "./header/header.component";
import { PostsModule } from "./posts/posts.module";

@NgModule({
  declarations: [AppComponent, ErrorComponent, HeaderComponent],
  imports: [
    AngularMaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    PostsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  entryComponents: [ErrorComponent],
})
export class AppModule {}
