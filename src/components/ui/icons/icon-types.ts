export const AVAILABLE_ICONS = ['circle-loading', 'error', 'info', 'success', 'warning'] as const;
export type IconType = (typeof AVAILABLE_ICONS)[number];
