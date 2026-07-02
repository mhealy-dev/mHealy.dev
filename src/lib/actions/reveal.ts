import type { Action } from 'svelte/action';

interface RevealOptions {
	/** Stagger delay in ms, applied via --reveal-delay */
	delay?: number;
	/** How much of the element must be visible before revealing */
	threshold?: number;
}

/**
 * Scroll-reveal action. Pair with the `.reveal` class in app.css:
 * `<div class="reveal" use:reveal={{ delay: 100 }}>`
 * Respects prefers-reduced-motion (reveals instantly).
 */
export const reveal: Action<HTMLElement, RevealOptions | undefined> = (node, options) => {
	const { delay = 0, threshold = 0.15 } = options ?? {};

	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		node.classList.add('is-visible');
		return;
	}

	node.style.setProperty('--reveal-delay', `${delay}ms`);

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.classList.add('is-visible');
					observer.disconnect();
				}
			}
		},
		{ threshold, rootMargin: '0px 0px -40px 0px' }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
};
