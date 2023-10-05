/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('marker-data').del()
  await knex('marker-data').insert([
    { id: 1, latitude: -41.291231, longitude: 174.767122, description: 'Wild pumpkin patch' },
    { id: 2, latitude: -41.288758, longitude: 174.777184, description: 'Lions mane mushroom patch' },
    { id: 3, latitude: -41.276021, longitude: 174.725231, description: 'Walnut tree' },
    { id: 4, latitude: -41.274021, longitude: 174.725631, description: 'Compost pit' },
    { id: 5, latitude: -41.288958, longitude: 174.771259, description: 'Apple tree' }
    { id: 5, latitude: -41.319975, longitude: 174.782755, description: 'Blackberry bush' }
    { id: 6, latitude: -41.313354, longitude: 174.819654, description: 'Community Garden' }
    { id: 7, latitude: -41.319565, longitude: 174.784247, description: 'Free compost' }
    { id: 8, latitude: -41.296148, longitude: 174.740048, description: 'Passionfuit vine' }
    { id: 9, latitude: -41.328689, longitude: 174.796189, description: 'Lemon tree' }
  ])
}
