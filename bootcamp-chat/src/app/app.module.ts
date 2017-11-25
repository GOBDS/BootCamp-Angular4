import { HttpClientModule } from '@angular/common/http';
import { ConnectionService } from './sobre/connection.service';
import { SobreComponent } from './sobre/sobre.component';
import { routing } from './app.route';
import { RouterModule } from '@angular/router';
import { ChatService } from './chat/chat.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { ChatItemComponent } from './chat/chat-item/chat-item.component';
import { ChatHeaderComponent } from './chat/chat-header/chat-header.component';


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    ChatItemComponent,
    ChatHeaderComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [
    ChatService,
    ConnectionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
