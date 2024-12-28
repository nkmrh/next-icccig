import Link from 'next/link'

export default function Page() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div>
        <Link href="https://github.com/nkmrh/next-icccig">next-icccig</Link>
        <h2>
          This site generate images of itunes card content code. (for readable
          OCR)
        </h2>
        <Link href="/6MPAY3FFELPE">e.g. https://next-icccig.vercel.app/6MPAY3FFELPE</Link>
      </div>
    </div>
  );
}
