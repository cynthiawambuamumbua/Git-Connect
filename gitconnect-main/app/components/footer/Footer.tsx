
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="mb-4">
          <h5 className="text-lg font-bold">GitConnect</h5>
          <p className="text-sm">A social network for developers.</p>
        </div>
        <div className="mb-4">
          <h6 className="text-md font-semibold">Links</h6>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:text-gray-400">About Us</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-400">Contact</Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-gray-400">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-gray-400">Terms of Service</Link>
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h6 className="text-md font-semibold">Follow Us</h6>
          <div className="flex space-x-4">
            <Link href="https://github.com" className="hover:text-gray-400">GitHub</Link>
            <Link href="https://twitter.com" className="hover:text-gray-400">Twitter</Link>
            <Link href="https://linkedin.com" className="hover:text-gray-400">LinkedIn</Link>
          </div>
        </div>
      </div>
      <div className="text-center mt-4 border-t border-gray-600 pt-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} GitConnect. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
