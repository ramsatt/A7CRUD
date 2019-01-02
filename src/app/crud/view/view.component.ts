import {Component, OnInit, ViewChild} from '@angular/core';
import {CrudService} from "../../services/crud.service";
import {Router} from "@angular/router";
declare var $;
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  public products: any = [];
  @ViewChild('productsTable') Table;
  public dataTable: any;
  constructor(
      private crudService: CrudService,
      private router: Router
  ) { }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts(){
    this.crudService.getProducts().subscribe(
        productData => {
          this.products = productData;
          this.dataTable = $(this.Table.nativeElement);
          setTimeout(()=>{this.dataTable.DataTable();}, 2000);
        }
    );
  }

  getNavigation(link, id){
      if(id === ''){
          this.router.navigate([link]);
      } else {
          this.router.navigate([link + '/' + id]);
      }
  }

}
