import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-6">
        {/* Main Heading */}
        <h1 className="text-6xl font-bold text-orange-600 mb-4">
          Oops! Page Not Found
        </h1>
        {/* Subheading */}
        <p className="text-xl text-gray-600 mb-6">
          It seems we couldn’t find the page you're looking for.
        </p>
        {/* Illustration or Error Image */}
        <img 
          src="/404-image.svg" 
          alt="Page Not Found" 
          className="w-80 h-auto mb-6"
        />
        {/* Suggestions */}
        <p className="text-lg text-gray-500 mb-4">
          Don't worry! Here's what you can do:
        </p>
        <div className="space-y-4">
          <Link href="/" passHref>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition duration-300">
              Go Back to Home
            </button>
          </Link>
          <Link href="/shop" passHref>
            <button className="bg-transparent border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-full hover:bg-orange-100 transition duration-300">
              Browse Our Store
            </button>
          </Link>
        </div>
        <p className="text-sm text-gray-400 mt-6">
          If you think this is a mistake, please <Link href="/contact" className="text-orange-600 hover:underline">contact us</Link>.
        </p>
      </div>
    </div>
  );
}
