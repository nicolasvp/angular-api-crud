import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ChampionsService } from '../../services/champions.service';
import { ModalComponent } from '../modal/modal.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styles: []
})
export class TableComponent implements OnInit {

	form: FormGroup;

	champions: any[] = [];
	champion: Object = {
		name: "",
		type: "",
		line: ""
	};
	lines: any[] = [];
	types: any[] = [];
	temp: any[] = [];
	table = {
		offset: 0
	};

	modalRef: BsModalRef;

	constructor(private _championsService: ChampionsService, private modalService: BsModalService) {
		this.form = new FormGroup({
			'name': new FormControl('', [Validators.required, Validators.maxLength(100)]),
			'type': new FormControl('', Validators.required),
			'line': new FormControl('', Validators.required),
			'id': new FormControl('')
		});
	}

	ngOnInit() {
		this._championsService.getChampions()
			.subscribe((data: any) => {
				this.champions = data;
				this.temp = data;
			});
	}

	updateFilter(event) {
		const val = event.target.value.toLowerCase();

		// filter our data
		const temp = this.temp.filter(function(d) {
			return d.name.toLowerCase().indexOf(val) !== -1 || !val;
		});

		// update the rows
		this.champions = temp;
		// Whenever the filter changes, always go back to the first page
		this.table.offset = 0;
	}

	openModal(template: TemplateRef<any>) {
		this.resetForm();
		this.modalRef = this.modalService.show(template);
	}

	closeModal() {
		this.modalRef.hide();
	}

	showChampion(template: TemplateRef<any>, id: Number) {
		this._championsService.getChampion(id, 'show')
			.subscribe((data: any) => {
				this.champion = data;
				this.openModal(template)
			});
	}

	// Abre modal para crear campeon
	createChampion(template: TemplateRef<any>) {
		this.getData(template);
	}

	// Guarda el campeon y lo agrega al array de campeones
	storeChampion() {
		this._championsService.storeChampion(this.form.value)
			.subscribe((data: any) => {
				this.champions = [...this.champions, data];
				this.closeModal();
			});
	}

	// Abre modal con la info del campeon y con la info de lineas y tipos, recibe como parametro un template y un id numérico
	editChampion(template: TemplateRef<any>, id: Number) {
		this.getData(template);
		this._championsService.getChampion(id, 'edit')
			.subscribe((data: any) => {
				this.champion = data;
				this.form.setValue(this.champion);
			});
	}

	// Actualiza la información del campeon, recibe como parametro un formulario del tipo NgForm
	updateChampion() {
		this._championsService.updateChampion(this.form.value)
			.subscribe((data: any) => {
				this.champions = [...data];
				this.closeModal();
			});
	}

	// Obtiene la informacion de las lineas y los tipos, luego abre modal
	getData(template) {
		this._championsService.getLines()
			.subscribe((data: any) => {
				this.lines = data;
			});

		this._championsService.getTypes()
			.subscribe((data: any) => {
				this.types = data;
				this.openModal(template)
			});
	}

	resetForm() {
		this.form.reset({
			name: "",
			type: "",
			line: ""
		});
	}
}
