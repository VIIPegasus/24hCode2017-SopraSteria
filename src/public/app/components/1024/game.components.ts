import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'game',

  // add our router directives we will be using
  directives: [ROUTER_DIRECTIVES]
})
export class GameComponent {
    test = 'Test';
}
