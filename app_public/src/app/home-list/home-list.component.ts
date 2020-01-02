import { Component, OnInit } from "@angular/core";

export class Location {
  _id: string;
  name: string;
  distance: number;
  address: string;
  rating: number;
  facilities: string[];
}

@Component({
  selector: "app-home-list",
  templateUrl: "./home-list.component.html",
  styleUrls: ["./home-list.component.css"]
})
export class HomeListComponent implements OnInit {
  constructor() {}

  locations: Location[] = [
    {
      _id: "590d8dc7a7cb5b8e3f1bfc48",
      name: "Costy",
      distance: 14000.1234,
      address: "High Street, Reading",
      rating: 3,
      facilities: ["hot drinks", "food", "power"]
    },
    {
      _id: "590d8dc7a7cb5b8e3f1bfc48",
      name: "Starcups",
      distance: 120.542,
      address: "High Street, Reading",
      rating: 5,
      facilities: ["wifi", "food", "hot drinks"]
    }
  ];

  ngOnInit() {}
}
