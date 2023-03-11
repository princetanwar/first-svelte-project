import { writable } from "svelte/store";

const count = writable(0);

const countStore = {
  subscribe: count.subscribe,
  increment: () => count.update((n) => n + 1),
  decrement: () => count.update((n) => n - 1),
  reset: () => count.set(0),
};

export { countStore };
