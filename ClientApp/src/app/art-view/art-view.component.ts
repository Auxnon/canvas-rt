import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { ShareCanvasComponent } from "../share-canvas/share-canvas.component";

@Component({
    selector: "app-art-view",
    standalone: true,
    imports: [CommonModule, MatCardModule, ShareCanvasComponent],
    templateUrl: "./art-view.component.html",
    styleUrl: "./art-view.component.scss",
})
export class ArtViewComponent {}
