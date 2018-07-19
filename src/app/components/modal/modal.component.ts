import { Component, OnInit } from '@angular/core';
import { ChampionsService } from '../../services/champions.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  lines:any[] = [];
  types:any[] = [];

  champion:Object = {
    name: "",
    line: "",
    type: ""
  }

  constructor( private _championsService: ChampionsService ) { }

  ngOnInit() {
    this._championsService.getLines()
    .subscribe( line => this.lines = line );

    this._championsService.getTypes()
    .subscribe( type => this.types = type );

  }

  store( champForm:NgForm ) {
    console.log(champForm);
    console.log(this.champion);
  }

}
