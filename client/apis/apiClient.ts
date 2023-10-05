import request from 'superagent'
import { NewMarkerData } from '../../models/Marker'

export async function getAllMarkers() {
  const response = await request.get('/')
  return response.body
}

export async function addNewMarker(newMarker: NewMarkerData) {
  const response = await request.post('/').send(newMarker)
  return response.body
}
