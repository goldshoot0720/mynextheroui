import { title } from "@/components/primitives";
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <div>
      <h1 className={title()}>草包鋒兄</h1>
    </div>
    <Image
      src="/IMG_0032.jpg"
      width={333}
      height={333}
      alt="Picture of cat."
    />
    </>
  );
}
