import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpIcon,
  ArrowDownIcon,
  ClockIcon,
  DocumentChartBarIcon,
} from "@heroicons/react/24/outline";
import { useUser } from "@clerk/clerk-react";

function DashboardPage() {
  const { user } = useUser();
  const firstName = user?.firstName || "there";

  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch reports from backend
  useEffect(() => {
    async function fetchReports() {
      try {
        const res = await fetch("http://localhost:5000/get-reports");
        const data = await res.json();
        setReports(data);
      } catch (err) {
        console.error("Failed to fetch reports:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchReports();
  }, []);

  const stats = [
    {
      name: "Total Reports",
      value: reports.length.toString(),
      change: "+12%",
      isPositive: true,
    },
    { name: "Active Users", value: "48", change: "+8%", isPositive: true },
    { name: "Report Views", value: "8,623", change: "+22%", isPositive: true },
    {
      name: "Avg. Session Duration",
      value: "4m 38s",
      change: "-6%",
      isPositive: false,
    },
  ];

  return (
    <div className="fade-in space-y-6">
      {/* Welcome message */}
      <div className="py-6">
        <h1 className="text-2xl font-semibold text-gray-900">
          Welcome back, {firstName}!
        </h1>
        <p className="mt-1 text-gray-500">
          Here's an overview of your analytics and recent reports.
        </p>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="bg-white overflow-hidden shadow rounded-lg"
          >
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-1">
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    {stat.name}
                  </dt>
                  <dd className="mt-1 text-3xl font-semibold text-gray-900">
                    {stat.value}
                  </dd>
                </div>
                <div>
                  <div
                    className={`flex items-center text-sm font-medium ${
                      stat.isPositive ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {stat.isPositive ? (
                      <ArrowUpIcon className="h-5 w-5 mr-1" />
                    ) : (
                      <ArrowDownIcon className="h-5 w-5 mr-1" />
                    )}
                    <span>{stat.change}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent reports */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Recent Reports
          </h2>
          <Link
            to="/dashboard/all-reports"
            className="text-sm font-medium text-primary-600 hover:text-primary-500"
          >
            View all reports
          </Link>
        </div>

        {loading ? (
          <p>Loading reports...</p>
        ) : (
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              {reports.map((report) => (
                <li key={report.id}>
                  <Link
                    to={`/dashboard/reports/${report.id}`}
                    className="block hover:bg-gray-50"
                  >
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 bg-primary-100 rounded-md p-2">
                            <DocumentChartBarIcon className="h-6 w-6 text-primary-600" />
                          </div>
                          <div className="ml-4">
                            <p className="text-sm font-medium text-primary-600 truncate">
                              {report.name}
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              {report.description}
                            </p>
                          </div>
                        </div>
                        <div className="ml-2 flex-shrink-0 flex">
                          <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                            {report.category}
                          </p>
                        </div>
                      </div>
                      <div className="mt-2 sm:flex sm:justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <ClockIcon className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                          <p>
                            Last updated:{" "}
                            {new Date(report.lastUpdated).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default DashboardPage;
