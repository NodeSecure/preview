export default function Footer() {
  return (
    <footer className="fixed bottom-16">
      <p className="text-gray-200 font-thin font-sans">
        🕸 Powered by NodeSecure -{" "}
        <a
          className="hover:text-gray-400"
          href="https://github.com/ES-Community/nsecure"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to the organization
        </a>
      </p>
    </footer>
  );
}
