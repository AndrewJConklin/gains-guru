import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-muscle-group-listing',
  templateUrl: './muscle-group-listing.component.html',
  styleUrls: ['./muscle-group-listing.component.css']
})
export class MuscleGroupListingComponent {
  @Input() name!: string;
  @Input() id!: number;
}

