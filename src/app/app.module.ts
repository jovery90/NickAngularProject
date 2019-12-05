import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasePageComponent } from './base-page/base-page.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NickCommentComponent } from './nick-comment/nick-comment.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { CommentService } from './comment.service';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: LandingPageComponent},
      { path: 'comments', component: NickCommentComponent },
      { path: 'add', component: CommentListComponent }
    ])
  ],
  declarations: [
    AppComponent,
    BasePageComponent,
    CommentListComponent,
    LandingPageComponent,
    NickCommentComponent,
    TopNavbarComponent
  ],
  providers: [CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
