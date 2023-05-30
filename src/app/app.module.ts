import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { BasicHighlightDirectiveDirective } from './basic-highlight-directive.directive';
import { BetterHighlightDirective } from './better-highlight.directive';
import { UnlessDirective } from './unless.directive';
import { ServerPageComponent } from './server-page/server-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PokemonNameDecoratorPipe } from './pipes/pokemon-name-decorator.pipe';
import { UsersInterceptor } from './interceptors/users.interceptor';
import { AlertComponent } from './alert/alert.component';
import { DynamicComponentPlaceholderDirective } from './dynamic-component-placeholder.directive';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    BasicHighlightDirectiveDirective,
    BetterHighlightDirective,
    UnlessDirective,
    ServerPageComponent,
    PageNotFoundComponent,
    HomePageComponent,
    PokemonNameDecoratorPipe,
    AlertComponent,
    DynamicComponentPlaceholderDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: UsersInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
