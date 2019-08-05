import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name = ''
  message ='Hiii'

  constructor(private route:ActivatedRoute) { 
    this.name = this.route.snapshot.params['name'];
  }

  ngOnInit() {
  }
  
  
  
  
  

}
