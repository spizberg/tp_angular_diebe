import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  message = "An error occured !"

  constructor(
    private data: DataService,
    private titleService: Title
    ) { }

  ngOnInit(): void {
    this.data.changeTitle("Error")
    this.titleService.setTitle("Error")
  }

}
