import { Component, OnInit, TemplateRef, Input, EventEmitter } from '@angular/core';
import { ChampionsService } from '../../services/champions.service';
import { NgForm } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent implements OnInit {

  modalRef: BsModalRef;
  lines:any = [];
  types:any = [];

  champion:Object = {
    name: "",
    line: "",
    type: ""
  }

  // Propiedades emitidas hacia el padre
  @Input() modalStatus: boolean = false;

  constructor( private _championsService: ChampionsService, private modalService: BsModalService ) { }

  ngOnInit() {
    this._championsService.getLines()
    .subscribe( line => this.lines = line );

    this._championsService.getTypes()
    .subscribe( type => this.types = type );

  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  store( champForm:NgForm ) {
    console.log(champForm);
    console.log(this.champion);
  }

}
