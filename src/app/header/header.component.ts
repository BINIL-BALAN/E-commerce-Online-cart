import { Component } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    constructor(private api:ApiServiceService){}

    search(event:any){
      let searchTerm = event.target.value
      this.api.searchKey = searchTerm
    }
}
