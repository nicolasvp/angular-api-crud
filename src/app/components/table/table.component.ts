import { Component, OnInit } from '@angular/core';
import { ChampionsService } from '../../services/champions.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: []
})
export class TableComponent implements OnInit {

  champions:any[] = [];
  champs_filtered:any[] = [];
  temp:any[] = [];
  table = {
    offset: 0
  };
  rows :any[] = [];

  constructor( private _championsService: ChampionsService ) { }

  ngOnInit() {
      this._championsService.getChampions()
      .subscribe( ( champion ) => {
        var filter = [];

        for ( let i of champion ) {
          var data = { name: i.name, type: i.type.name, line: i.line.name };
          filter.push(data);
        }
          this.champions = filter;
      } );
      this.temp = this.champions;
  }

  /**
   * Importante: Cambiar esta forma de como muestra el modal, lanza error el selector de JQuery al compilar
   * @return [description]
   */
  // Muestra modal
  showModal(){
    $("#championModal").modal('show');
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function(d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
}
