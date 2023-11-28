import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NgSwitch, NgSwitchDefault, NgSwitchCase } from "@angular/common";
import { ArtViewComponent } from "./art-view/art-view.component";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
    standalone: true,
    imports: [
        ArtViewComponent,
        NgSwitch,
        NgSwitchDefault,
        NgSwitchCase,
        RouterOutlet,
    ],
})
export class AppComponent {
    title = "canvas_rt2";
}
