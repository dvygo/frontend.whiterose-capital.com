import Image from "next/image";
import Link from "next/link";

const LIGHT_FULL = "/logo.whiterose-capital.com/light-full.svg";
const DARK_FULL = "/logo.whiterose-capital.com/dark-full.svg";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="inline-block">
      <Image
        src={LIGHT_FULL}
        alt="White Rose Capital"
        width={180}
        height={48}
        className="h-10 w-auto dark:hidden"
        style={{ width: "auto", height: "2.5rem" }}
        priority
      />
      <Image
        src={DARK_FULL}
        alt="White Rose Capital"
        width={180}
        height={48}
        className="hidden h-10 w-auto dark:block"
        style={{ width: "auto", height: "2.5rem" }}
        priority
      />
    </Link>
  );
};

export default Logo;
