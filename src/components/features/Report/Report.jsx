import React, { useState, useEffect, useRef, useCallback } from "react";
import SingleReport from "./SingleReport";
import Loading from "../../utils/Loading";
import { useSearchRecordsQuery } from "../../../redux/reportApi";
import { utils, writeFile } from "xlsx";

function Report(props) {
  const searchTermRef = useRef();
  const startDateRef = useRef();
  const endDateRef = useRef();

  const [searchQuery, setSearchQuery] = useState("");
  const { data: records, isLoading } = useSearchRecordsQuery(searchQuery);

  const search = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams();
    if (searchTermRef.current.value)
      urlParams.set("searchTerm", searchTermRef.current.value);

    if (startDateRef.current.value)
      urlParams.set("startDate", startDateRef.current.value);

    if (endDateRef.current.value)
      urlParams.set("endDate", endDateRef.current.value);

    const urlSearchQuery = urlParams.toString();
    setSearchQuery(urlSearchQuery);
  };

  const exportFunction = useCallback(() => {
    const exportList = [];

    const exportToCSV = () => {
      console.log(exportList);
      const worksheet = utils.json_to_sheet(exportList);
      const workbook = utils.book_new();
      utils.book_append_sheet(workbook, worksheet, "Sheet1");
      writeFile(workbook, "Report.xlsx");
    };

    const handleExporting = (checked, report) => {
      if (checked) exportList.push(report);
      else {
        const index = exportList.findIndex((item) => item._id === records._id);
        if (index !== -1) {
          exportList.splice(index, 1);
        }
      }
    };

    return { exportToCSV, handleExporting };
  });

  const { exportToCSV, handleExporting } = exportFunction();

  return (
    <main
      className={`relative mx-2 z-20 flex h-full flex-1 flex-col overflow-y-auto overflow-x-hidden rounded-3xl rounded-t-2xl bg-slate-50 p-5 lg:rounded-s-[3rem] lg:rounded-tr-none lg:p-12 2xl:p-16 `}
    >
      <div className="w-full flex justify-around my-4">
        <form onSubmit={search} className="flex gap-4 flex-col md:flex-row">
          <div className="flex items-center gap-2">
            <input
              ref={searchTermRef}
              type="text"
              id="searchTerm"
              placeholder="Search..."
              className="border rounded-lg p-3 w-full"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="date"
              ref={startDateRef}
              id="startDate"
              className="border rounded-lg p-3 w-full"
            />
            <input
              type="date"
              ref={endDateRef}
              id="endDate"
              className="border rounded-lg p-3 w-full"
            />
          </div>
          <div className="flex items-center gap-2">
            <button className="bg-slate-700 text-white p-2 px-3 rounded-lg uppercase hover:opacity-95">
              Search
            </button>
            <button
              type="button"
              onClick={exportToCSV}
              className="bg-slate-700 text-white p-2 px-3 rounded-lg uppercase hover:opacity-95"
            >
              Export to CSV
            </button>
          </div>
        </form>
      </div>
      <div className="w-full flex flex-col">
        {isLoading && <Loading />}

        {!isLoading &&
          records &&
          (records.length > 0 ? (
            <table className="flex flex-col">
              <thead>
                <tr className="flex w-full p-1 my-2">
                  <th className="text-center w-1/4">First name</th>
                  <th className="text-center w-1/4">Last name</th>
                  <th className="text-center w-1/4">Company</th>
                  <th className="text-center w-1/4">Campaign</th>
                </tr>
              </thead>
              <tbody>
                {records.map((item) => {
                  return (
                    <SingleReport
                      handleExporting={handleExporting}
                      key={item._id}
                      report={item}
                    />
                  );
                })}
              </tbody>
            </table>
          ) : (
            <p className="font-semibold mx-auto my-2">No reports available</p>
          ))}
      </div>
    </main>
  );
}

export default Report;
