
import { data } from '../../data'
import Card from "./components/Card";

export default function Home() {
  return (
    <main className="max-w-[1320px]  mx-auto my-7">
      <h1 className='text-5xl text-center mb-10'>Cards with icons from svg sprite</h1>
      <div className='text-2xl mb-8 mx-5'>
        <p className='font-semibold'>Technologies used:</p>
        <p className='mb-5'>Next.js TailwindCSS</p>
        <p className='font-semibold'>Npm packages:</p>
        <p>svg-sprite svg-spritemap-webpack-plugin</p>
      </div>
      <div className='flex flex-wrap justify-center sm:justify-around gap-[24px]'>
        {data.map((item) => <Card key={item.id} item={item} />)}

      </div>
    </main>
  );
}
