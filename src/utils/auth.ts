export function isLoggedIn() {
    return document.cookie.split('; ').some(cookie => cookie.startsWith('logged_in='));
  }
  