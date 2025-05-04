import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeftIcon,
  ShareIcon,
  CalendarIcon,
  DocumentArrowDownIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { embedPowerBIReport, getPowerBIReportConfig } from "../utils/powerbi";
import LoadingSpinner from "../components/ui/LoadingSpinner";

function ReportPage() {
  const { reportId } = useParams();
  const navigate = useNavigate();
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const reportContainerRef = useRef(null);

  useEffect(() => {
    async function loadReport() {
      try {
        // Get report configuration from your backend
        const reportConfig = await getPowerBIReportConfig(reportId);
        setReport(reportConfig);

        // Embed the Power BI report
        if (reportContainerRef.current) {
          await embedPowerBIReport(
            "powerbi-container",
            reportConfig.reportId,
            reportConfig.accessToken,
            reportConfig.embedUrl
          );
        }

        setLoading(false);
      } catch (err) {
        setError("Error loading report. Please try again.");
        setLoading(false);
      }
    }

    loadReport();
  }, [reportId]);

  const handleGoBack = () => {
    navigate("/dashboard");
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <LoadingSpinner size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-16">
        <h2 className="text-xl font-semibold text-gray-900">Error</h2>
        <p className="mt-2 text-gray-500">{error}</p>
        <button onClick={handleGoBack} className="mt-4 btn-primary">
          Return to Dashboard
        </button>
      </div>
    );
  }

  if (!report) {
    return (
      <div className="text-center py-16">
        <h2 className="text-xl font-semibold text-gray-900">
          Report Not Found
        </h2>
        <p className="mt-2 text-gray-500">
          The requested report doesn't exist.
        </p>
        <button onClick={handleGoBack} className="mt-4 btn-primary">
          Return to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6 fade-in">
      {/* Report header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <button
            onClick={handleGoBack}
            className="mr-4 p-1 rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-100"
          >
            <ArrowLeftIcon className="h-5 w-5" />
          </button>
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">
              {report.name}
            </h1>
            <div className="flex items-center mt-1 text-sm text-gray-500">
              <CalendarIcon className="h-4 w-4 mr-1" />
              <span>
                Last updated:{" "}
                {new Date(report.lastUpdated).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>

        <div className="flex space-x-3">
          <button className="btn-secondary flex items-center">
            <DocumentArrowDownIcon className="h-5 w-5 mr-2" />
            Export
          </button>
          <button className="btn-secondary flex items-center">
            <ShareIcon className="h-5 w-5 mr-2" />
            Share
          </button>
          <div className="relative">
            <button className="btn-primary flex items-center">
              Refresh
              <ChevronDownIcon className="h-5 w-5 ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Report description */}
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <p className="text-gray-700">{report.description}</p>
      </div>

      {/* Power BI Report Container */}
      <div
        id="powerbi-container"
        className="bg-white p-4 rounded-lg shadow-sm h-[calc(100vh-24rem)] min-h-[500px]"
        ref={reportContainerRef}
      ></div>
    </div>
  );
}

export default ReportPage;
