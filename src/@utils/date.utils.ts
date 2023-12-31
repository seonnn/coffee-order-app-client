import { parseISO } from 'date-fns';

const isoDateFormat =
  /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)((-(\d{2}):(\d{2})|Z)?)$/;

const isIsoDateString = (value: any) => {
  return value && typeof value === 'string' && isoDateFormat.test(value);
};

export const handleAxiosDates = (body: any) => {
  if (body === null || body === undefined || typeof body !== 'object')
    return body;

  for (const key of Object.keys(body)) {
    const value = body[key];
    if (isIsoDateString(value)) body[key] = parseISO(value);
    else if (typeof value === 'object') handleAxiosDates(value);
  }
};
