
import { data } from '../../data'
import Header from '../components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <main style={{display: 'flex'}}>
        <img src='/image.png' alt='pic' width={500} height={400} />
        <img src='/image copy.png' alt='pic' width={500} height={400} />
        <img src='/star.png' alt='pic' width={16} height={16} style={{opacity: 0.6} } />
        <img src='/star-solid.png' alt='pic' width={16} height={16} />
        <img src='/search.png' alt='pic' width={20} height={20} style={{opacity: 0.6} }/>

      </main>
    </>
  );
}
