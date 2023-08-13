'use client'

import { i18n } from 'locales';
import Link from 'next/link';
import { usePathname, useRouter, } from 'next/navigation';
import React from 'react';

interface IPropsLanguage {
  lang: string;
}

const Language =  (props: IPropsLanguage) => {
  const pathName = usePathname();
  const router = useRouter();
  console.log(router, pathName);

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <>
      <ul>
        {i18n.locales.map((locale) => {
          return (
            <li key={locale}>
              <Link href={redirectedPathName(locale)}>{locale}</Link>
            </li>
          )
        })}
      </ul>
    </>
  );
}

export default Language;
