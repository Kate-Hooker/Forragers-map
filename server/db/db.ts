import connection from './connection'
import type { NewMarkerData } from '../../models/Marker'

export function getAllMarkers() {
  return connection('marker-data').select()
}

export function addNewMarker(newMarkerData: NewMarkerData) {
  return connection('marker-data').insert(newMarkerData)
}
