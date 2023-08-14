import { Component, ElementRef, ViewChild } from '@angular/core';
import { Map, NavigationControl, Marker, LngLatLike } from 'maplibre-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  initialCoords: LngLatLike = [4.72, -74.07];

  map?: Map;
  marker = new Marker({ color: '#FF0000' });

  @ViewChild('map')
  private mapContainer!: ElementRef<HTMLElement>;

  ngAfterViewInit() {
    const initialState = { lng: -74.07, lat: 4.72, zoom: 14 };

    this.map = new Map({
      container: this.mapContainer.nativeElement,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${environment.apiKey}`,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom,
    });
    this.map.addControl(new NavigationControl({}), 'top-right');

    this.marker.setLngLat(this.initialCoords).addTo(this.map);

    this.mockAnimation();
  }

  ngOnDestroy() {
    this.map?.remove();
  }

  // Call the `animateMarker()` function every 1000 milliseconds to move the marker.
  mockAnimation() {
    setInterval(() => {
      this.animateMarker(Date.now());
    }, 1000);
  }

  animateMarker(timestamp: any) {
    console.log('Called', timestamp, this.marker.getLngLat());
    const radius = 10;

    // Update the data to a new position based on the animation timestamp. The
    // divisor in the expression `timestamp / 1000` controls the animation speed.
    this.marker.setLngLat([
      Math.cos(timestamp / 1000) * radius,
      Math.sin(timestamp / 1000) * radius,
    ]);
  }
}
