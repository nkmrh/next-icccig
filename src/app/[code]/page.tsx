import Image from 'next/image'

const page = async ({ params }: { params: Promise<{ code: string }> }) => {
  const { code } = await params;
  const chars = code.split('')
  console.log()
  return (<Image src="/font/A.jpg" width={100} height={100} alt=""/>)
};

export default page;