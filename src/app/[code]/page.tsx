import Image from "next/image";

const page = async ({ params }: { params: Promise<{ code: string }> }) => {
  const { code } = await params;
  const chars = code.split("");
  const validCharas = [
    "3",
    "4",
    "6",
    "7",
    "9",
    "A",
    "E",
    "F",
    "H",
    "J",
    "K",
    "L",
    "M",
    "N",
    "P",
    "R",
    "T",
    "W",
    "X",
    "Y",
  ];
  let valid = true;
  for (const c of chars) {
    if (!validCharas.includes(c)) {
      valid = false;
      break;
    }
  }
  if (valid) {
    const srcs = chars.map((c) => `/font/${c}.jpg`);
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
  } else {
    return (
      <div className="flex h-screen items-center justify-center">
        <h1>May not be a valid code.</h1>
      </div>
    );
  }
};

export default page;
