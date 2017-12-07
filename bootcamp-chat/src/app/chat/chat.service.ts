import { Observable, ReplaySubject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

import { mensagemModel } from './model/mensagem.model';

@Injectable()
export class ChatService {

  private _usuario: string;
  private _logTime: Date;
  private serverURL = 'http://localhost:3000';
  private _mensagems: mensagemModel[];


  public server: any;

  get usuario(): string {
    return this._usuario;
  }

  set usuario(nome: string) {
    this._usuario = nome;
  }

  get logTime(): Date {
    return this._logTime;
  }

  set logTime(data: Date) {
    this._logTime = data;
  }

  constructor() {
    if (!localStorage.getItem('nome')) {
      this.usuario = prompt('Qual é o seu nome ?');
      this.logTime = new Date();
    } else {
      this.usuario = localStorage.getItem('nome');
      this.logTime = new Date();
    }
    localStorage.setItem('nome', this.usuario);

    this._mensagems = [];
    this.server = io(this.serverURL);
    this.server.on('messages', m => {
      this._mensagems.push(m);
    });
  }

  public getSubject(): ReplaySubject<any> {
    const subject = new ReplaySubject<mensagemModel[]>(2);
    subject.next(this._mensagems);
    return subject;
  }
}
