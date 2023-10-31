import config from "@/config";

export function locale(date: Date, locale: string = config.DEFAULT_TIMEZONE) {
  return new Intl.DateTimeFormat(locale).format(date);
}
