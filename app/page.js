import Image from 'next/image';
import Link from 'next/link';
import dayjs from 'dayjs';
import { cookies } from 'next/headers';
import styles from './index.module.scss';
import dynamic from 'next/dynamic';
import Hello from '../src/components/Hello/Hello';
import { redirect } from 'next/navigation';
import { headers } from 'next/headers';
import { usePost } from '../src/store/post';
import StoreSyncDataFromServerToClient from '../src/store/StoreSyncDataFromServerToClient';

const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};
// export const revalidate = 60;

export default async function Home() {
  const nextCookies = cookies();

  if (!nextCookies.get('token')) {
    return redirect('/login');
  }

  const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then(
    (r) => r.json()
  );

  usePost.setState({ data: posts });

  return (
    <div className={styles.wrap}>
      <StoreSyncDataFromServerToClient posts={posts} />
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

      {posts.map((post, idx) => {
        return (
          <div key={idx}>
            <Link href={`/post/${post.id}`}>
              <h4>{post.title}</h4>
              <p dangerouslySetInnerHTML={{ __html: post.body }} />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
