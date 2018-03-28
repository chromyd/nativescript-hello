import { Component } from "@angular/core";

@Component({
    selector: "my-app",
    template: `
        <ActionBar title="My Head Spin" class="action-bar"></ActionBar>
        <Image src="~/images/family.jpg"></Image>
    `,
    styles: [`
    @keyframes spin {
      from { transform: rotate(0); } to { transform: rotate(360); }
    }
    Image {
      animation-name: spin;
      animation-duration: 10s;
      animation-iteration-count: infinite;
    }
  `]
})
export class AppComponent {
    constructor() {
        console.log("Hello World has been constructed!");
        console.log(JSON.stringify(
            {
                "name": "Jana",
                "breastSize": "D"
            }
        ));
    }
}