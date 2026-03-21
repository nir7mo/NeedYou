import Link from 'next/link';
import Button from '../shared/Button';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-black">
              NeedYou
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/pricing" className="text-gray-600 hover:text-black">
              Pricing
            </Link>
            <Link href="/dashboard" className="text-gray-600 hover:text-black">
              Dashboard
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="/auth/login">
              <Button variant="outline" size="sm">
                Sign In
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button variant="primary" size="sm">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}