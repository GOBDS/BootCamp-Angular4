import { Injectable } from '@angular/core';
import * as io from "socket.io-client";

@Injectable()
export class ChatService {

  private _usuario: string;
  private _logTime: Date;
  private serverURL: string = '172.24.30.24:3000';


  public server: any;

  get usuario(): string {
    return this._usuario;
  }

  set usuario(nome: string) {
    this._usuario = nome;
  }

  get logTime(): Date {
    return this._logTime
  }

  set logTime(data: Date) {
    this._logTime = data;
  }

  constructor() { 
    if (!localStorage.getItem('nome')) {
      this.usuario = prompt("Qual é o seu nome ?")
      this.logTime = new Date();
    } else {
      this.usuario = localStorage.getItem('nome');
      this.logTime = new Date();
    }
    localStorage.setItem('nome', this.usuario);

    this.server = io(this.serverURL);
  }
}
