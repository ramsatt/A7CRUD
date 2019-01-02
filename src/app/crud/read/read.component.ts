import { Component, OnInit } from '@angular/core';
import {CrudService} from "../../services/crud.service";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {
  productID: any;
  productData: any;
  constructor(
      private crudService: CrudService,
      private router: Router,
      private actRoute: ActivatedRoute) { }

  ngOnInit() {
    this. productID = this.actRoute.snapshot.params['id'];
    this.loadProductDetails(this.productID);
  }

  loadProductDetails(productID){
    this.crudService.getProductDetails(productID).subscribe(product => {
      this.productData = product;
    });
  }

  navigation(link){
    this.router.navigate([link]);
  }
}
