// I need to create a class that uses the Marker class of MapLibre and adds the properties I need (id, name, icon)

import { Marker } from 'maplibre-gl';

export class CustomMarker extends Marker {
  id?: number;
  name?: string;
  icon?: string;

  constructor(options?: any) {
    super(options);
  }

  intialized(id: number, name: string, icon: string) {
    this.id = id;
    this.name = name;
    this.icon = icon;
  }
}
