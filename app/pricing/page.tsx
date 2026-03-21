import Header from '../../components/layout/Header';
import Button from '../../components/shared/Button';

export default function Pricing() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-7xl mx-auto py-20 px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Pricing</h1>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border border-gray-200 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Free</h2>
            <p className="text-4xl font-bold mb-6">$0</p>
            <ul className="text-left mb-8 space-y-2">
              <li>Basic CV generation</li>
              <li>Limited AI analysis</li>
            </ul>
            <Button variant="outline">Get Started</Button>
          </div>
          <div className="border-2 border-black rounded-lg p-8 text-center bg-gray-50">
            <h2 className="text-2xl font-semibold mb-4">Pro</h2>
            <p className="text-4xl font-bold mb-6">$9.99/mo</p>
            <ul className="text-left mb-8 space-y-2">
              <li>Advanced CV customization</li>
              <li>Full AI job matching</li>
              <li>Priority support</li>
            </ul>
            <Button>Start Pro Trial</Button>
          </div>
          <div className="border border-gray-200 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Enterprise</h2>
            <p className="text-4xl font-bold mb-6">Contact Us</p>
            <ul className="text-left mb-8 space-y-2">
              <li>All Pro features</li>
              <li>Team collaboration</li>
              <li>Custom integrations</li>
            </ul>
            <Button variant="outline">Contact Sales</Button>
          </div>
        </div>
      </div>
    </div>
  );
}