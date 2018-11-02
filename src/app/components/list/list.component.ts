import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from 'src/app/services/authservice.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private auth: AuthserviceService) { }
  users: User[]

  ngOnInit() {
    this.auth.getCustomersList()
    .subscribe( data => {
      this.users = data;
    });
  }

}
