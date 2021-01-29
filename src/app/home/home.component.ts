import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  links$: Observable<ScullyRoute[]> = this.scullyRoutes.available$.pipe(
    map((routes) =>
      routes.filter(
        (route: ScullyRoute) =>
          route.title && route.published && route.route.startsWith('/blog/')
      )
    )
  );

  constructor(public scullyRoutes: ScullyRoutesService) {}

  ngOnInit(): void {}
}
