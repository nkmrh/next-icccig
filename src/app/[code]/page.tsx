type Props = {
  params: { code: string };
}

export default function Page({ params }: Props) {
  return (
    <h1>{params.code}</h1>
  );
}
