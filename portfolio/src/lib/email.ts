/** Opens Gmail’s compose page in the browser — works when `mailto:` has no app handler. */
export function gmailComposeHref(email: string): string {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`
}
