import Header from '../../components/layout/Header';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto py-20 px-4">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
        <p className="text-gray-600">Welcome to your dashboard. This is where your AI job assistant features will be.</p>
      </div>
    </div>
  );
}