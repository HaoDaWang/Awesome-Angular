import { Component } from "@angular/core";

@Component({
  selector: "root",
  template: "<div>{{msg}}</div>",
  styles: [
    `
      div {
        color: red;
      }
    `
  ]
})
export class AppComponent {
  msg = "Hello";
}
