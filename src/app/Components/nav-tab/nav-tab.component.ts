import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-tab',
  templateUrl: './nav-tab.component.html',
  styleUrl: './nav-tab.component.scss'
})
export class NavTabComponent {
  currentRoute: string | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.currentRoute = this.route.snapshot.url[0].path
  }
}
