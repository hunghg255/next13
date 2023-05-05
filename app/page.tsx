import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { usePost } from '../src/store/post';
import styles from './index.module.scss';
import Hello from '@components/Hello/Hello';

// export const revalidate = 60;

export default async function Home() {
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
    </div>
  );
}
