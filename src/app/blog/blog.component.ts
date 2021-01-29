import { AfterViewChecked, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, ROUTES } from '@angular/router';
import { CodeHighlightService } from '../services/code-highlight.service';

declare var ng: any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated,
})
export class BlogComponent implements AfterViewChecked {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private codeHighlightService: CodeHighlightService
  ) {}

  ngAfterViewChecked() {
    this.codeHighlightService.highlightAll();
  }
}
