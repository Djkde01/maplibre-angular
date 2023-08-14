import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Map, NavigationControl, Marker, LngLatLike } from 'maplibre-gl';
import { environment } from 'src/environments/environment';
import { CustomMarker } from 'src/interfaces/marker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  initialCoords: LngLatLike = [-74.07, 4.72];

  map?: Map;
  markerList: CustomMarker[] = [];
  selectedMarker?: CustomMarker;

  @ViewChild('map')
  private mapContainer!: ElementRef<HTMLElement>;

  constructor() {}

  ngOnInit() {
    this.markerList = [
      new CustomMarker().setLngLat([-74.07, 4.72]),
      new CustomMarker().setLngLat([-74.07, 4.72]),
      new CustomMarker().setLngLat([-74.07, 4.72]),
      new CustomMarker().setLngLat([-74.07, 4.72]),
    ];
  }

  onMarkerClick(marker: CustomMarker) {
    this.selectedMarker = marker;
  }

  animationLoop() {
    this.markerList.forEach((marker) => {
      this.animateMarker(marker);
    });
  }

  ngAfterViewInit() {
    // Markers initialization
    this.markerList.forEach((marker, index) => {
      marker.intialized(index, `marker #${index}`, '1');
    });
    // Animation loop for markers
    setInterval(() => {
      this.animationLoop();
    }, 1000);
  }

  animateMarker(marker: Marker) {
    let { lng, lat } = marker.getLngLat();

    lng = Math.random() * 0.01 + lng;
    lat = Math.random() * 0.01 + lat;

    marker.setLngLat([lng, lat]);
  }
}
