import { Component } from '@angular/core';
import { ProductServiceService } from './product-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-Cafe';

  constructor(public productServiceService: ProductServiceService) {
  }

  ngOnInit(): void {
  }
}
