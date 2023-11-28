import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";

@Component({
    selector: "app-share-canvas",
    standalone: true,
    imports: [CommonModule, MatCardModule],
    templateUrl: "./share-canvas.component.html",
    styleUrl: "./share-canvas.component.scss",
})
export class ShareCanvasComponent {}
