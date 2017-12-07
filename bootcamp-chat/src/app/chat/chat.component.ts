import { mensagemModel } from './model/mensagem.model';
import { mensagemServerModule } from './model/mensagem-server.model';
import { ChatService } from './chat.service';
import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, AfterViewChecked } from '@angular/core';

import { ReplaySubject, Observable, Scheduler } from 'rxjs/Rx';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, AfterViewInit, AfterViewChecked {
  public mensagems: mensagemModel[] = [];
  public mensagemInserir: string;
  public subject = new ReplaySubject<mensagemModel[]>(2);

  @ViewChild('scrollMe') private scrollContainer: ElementRef;

  constructor(private _chatService: ChatService) {
  }

  public ngOnInit(): void {
    this._chatService.getSubject().subscribe(responce => {
      this.mensagems = responce;
    });
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

  public teclaEnter(event: any): void {
    if (event.keyCode === 13) {
      this.enviaMensagem();
    }
  }
  private scrollToBottom(): void {
    this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
  }
}
