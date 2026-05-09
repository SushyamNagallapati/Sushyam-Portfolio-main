import LogRocket from "logrocket";

const APP_ID = "mmbta7/sushyam-portfolio";

let initialized = false;

export function initLogRocket(): void {
  if (initialized) return;
  if (typeof window === "undefined") return;

  try {
    LogRocket.init(APP_ID);
    initialized = true;
  } catch (err) {
    console.warn("[LogRocket] failed to initialize", err);
  }
}

export function identifyUser(userId?: string, name?: string, email?: string): void {
  if (!initialized || !userId) return;
  const traits: Record<string, string> = {};
  if (name) traits.name = name;
  if (email) traits.email = email;
  try {
    LogRocket.identify(userId, traits);
  } catch (err) {
    console.warn("[LogRocket] identify failed", err);
  }
}
