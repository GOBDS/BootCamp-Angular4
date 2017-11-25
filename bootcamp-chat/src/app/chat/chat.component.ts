import { mensagemModel } from './model/mensagem.model';
import { mensagemServerModule } from './model/mensagem-server.model';
import { ChatService } from './chat.service';
import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, AfterViewInit, AfterViewChecked {
  public mensagems: mensagemModel[] = [];
  public mensagemInserir: string;

  @ViewChild ('scrollMe') private scrollContainer: ElementRef;

  constructor(private _chatService: ChatService) {
    this._chatService.server.on('messages', m => {
        this.mensagems.push(m);
    });
   }

  public ngOnInit(): void {
  }

  public ngAfterViewInit(): void {
    this.scrollToBottom();
  }

  public ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  public enviaMensagem(): void {
    
    this._chatService.server.emit(
      'messages',
      new mensagemServerModule(this.mensagemInserir, this._chatService.usuario)
      );
    this.mensagemInserir = '';
  }

  private scrollToBottom(): void {
    this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
  }
}
