import { ConnectionService } from './connection.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  public users: any;

  constructor(private _connectionService: ConnectionService) {

  }

  ngOnInit() {
    this._connectionService.getUsers().subscribe(res => {
      this.users = res;
    }, error => {
      console.log(error);
    });
  }

}
