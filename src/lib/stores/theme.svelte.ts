import { browser } from '$app/environment';

export type Theme = 'dark' | 'light';

function initial(): Theme {
	if (!browser) return 'dark';
	return (document.documentElement.dataset.theme as Theme) ?? 'dark';
}

// Reactive theme state — the <html data-theme> attribute is set pre-paint
// by the inline script in app.html; this store keeps it in sync afterwards.
export const theme = $state<{ current: Theme }>({ current: initial() });

export function setTheme(value: Theme) {
	theme.current = value;
	if (!browser) return;
	document.documentElement.dataset.theme = value;
	try {
		localStorage.setItem('theme', value);
	} catch {
		// private browsing — theme just won't persist
	}
}

export function toggleTheme() {
	setTheme(theme.current === 'dark' ? 'light' : 'dark');
}
