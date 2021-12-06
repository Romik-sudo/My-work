import {Component, Input, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-renderer',
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.scss']
})
export class RendererComponent implements OnInit {
  @Input() input:any;
  public isRed: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    this.isRed = this.input <= 0;
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if ('input' in changes) {
      this.isRed = this.input <= 0;
    }
  }
}
