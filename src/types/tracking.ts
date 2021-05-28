export type TrackingDetails = {
  event: string;
  userId?: string;
  properties?: unknown;
  type?: string;
  anonymousId?: string;
  traits?: unknown;
  context?: unknown;
};