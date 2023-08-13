import 'server-only';

import { Locale } from '../index'

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const localeData = {
  en: () => import('./en/common.json').then((module) => module.default),
  vi: () => import('./vi/common.json').then((module) => module.default),
}

export const getLocaleCommon = async (locale: Locale) => localeData[locale]()
