import Dexie from 'dexie';

export const db = new Dexie('LoopsSafetyDB');

db.version(1).stores({
  events: '++id, type, timestamp, data', // Primary key and indexed props
  settings: 'key', // Primary key
});

/**
 * Adds a new event to the database.
 * @param {string} type - The type of event (e.g., 'check-in', 'sos').
 * @param {object} [data={}] - Additional data associated with the event.
 * @returns {Promise<number>} The ID of the newly created event.
 */
export async function addEvent(type, data = {}) {
  const timestamp = new Date();
  return await db.events.add({
    type,
    timestamp,
    data,
  });
}

/**
 * Retrieves the most recent event of a specific type.
 * @param {string} type - The type of event to retrieve.
 * @returns {Promise<object|undefined>} The latest event or undefined if not found.
 */
export async function getLatestEvent(type) {
  return await db.events
    .where('type')
    .equals(type)
    .last();
}
