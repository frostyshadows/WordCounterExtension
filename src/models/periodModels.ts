export type Period = "daily" | "weekly" | "monthly" | "yearly";
export const periodOptions: Period[] = ["daily", "weekly", "monthly", "yearly"];

export function getPeriodMs(period: Period) {
  const msPerDay = 24 * 60 * 60 * 1000;
  const periodString = period.replace(/["]+/g, "");
  switch (periodString) {
    case "daily": {
      return msPerDay;
    }
    case "weekly": {
      return msPerDay * 7;
    }
    case "monthly": {
      return msPerDay * 30.437;
    }
    case "yearly": {
      return msPerDay * 365;
    }
    default: {
      return msPerDay;
    }
  }
}
