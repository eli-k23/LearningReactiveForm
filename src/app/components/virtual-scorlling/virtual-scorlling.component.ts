import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-virtual-scorlling",
  templateUrl: "./virtual-scorlling.component.html",
  styleUrls: ["./virtual-scorlling.component.css"],
})
export class VirtualScorllingComponent implements OnInit {
  numbers: number[] = [];

  constructor() {}

  async ngOnInit() {
    for (let index = 0; index < 1000; index++) {
      this.numbers.push(index);
    }
    console.log(this.numbers);
  }
}
