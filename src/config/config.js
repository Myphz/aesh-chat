export const SERVER_URL = process.env.NODE_ENV !== "production" ? "ws://localhost:5000/messages" : (function() {
  const currentURL = window.location.origin;
  return currentURL.replace(window.location.protocol, "ws:") + "/messages";
})();