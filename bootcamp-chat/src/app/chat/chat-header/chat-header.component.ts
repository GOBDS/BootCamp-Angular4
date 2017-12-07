import { ChatService } from './../chat.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-header',
  templateUrl: './chat-header.component.html',
  styleUrls: ['./chat-header.component.css']
})
export class ChatHeaderComponent implements OnInit {

  public usuario: string;
  public logTime: Date;

  constructor(private _chatService: ChatService) {
    this.usuario = this._chatService.usuario;
    this.logTime = this._chatService.logTime;
  }

  public ngOnInit(): void {
  }

  public logout(): void {
    localStorage.clear();
    sessionStorage.clear();
    location.reload();
  }

}
