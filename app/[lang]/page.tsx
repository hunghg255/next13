import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
// import { usePost } from '../src/store/post';
import styles from './index.module.scss';
import Hello from '@components/Hello/Hello';
import { Locale } from 'src/i18n/i18n-config';
import Language from '@components/Language/Language';
import Link from 'next/link';
import { getLocaleCommon } from 'src/i18n/locales/get-common';

// export const revalidate = 60;

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const localeData = await getLocaleCommon(lang)

  console.log(localeData);


  const nextCookies = cookies();

  // if (!nextCookies.get('token')) {
  //   return redirect('/login');
  // }

  // const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then(
  //   (r) => r.json()
  // );

  // usePost.setState({ data: posts });

  return (
    <div className={styles.wrap}>

    <h1>Locale: {localeData.title}</h1>
    <Language lang={lang} />

      {/* <div>Server 121111 asdasds asds asdas asdsad</div>

      <Link href={'/post'} className='Link'>
        BLog sad
      </Link>

      <Image
        src='/static/images/bg-intro-page.webp'
        width={500}
        height={100}
        alt=''
        loading='lazy'
        className='IMG'
      />
      {dayjs().format('DD MMM YYYY, HH:mm')}

      <Hello /> */}
      <Hello />

      {/* {posts.map((post, idx) => {
        return (
          <div key={idx}>
            <Link href={`/post/${post.id}`}>
              <h4>{post.title}</h4>
              <p dangerouslySetInnerHTML={{ __html: post.body }} />
            </Link>
          </div>
        );
      })} */}

      <Link href={`/${lang}/about`}>About</Link>
    </div>
  );
}
