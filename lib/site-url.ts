export function getSiteUrl(): string {
  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  const deployment = process.env.VERCEL_URL;

  if (process.env.VERCEL_ENV === "production" && production) {
    return `https://${production}`;
  }

  if (deployment) {
    return `https://${deployment}`;
  }

  return "http://localhost:3000";
}
