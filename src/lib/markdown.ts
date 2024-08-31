import sanitizeHtml from 'sanitize-html';
import {marked} from 'marked';

/**
 * Given markdown formatted string, returns the equivalent html, sanitizes the result beforehand.
 */
export function markdownToHtml(markdown: string): string {
    return sanitizeHtml(marked.parse(markdown, {async: false}));
}