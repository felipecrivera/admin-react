import React, { useRef, useState } from "react";
import SingleRecord from "./SingleRecord";
import { createPortal } from "react-dom";
import RecordForm from "./RecordForm";
import { read, utils } from "xlsx";
import {
  useGetRecordQuery,
  useCreateRecordMutation,
  useCreateOneRecordMutation,
} from "../../../redux/recordApi.js";
import Loading from "../../utils/Loading.jsx";
import { useCreateConversationMutation } from "../../../redux/conversationApi.js";
function Record(props) {
  const recordsFileRef = useRef();
  const conversationFileRef = useRef();

  const [showForm, setShowForm] = useState(false);

  const { data: records, isLoading } = useGetRecordQuery();
  const [createRecord, { isLoading: isUpdating }] = useCreateRecordMutation();
  const [createConversation] = useCreateConversationMutation();

  const [createOneRecord, { isLoading: creatingOneRecord }] =
    useCreateOneRecordMutation();

  const onCreateRecordTap = () => {
    setShowForm(true);
  };

  const handleParse = (e) => {
    const csvFile = e.target.files[0];

    if (csvFile) {
      const reader = new FileReader();
      reader.onload = async (event) => {
        const wb = read(event.target.result, {
          type: "binary",
          cellDates: true,
          dateNF: "dd/mm/yy",
          cellNF: false,
          cellText: false,
        });
        const sheet = wb.SheetNames[0];
        const workSheet = wb.Sheets[sheet];

        const data = utils.sheet_to_json(workSheet, { w: true });
        if (e.target.name == "conversationFile") {
          const csvColumnMapping = {
            "# of Conversations": "count",
            "Account ID": "AccountId",
            "Account Name": "AccountName",
            date: "date",
          };
          const processedData = data.map((item) => {
            const obj = {};

            Object.keys(item).forEach((key) => {
              obj[csvColumnMapping[key.trim()]] = item[key];
            });

            return obj;
          });
          await createConversation(processedData);
        } else {
          const csvColumnMapping = {
            "Account ID": "AccountId",
            "Account Name": "AccountName",
            "Activation Date": "activationDate",
            Company: "company",
            Campaign: "campaign",
            "First Name": "firstName",
            "Last Name": "lastName",
            Title: "title",
            Phone: "phone",
            Email: "email",
            Address: "address",
            City: "city",
            State: "state",
            "Zip Code": "zipCode",
            Outcome: "outCome",
            "Booking Date": "bookingDate",
            "Booking Time": "bookingTime",
            Notes: "notes",
          };

          const processedData = data.map((item) => {
            const obj = {};
            function convert(str) {
              if (str == "N/A")
                return null
              let date = new Date(str);
              let mnth = ("0" + (date.getMonth() + 1)).slice(-2);
              let day = ("0" + date.getDate()).slice(-2);
              return [date.getFullYear(), mnth, day].join("-");
            }
            Object.keys(item).forEach((key) => {
              if (
                csvColumnMapping[key.trim()] == "bookingDate" ||
                csvColumnMapping[key.trim()] == "activationDate"
              ) {
                obj[csvColumnMapping[key.trim()]] = convert(item[key]);
              } else {
                obj[csvColumnMapping[key.trim()]] = item[key];
              }
            });

            return obj;
          });

          await createRecord(processedData);
        }
      };

      reader.readAsArrayBuffer(csvFile);
    }
  };

  const handleOnCancel = () => {
    setShowForm(false);
  };

  const handleOnSave = async (formData) => {
    createOneRecord(formData)
      .then((e) => {
        if (e.error) {
          alert(e.error.data.message);
        }
      })
      .catch((e) => {
        console.log(e);
      });

    setShowForm(false);
  };

  return (
    <>
      {showForm &&
        createPortal(
          <RecordForm
            title="Create record"
            handleOnCancel={handleOnCancel}
            handleOnSave={handleOnSave}
            isUpdating={isUpdating}
          />,
          document.getElementById("portal")
        )}
      <main
        className={`relative z-20 flex h-full flex-1 flex-col overflow-y-auto overflow-x-hidden rounded-3xl rounded-t-2xl bg-slate-50 p-5 lg:rounded-s-[3rem] lg:rounded-tr-none lg:p-12 2xl:p-16 `}
        style={{ minHeight: "100vh" }}
      >
        <div className="hidden">
          <input
            hidden
            ref={recordsFileRef}
            onChange={handleParse}
            accept=".csv, .xlsx"
            type="file"
            name="recordFile"
          />
        </div>
        <div className="hidden">
          <input
            hidden
            ref={conversationFileRef}
            onChange={handleParse}
            accept=".csv, .xlsx"
            type="file"
            name="conversationFile"
          />
        </div>
        <div className="w-full flex justify-end ">
          <button
            type="button"
            onClick={onCreateRecordTap}
            className="p-2 mx-2 bg-[#10113A] text-white rounded"
          >
            Create record
          </button>
          <button
            type="button"
            onClick={() => {
              conversationFileRef?.current?.click();
            }}
            className="p-2 mx-2 bg-[#10113A] text-white rounded"
          >
            Upload CSV (Conversations)
          </button>
          <button
            type="button"
            onClick={() => {
              recordsFileRef?.current?.click();
            }}
            className="p-2 mx-2 bg-[#10113A] text-white rounded"
          >
            Upload CSV (Records)
          </button>
        </div>

        <div className="w-full flex flex-col ">
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  {isLoading && <Loading />}

                  {!isLoading &&
                    records &&
                    (records.length > 0 ? (
                      <table className="min-w-full text-left text-sm font-light">
                        <thead className="border-b font-medium dark:border-neutral-500">
                          <tr>
                            <th scope="col" className="px-6 py-4">
                              Activation Date
                            </th>
                            <th scope="col" className="px-6 py-4">
                              Campaign
                            </th>
                            <th scope="col" className="px-6 py-4">
                              Company
                            </th>
                            <th scope="col" className="px-6 py-4">
                              First name
                            </th>
                            <th scope="col" className="px-6 py-4">
                              Last name
                            </th>
                            <th scope="col" className="px-6 py-4">
                              Title
                            </th>
                            <th scope="col" className="px-6 py-4">
                              Email
                            </th>
                            <th scope="col" className="px-6 py-4">
                              Phone
                            </th>
                            <th scope="col" className="px-6 py-4">
                              Address
                            </th>
                            <th scope="col" className="px-6 py-4">
                              City
                            </th>
                            <th scope="col" className="px-6 py-4">
                              State
                            </th>
                            <th scope="col" className="px-6 py-4">
                              Zip Code
                            </th>
                            <th scope="col" className="px-6 py-4">
                              Outcome
                            </th>
                            <th scope="col" className="px-6 py-4">
                              Notes
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {records.map((item) => {
                            return (
                              <SingleRecord key={item._id} record={item} />
                            );
                          })}
                        </tbody>
                      </table>
                    ) : (
                      <p className="font-semibold mx-auto my-2">
                        No records available
                      </p>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Record;
