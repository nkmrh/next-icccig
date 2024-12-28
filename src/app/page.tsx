import Link from 'next/link'

export default function Page() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div>
        <Link className='text-2xl text-stone-900 hover:text-stone-600' href="https://github.com/nkmrh/next-icccig">next-icccig</Link>
        <h2 className='text-base text-stone-900'>
          This site generate images of itunes card content code. (for readable
          OCR)
        </h2>
        <Link className='text-sm text-stone-900 hover:text-stone-600' href="/6MPAY3FFELPE">e.g. https://next-icccig.vercel.app/<b>6MPAY3FFELPE</b></Link>
      </div>
    </div>
  );
}
