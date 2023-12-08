import type { SvelteComponent } from 'svelte'

export type Icon = typeof SvelteComponent<{ size?: number; color?: string }>
