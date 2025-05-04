import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className="min-h-screen bg-white px-4 flex items-center justify-center">
      <div className="max-w-lg mx-auto text-center">
        <h1 className="text-6xl font-extrabold text-primary-600">404</h1>
        <h2 className="text-3xl font-extrabold text-gray-900 mt-2">Page Not Found</h2>
        <p className="mt-4 text-lg text-gray-500">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="btn-primary"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage