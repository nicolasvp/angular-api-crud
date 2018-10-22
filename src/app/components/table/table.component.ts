import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ChampionsService } from '../../services/champions.service';
import { ModalComponent } from '../modal/modal.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styles: [`
		.ng-invalid.ng-touched:not(form){
			border: 1px solid red;
		}
		`]
})
export class TableComponent implements OnInit {
	// Decorador para poder llamar funciones desde el componente padre al componente hijo
	@ViewChild(ModalComponent)
	private modalComponent: ModalComponent;

	champions: any[] = [];
	champion: Object = {
		name: "",
		type: "",
		type_id: "",
		line: "",
		line_id: "",
		image: ""
	};
	lines: any[] = [];
	types: any[] = [];
	temp: any[] = [];
	table = {
		offset: 0
	};

	modalRef: BsModalRef;

	constructor(private _championsService: ChampionsService, private modalService: BsModalService) { }

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
		// this.modalComponent.openModal();
		this.modalRef = this.modalService.show(template);
	}

	showChampion(template: TemplateRef<any>, id: Number) {
		this._championsService.getChampion(id)
			.subscribe((data: any) => {
				this.champion = data;
				this.openModal(template)
			});
	}

	// Abre modal para crear campeon
	createChampion(template: TemplateRef<any>) {
		this.getData(template);
	}

	storeChampion(form: NgForm) {
		console.log(form)
	}

	// Abre modal con la info del campeon y con la info de lineas y tipos, recibe como parametro un template y un id numérico
	editChampion(template: TemplateRef<any>, id: Number) {
		this._championsService.getChampion(id)
			.subscribe((data: any) => {
				this.champion = data;
			});
		this.getData(template);
	}

	// Actualiza la información del campeon, recibe como parametro un formulario del tipo NgForm
	updateChampion(form: NgForm) {
		console.log(form, form.value)
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
}
