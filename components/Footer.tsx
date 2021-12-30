import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex items-center">
      <Image
        className="rounded-full"
        src="https://avatars.githubusercontent.com/u/85318671?s=60&v=4"
        alt="NodeSecure Logo"
        width={40}
        height={40}
      />
      <p className="ml-3 text-gray-200 font-thin font-sans">
        Powered by NodeSecure -{" "}
        <a
          className="hover:text-gray-400"
          href="https://github.com/ES-Community/nsecure"
          target="_blank"
          rel="noopener noreferrer"
        >
          Try it now!
        </a>
      </p>
    </footer>
  );
}
