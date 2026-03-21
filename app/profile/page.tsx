import Header from '../../components/layout/Header';

export default function Profile() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-4xl mx-auto py-20 px-4">
        <h1 className="text-3xl font-bold mb-8">Public Profile</h1>
        <div className="bg-white rounded-lg shadow p-8">
          <div className="flex items-center mb-6">
            <div className="w-20 h-20 bg-gray-300 rounded-full mr-6"></div>
            <div>
              <h2 className="text-2xl font-semibold">John Doe</h2>
              <p className="text-gray-600">Software Developer</p>
            </div>
          </div>
          <p className="text-gray-700 mb-6">
            Experienced software developer with a passion for creating innovative solutions.
            Specialized in React, Node.js, and AI-powered applications.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Skills</h3>
              <ul className="text-gray-600 space-y-1">
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>Next.js</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Experience</h3>
              <p className="text-gray-600">5+ years in web development</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}