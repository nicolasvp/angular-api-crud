import { Component, OnInit, TemplateRef, Input, EventEmitter } from '@angular/core';
import { ChampionsService } from '../../services/champions.service';
import { NgForm } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
// import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent implements OnInit {

  bsModalRef: BsModalRef;
  lines: any = [];
  types: any = [];

  champion: Object = {
    name: '',
    line: '',
    type: ''
  };

  title: string;
  closeBtnName: string;
  list: any[] = [];

  // Propiedades emitidas hacia el padre
  @Input() championData: any = {};

  constructor( private _championsService: ChampionsService, private modalService: BsModalService ) { }

  ngOnInit() {
    this._championsService.getLines()
    .subscribe( line => this.lines = line );

    this._championsService.getTypes()
    .subscribe( type => this.types = type );
  }

  openModal() {
    const initialState = {
      list: [
        'Open a modal with component',
        'Pass your data',
        'Do something else',
        '...'
      ],
      title: 'Modal with component'
    };
    this.bsModalRef = this.modalService.show(ModalComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  closeModal() {
    this.bsModalRef.hide();
  }

  store( champForm: NgForm ) {
    console.log(champForm);
    console.log(this.champion);
  }
}
