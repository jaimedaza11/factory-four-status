import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import StatusCard from "./components/StatusCard/StatusCard";
import "./App.css";
import UpdateTime from "./components/UpdateTime/UpdateTime";
export interface ApiResponse {
  name: string;
  success: boolean;
  message: string;
  hostname: string;
  time: number;
}

// Modify interval for the API health status.
const fetchDataIntervalSeconds = 15; //Ensure that the value is positive and greater than 0.

const endpointNames = [
  "accounts",
  "assets",
  "customers",
  "datapoints",
  "devices",
  "documents",
  "forms",
  "invites",
  "media",
  "messages",
  "namespaces",
  "orders",
  "patients",
  "relationships",
  "rules",
  "templates",
  "users",
  "workflows",
];

const App = () => {
  const [statuses, setStatuses] = useState<ApiResponse[]>([]);
  const [firstValidDate, setFirstValidDate] = useState<Date | null>(null);

  useEffect(() => {
    const fetchStatuses = async () => {
      try {
        const apiCalls = endpointNames.map((endpoint) =>
          axios
            .get<ApiResponse>(
              `https://api.factoryfour.com/${endpoint}/health/status`
            )
            .then((response) => {
              return {
                name: endpoint,
                success: response.data.success,
                message: response.data.message.split(":")[0].trim(),
                hostname: response.data.hostname,
                time: response.data.time,
              };
            })
            .catch((error) => {
              console.error(`Error fetching status for ${endpoint}:`, error);
              // Return a default response for the failed request
              return {
                name: endpoint,
                success: false,
                message: "Error",
                hostname: "Outage",
                time: 0,
              };
            })
        );

        const data = await Promise.all(apiCalls);
        setStatuses(data);

        // Find the first valid timestamp
        const validTimestampEntry = data.find((entry) => entry.time > 0);
        if (validTimestampEntry) {
          setFirstValidDate(new Date(validTimestampEntry.time));
        }
      } catch (error) {
        console.error("Error fetching statuses:", error);
      }
    };

    // Initial fetch
    fetchStatuses();

    // Setup interval for fetching data every specified number of seconds
    const interval = setInterval(() => {
      fetchStatuses();
    }, fetchDataIntervalSeconds * 1000);

    return () => {
      clearInterval(interval); // Cleanup interval on component unmount
    };
  }, []);

  return (
    <div className="containerBg">
      <Header />
      <div className="container">
        {firstValidDate && (
          <div className="timestampContainer">
            <UpdateTime firstValidDate={firstValidDate} />
          </div>
        )}
        <div className="statusesContainer">
          {statuses.map((status, index) => (
            <StatusCard key={index} status={status} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
