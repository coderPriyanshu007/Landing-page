import Link from "next/link";
export default function ({ href, name }) {
  return(<button className="px-6 hover:bg-orange-600 text-sm md:text-base lg:text-lg  flex items-center justify-center rounded-md py-2 bg-[#FF541F]">
        <Link className="w-fit h-fit" href={href}>
      {name}
    </Link>
  </button>);
}
