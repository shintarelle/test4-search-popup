import Image from 'next/image'
import Header from '../components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <main style={{display: 'flex'}}>
        <Image src='/picture.png' alt='picture' width={500} height={400} />
      </main>
    </>
  );
}
