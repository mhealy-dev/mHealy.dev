// Shared open/close state for the ⌘K command palette so any
// component (Navigation, Footer, hero hint) can trigger it.
export const palette = $state({ open: false });

export function openPalette() {
	palette.open = true;
}

export function closePalette() {
	palette.open = false;
}

export function togglePalette() {
	palette.open = !palette.open;
}
