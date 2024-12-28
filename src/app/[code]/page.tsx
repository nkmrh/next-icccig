import Image from "next/image";

const page = async ({ params }: { params: Promise<{ code: string }> }) => {
  const { code } = await params;
  const chars = code.split("");
  const srcs = chars.map((c) => `/font/${c}.jpg`);
  console.log(srcs);
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex border-solid border-2 border-black">
        <div className="flex my-7 mx-7">
          {srcs.map((s, i) => (
            <Image key={i} src={s} width={15} height={21} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
