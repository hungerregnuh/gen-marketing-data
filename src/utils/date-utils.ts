import { startOfMonth, subYears } from 'date-fns';

export function getDateYearsAgo(years: number): Date {
  return startOfMonth(subYears(new Date(), years));
}
