import { Component, OnInit } from '@angular/core';
import { ChampionsService } from '../../services/champions.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: []
})
export class TableComponent implements OnInit {

  champions:any[] = [];

  constructor( private _championsService: ChampionsService ) { }

  ngOnInit() {
    $('#myTable').DataTable({
            dom: 'ftrip',
            "language": {
                "decimal": "",
                "emptyTable": "Sin datos disponibles",
                "info": "Mostrando _START_ a _END_ de _TOTAL_ entradas",
                "infoEmpty": "Mostrando 0 a 0 de 0 entradas",
                "infoFiltered": "(Filtrado de un total de _MAX_ entradas)",
                "infoPostFix": "",
                "thousands": ".",
                "lengthMenu": "Mostrar _MENU_ entradas",
                "loadingRecords": "Cargando...",
                "processing": "Procesando...",
                "search": "Buscar:",
                "zeroRecords": "Ningún registro encontrado.",
                "paginate": {
                    "first": "Primero",
                    "last": "Ultimo",
                    "next": "Siguiente",
                    "previous": "Anterior"
                }
            }
        });
      this._championsService.getChampions()
      .subscribe( champion => this.champions = champion );
  }

  // Muestra modal
  showModal(){
  console.log(this.champions);
    $("#championModal").modal('show');
  }


}
