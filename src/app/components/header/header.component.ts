import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  title= 'Task Tracker';
  constructor(private router:Router){}

  ngOnInit(): void {
      
  }

  toggleAddTask(){
    console.log('toggle');
  }

  hasRoute(route:string){
    return this.router.url ===route;
  }
}
