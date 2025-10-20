import { writable } from 'svelte/store';
import { getLatestEvent } from './db';

/**
 * Creates a store that holds the latest check-in event and can be refreshed.
 */
function createLatestCheckInStore() {
    const { subscribe, set } = writable(null);

    async function fetchLatest() {
        try {
            const event = await getLatestEvent('check-in');
            set(event);
        } catch (error) {
            console.error("Failed to fetch latest check-in:", error);
            set(null);
        }
    }

    // Fetch the initial value when the store is first created.
    fetchLatest();

    return {
        subscribe,
        refresh: fetchLatest, // Expose a method to allow manual refreshing
    };
}

export const latestCheckIn = createLatestCheckInStore();
