import { mensagemModel } from './../model/mensagem.model';
import { ChatService } from './../chat.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chat-item',
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.css']
})
export class ChatItemComponent implements OnInit {

  @Input() public mensagem: mensagemModel;

  constructor(private _chatService: ChatService) {
   }

  public ngOnInit(): void {
  }

  public minhaMensagem(): boolean {
    return (this.mensagem.author == this._chatService.usuario);
  }

}
