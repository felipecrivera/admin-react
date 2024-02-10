import React from "react";
import Navbar from "../../layout/Navbar";
function Dashboard() {
  return (
    <main className="relative z-20 flex h-full flex-1 flex-col overflow-y-auto overflow-x-hidden rounded-3xl rounded-t-2xl bg-slate-50 p-5 lg:rounded-s-[3rem] lg:rounded-tr-none lg:p-12 2xl:p-16">
      <div className="border-b border-gray-200">
        <Navbar />
      </div>

      <div className="mt-8 flex-1">
        <div
          id="todays-stats-tab"
          role="tabpanel"
          aria-labelledby="todays-stats-tab-btn"
        >
          <div className="">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4">
              <div className="rounded-xl bg-secondary/10 p-5 2xl:col-span-2">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b-[3px] border-secondary/20 pb-2">
                  <div className="relative flex items-center gap-2 before:absolute before:-bottom-[11px] before:left-0 before:h-[3px] before:w-[calc(100%+.5rem)] before:bg-secondary">
                    <span className="rounded-lg bg-accent-1 p-1 text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 17 19"
                        className="h-5 w-5"
                      >
                        <path d="M15.349 1.395h-2.093V.698a.698.698 0 0 0-1.396 0v.697H4.885V.698a.698.698 0 1 0-1.396 0v.697H1.395A1.395 1.395 0 0 0 0 2.791v13.953a1.395 1.395 0 0 0 1.395 1.396H15.35a1.395 1.395 0 0 0 1.395-1.396V2.791a1.395 1.395 0 0 0-1.395-1.396ZM3.489 2.791v.697a.698.698 0 0 0 1.395 0v-.697h6.976v.697a.698.698 0 0 0 1.396 0v-.697h2.093v2.79H1.395v-2.79h2.093Zm11.86 13.953H1.395V6.977H15.35v9.767ZM6.977 9.07v5.581a.698.698 0 1 1-1.396 0v-4.453l-.385.194a.698.698 0 1 1-.624-1.249l1.395-.698a.698.698 0 0 1 1.01.625Zm5.159 2.655-1.67 2.229h1.395a.698.698 0 0 1 0 1.395H9.07a.697.697 0 0 1-.558-1.116l2.51-3.347a.697.697 0 1 0-1.161-.77.697.697 0 1 1-1.208-.697 2.093 2.093 0 1 1 3.483 2.306Z" />
                      </svg>
                    </span>
                    <h6 className="text-base font-medium">Appointments</h6>
                  </div>

                  <div className="flex items-center gap-px text-sm font-medium text-primary">
                    <span className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 21 21"
                        className="h-4 w-4"
                      >
                        <path d="M10.072 0a10.072 10.072 0 1 0 10.072 10.072A10.082 10.082 0 0 0 10.072 0Zm0 18.594a8.522 8.522 0 1 1 8.522-8.522 8.532 8.532 0 0 1-8.522 8.522Zm3.647-9.845a.774.774 0 1 1-1.096 1.096l-1.776-1.777v5.877a.775.775 0 1 1-1.55 0V8.069L7.521 9.845A.775.775 0 1 1 6.425 8.75l3.099-3.1a.775.775 0 0 1 1.096 0l3.099 3.1Z" />
                      </svg>
                    </span>
                    <span className=""> +5% </span>
                  </div>
                </div>

                <div className="px-4 py-6 lg:p-8">
                  <h2 className="text-5xl font-medium lg:text-8xl">15</h2>
                </div>

                <div className="">
                  <div className="mb-2 flex flex-wrap justify-between gap-4 text-sm font-medium text-primary">
                    <p className="font-semibold">Progress Tracker</p>
                    <p>
                      <span className="font-medium text-secondary">25%</span>
                      to goal
                    </p>
                  </div>

                  <div
                    className="flex h-5 w-full overflow-hidden bg-gradient "
                    role="progressbar"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      data-aos="fade-right"
                      className="flex flex-col justify-center overflow-hidden whitespace-nowrap  bg-[#f4b610] text-center text-xs text-white transition delay-100 duration-500"
                      style={{ width: "25%" }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="grid gap-5">
                <div className="rounded-xl bg-secondary/10 p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b-[3px] border-secondary/20 pb-2">
                    <div className="relative flex items-center gap-2 before:absolute before:-bottom-[11px] before:left-0 before:h-[3px] before:w-[calc(100%+.5rem)] before:bg-secondary">
                      <span className="rounded-lg bg-accent-1 p-1 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          className="h-5 w-5"
                        >
                          <path d="M9.725 6.173a.636.636 0 0 1 0-.9l2.731-2.73h-1.645a.636.636 0 0 1 0-1.271h3.18a.636.636 0 0 1 .636.636v3.18a.636.636 0 0 1-1.272 0V3.443l-2.73 2.73a.636.636 0 0 1-.9 0Zm6.164 5.837a4.472 4.472 0 0 1-4.442 3.889C5.135 15.899 0 10.763 0 4.452A4.472 4.472 0 0 1 3.889.009 1.272 1.272 0 0 1 5.21.765l1.679 3.75v.009a1.272 1.272 0 0 1-.146 1.26L5.088 7.748c.595 1.21 1.86 2.464 3.086 3.06l1.935-1.645a1.267 1.267 0 0 1 1.266-.156l.01.005 3.745 1.678a1.272 1.272 0 0 1 .76 1.32Zm-1.262-.16h-.009l-3.736-1.673-1.936 1.647a1.272 1.272 0 0 1-1.31.135c-1.49-.72-2.974-2.192-3.694-3.665a1.272 1.272 0 0 1 .125-1.31L5.724 5.02l-1.67-3.736v-.01a3.196 3.196 0 0 0-2.782 3.178 10.186 10.186 0 0 0 10.175 10.175 3.196 3.196 0 0 0 3.18-2.777Z" />
                        </svg>
                      </span>
                      <h6 className="text-base font-medium">Dials</h6>
                    </div>

                    <div className="flex items-center gap-px text-sm font-medium text-primary">
                      <span className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 21 21"
                          className="h-4 w-4"
                        >
                          <path d="M10.072 0a10.072 10.072 0 1 0 10.072 10.072A10.082 10.082 0 0 0 10.072 0Zm0 18.594a8.522 8.522 0 1 1 8.522-8.522 8.532 8.532 0 0 1-8.522 8.522Zm3.647-9.845a.774.774 0 1 1-1.096 1.096l-1.776-1.777v5.877a.775.775 0 1 1-1.55 0V8.069L7.521 9.845A.775.775 0 1 1 6.425 8.75l3.099-3.1a.775.775 0 0 1 1.096 0l3.099 3.1Z" />
                        </svg>
                      </span>
                      <span className=""> +7% </span>
                    </div>
                  </div>

                  <div className="px-4 pt-3 lg:px-8">
                    <h2 className="text-5xl font-medium">50</h2>
                  </div>
                </div>

                <div className="rounded-xl bg-secondary/10 p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b-[3px] border-secondary/20 pb-2">
                    <div className="relative flex items-center gap-2 before:absolute before:-bottom-[11px] before:left-0 before:h-[3px] before:w-[calc(100%+.5rem)] before:bg-secondary">
                      <span className="rounded-lg bg-accent-1 p-1 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          className="h-5 w-5"
                        >
                          <path d="M15.133 10.689 11.387 9.01l-.01-.005a1.272 1.272 0 0 0-1.265.156l-1.935 1.65C6.952 10.215 5.686 8.96 5.09 7.75l1.652-1.965a1.272 1.272 0 0 0 .15-1.258v-.01L5.21.768a1.272 1.272 0 0 0-1.32-.76A4.472 4.472 0 0 0 0 4.452c0 6.311 5.135 11.447 11.447 11.447a4.473 4.473 0 0 0 4.442-3.89 1.272 1.272 0 0 0-.756-1.32Zm-3.686 3.938A10.187 10.187 0 0 1 1.272 4.452a3.196 3.196 0 0 1 2.772-3.18v.01l1.67 3.736L4.07 6.984a1.272 1.272 0 0 0-.125 1.31c.72 1.473 2.205 2.945 3.694 3.665a1.274 1.274 0 0 0 1.252-.09.544.544 0 0 0 .058-.046l1.933-1.648 3.736 1.674h.009a3.196 3.196 0 0 1-3.18 2.778ZM8.903 3.816a.636.636 0 0 1 .636-.636h1.908V1.272a.636.636 0 0 1 1.272 0V3.18h1.908a.636.636 0 1 1 0 1.272h-1.908v1.907a.636.636 0 1 1-1.272 0V4.452H9.54a.636.636 0 0 1-.636-.636Z" />
                        </svg>
                      </span>
                      <h6 className="text-base font-medium">
                        Conversation Rate
                      </h6>
                    </div>

                    <div className="flex items-center gap-px text-sm font-medium text-primary">
                      <span className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 21 21"
                          className="h-4 w-4"
                        >
                          <path d="M10.072 0a10.072 10.072 0 1 0 10.072 10.072A10.082 10.082 0 0 0 10.072 0Zm0 18.594a8.522 8.522 0 1 1 8.522-8.522 8.532 8.532 0 0 1-8.522 8.522Zm3.647-9.845a.774.774 0 1 1-1.096 1.096l-1.776-1.777v5.877a.775.775 0 1 1-1.55 0V8.069L7.521 9.845A.775.775 0 1 1 6.425 8.75l3.099-3.1a.775.775 0 0 1 1.096 0l3.099 3.1Z" />
                        </svg>
                      </span>
                      <span className=""> +3% </span>
                    </div>
                  </div>

                  <div className="px-4 pt-3 lg:px-8">
                    <h2 className="text-5xl font-medium">30%</h2>
                  </div>
                </div>
              </div>

              <div className="grid gap-5">
                <div className="rounded-xl bg-secondary/10 p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b-[3px] border-secondary/20 pb-2">
                    <div className="relative flex items-center gap-2 before:absolute before:-bottom-[11px] before:left-0 before:h-[3px] before:w-[calc(100%+.5rem)] before:bg-secondary">
                      <span className="rounded-lg bg-accent-1 p-1 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 18 18"
                          className="h-5 w-5"
                        >
                          <path d="M12.461 6.23v4.155a.692.692 0 1 1-1.384 0V7.902L6.72 12.259a.691.691 0 0 1-1.183-.49.693.693 0 0 1 .203-.49l4.357-4.356H7.615a.692.692 0 1 1 0-1.385h4.154a.693.693 0 0 1 .692.693ZM18 9a9 9 0 1 1-9-9 9.01 9.01 0 0 1 9 9Zm-1.385 0A7.615 7.615 0 1 0 9 16.615 7.625 7.625 0 0 0 16.615 9Z" />
                        </svg>
                      </span>
                      <h6 className="text-base font-medium">Connection Rate</h6>
                    </div>

                    <div className="flex items-center gap-px text-sm font-medium text-primary">
                      <span className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 21 21"
                          className="h-4 w-4"
                        >
                          <path d="M10.072 0a10.072 10.072 0 1 0 10.072 10.072A10.082 10.082 0 0 0 10.072 0Zm0 18.594a8.522 8.522 0 1 1 8.522-8.522 8.532 8.532 0 0 1-8.522 8.522Zm3.647-9.845a.774.774 0 1 1-1.096 1.096l-1.776-1.777v5.877a.775.775 0 1 1-1.55 0V8.069L7.521 9.845A.775.775 0 1 1 6.425 8.75l3.099-3.1a.775.775 0 0 1 1.096 0l3.099 3.1Z" />
                        </svg>
                      </span>
                      <span className=""> +12% </span>
                    </div>
                  </div>

                  <div className="px-4 pt-4 lg:px-8">
                    <h2 className="text-5xl font-medium">60%</h2>
                  </div>
                </div>

                <div className="rounded-xl bg-secondary/10 p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b-[3px] border-secondary/20 pb-2">
                    <div className="relative flex items-center gap-2 before:absolute before:-bottom-[11px] before:left-0 before:h-[3px] before:w-[calc(100%+.5rem)] before:bg-secondary">
                      <span className="rounded-lg bg-accent-1 p-1 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          className="h-5 w-5"
                        >
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                          <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
                        </svg>
                      </span>
                      <h6 className="text-base font-medium">Conversion Rate</h6>
                    </div>

                    <div className="flex items-center gap-px text-sm font-medium text-primary">
                      <span className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 21 21"
                          className="h-4 w-4"
                        >
                          <path d="M10.072 0a10.072 10.072 0 1 0 10.072 10.072A10.082 10.082 0 0 0 10.072 0Zm0 18.594a8.522 8.522 0 1 1 8.522-8.522 8.532 8.532 0 0 1-8.522 8.522Zm3.647-9.845a.774.774 0 1 1-1.096 1.096l-1.776-1.777v5.877a.775.775 0 1 1-1.55 0V8.069L7.521 9.845A.775.775 0 1 1 6.425 8.75l3.099-3.1a.775.775 0 0 1 1.096 0l3.099 3.1Z" />
                        </svg>
                      </span>
                      <span className=""> +12% </span>
                    </div>
                  </div>

                  <div className="px-4 pt-4 lg:px-8">
                    <h2 className="text-5xl font-medium">60%</h2>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-secondary/10 p-5 2xl:col-span-2">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b-[3px] border-secondary/20 pb-2">
                  <div className="relative flex items-center gap-2 before:absolute before:-bottom-[11px] before:left-0 before:h-[3px] before:w-[calc(100%+.5rem)] before:bg-secondary">
                    <span className="rounded-lg bg-accent-1 p-1 text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 18"
                        className="h-5 w-5"
                      >
                        <path d="M15.604 4.38a.636.636 0 0 1-.857-.271 7.482 7.482 0 0 0-2.66-2.935.638.638 0 0 1-.028-1.057.636.636 0 0 1 .707-.019 8.86 8.86 0 0 1 3.11 3.426.636.636 0 0 1-.272.856ZM.636 4.452a.636.636 0 0 0 .564-.343 7.483 7.483 0 0 1 2.66-2.935.636.636 0 1 0-.679-1.076 8.86 8.86 0 0 0-3.11 3.426.636.636 0 0 0 .565.928Zm14.794 8.263a1.272 1.272 0 0 1-1.098 1.912h-3.244a3.18 3.18 0 0 1-6.232 0H1.613a1.272 1.272 0 0 1-1.097-1.912c.717-1.236 1.097-2.994 1.097-5.083a6.36 6.36 0 1 1 12.719 0c0 2.088.38 3.846 1.098 5.083Zm-5.66 1.912H6.174a1.908 1.908 0 0 0 3.596 0Zm4.562-1.272c-.846-1.452-1.272-3.377-1.272-5.723a5.088 5.088 0 1 0-10.175 0c0 2.346-.428 4.272-1.272 5.723h12.719Z" />
                      </svg>
                    </span>
                    <h6 className="text-base font-medium">Dial Outcomes</h6>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <div className="p-2 lg:p-4 min-w-500 ">
                    <div className="flex justify-between mt-6">
                      <div>
                        <h6 className="text-base font-medium">Campaign 1</h6>
                      </div>
                      <div className="flex gap-4">
                        <h6 className="text-base font-medium">
                          Callback: <span className="text-blue">4</span>
                        </h6>
                        <h6 className="text-base font-medium">
                          Email: <span className="text-blue">2</span>
                        </h6>
                        <h6 className="text-base font-medium">
                          Not Interested: <span className="text-blue">1</span>
                        </h6>
                      </div>
                    </div>

                    <div className="h-[2px] space-y-2 bg-secondary/15 my-3"></div>

                    <div className="flex justify-between">
                      <div>
                        <h6 className="text-base font-medium">Campaign 2</h6>
                      </div>
                      <div className="flex gap-4">
                        <h6 className="text-base font-medium">
                          Callback: <span className="text-blue">4</span>
                        </h6>
                        <h6 className="text-base font-medium">
                          Email: <span className="text-blue">2</span>
                        </h6>
                        <h6 className="text-base font-medium">
                          Not Interested: <span className="text-blue">1</span>
                        </h6>
                      </div>
                    </div>

                    <div className="h-[2px] space-y-2 bg-secondary/15 my-3"></div>

                    <div className="flex justify-between">
                      <div>
                        <h6 className="text-base font-medium">Campaign 3</h6>
                      </div>
                      <div className="flex gap-4">
                        <h6 className="text-base font-medium">
                          Callback: <span className="text-blue">4</span>
                        </h6>
                        <h6 className="text-base font-medium">
                          Email: <span className="text-blue">2</span>
                        </h6>
                        <h6 className="text-base font-medium">
                          Not Interested: <span className="text-blue">1</span>
                        </h6>
                      </div>
                    </div>

                    <div className="h-[2px] space-y-2 bg-secondary/15 my-3"></div>

                    <div className="flex justify-between">
                      <div>
                        <h6 className="text-base font-medium">Campaign 4</h6>
                      </div>
                      <div className="flex gap-4">
                        <h6 className="text-base font-medium">
                          Callback: <span className="text-blue">4</span>
                        </h6>
                        <h6 className="text-base font-medium">
                          Email: <span className="text-blue">2</span>
                        </h6>
                        <h6 className="text-base font-medium">
                          Not Interested: <span className="text-blue">1</span>
                        </h6>
                      </div>
                    </div>

                    <div className="h-[2px] space-y-2 bg-secondary/15 my-3"></div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-secondary/10 p-5">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b-[3px] border-secondary/20 pb-2">
                  <div className="relative flex items-center gap-2 before:absolute before:-bottom-[11px] before:left-0 before:h-[3px] before:w-[calc(100%+.5rem)] before:bg-secondary">
                    <span className="rounded-lg bg-accent-1 p-1 text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 256"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path d="M244.8 150.4a8 8 0 0 1-11.2-1.6A51.6 51.6 0 0 0 192 128a8 8 0 0 1-7.37-4.89 8 8 0 0 1 0-6.22A8 8 0 0 1 192 112a24 24 0 1 0-23.24-30 8 8 0 1 1-15.5-4A40 40 0 1 1 219 117.51a67.94 67.94 0 0 1 27.43 21.68 8 8 0 0 1-1.63 11.21ZM190.92 212a8 8 0 1 1-13.84 8 57 57 0 0 0-98.16 0 8 8 0 1 1-13.84-8 72.06 72.06 0 0 1 33.74-29.92 48 48 0 1 1 58.36 0A72.06 72.06 0 0 1 190.92 212ZM128 176a32 32 0 1 0-32-32 32 32 0 0 0 32 32Zm-56-56a8 8 0 0 0-8-8 24 24 0 1 1 23.24-30 8 8 0 1 0 15.5-4A40 40 0 1 0 37 117.51a67.94 67.94 0 0 0-27.4 21.68 8 8 0 1 0 12.8 9.61A51.6 51.6 0 0 1 64 128a8 8 0 0 0 8-8Z" />
                      </svg>
                    </span>
                    <h6 className="text-base font-medium">Reports</h6>
                  </div>
                </div>

                <div className="py-4 p-1 lg:p-1">
                  <div className="flex justify-between mt-6">
                    <div>
                      <h6 className="text-base font-medium ">
                        Marketing Report 1
                      </h6>
                    </div>
                    <div className="">
                      <button className="">
                        <svg
                          className="myhover"
                          width="20px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.25589 16C3.8899 15.0291 3 13.4422 3 11.6493C3 9.20008 4.8 6.9375 7.5 6.5C8.34694 4.48637 10.3514 3 12.6893 3C15.684 3 18.1317 5.32251 18.3 8.25C19.8893 8.94488 21 10.6503 21 12.4969C21 14.0582 20.206 15.4339 19 16.2417M12 21V11M12 21L9 18M12 21L15 18"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="h-[2px] space-y-2 bg-secondary/15 my-3"></div>

                  <div className="flex justify-between ">
                    <div>
                      <h6 className="text-base font-medium">
                        Marketing Report 2
                      </h6>
                    </div>
                    <div className="">
                      <button>
                        <svg
                          className="myhover"
                          width="20px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.25589 16C3.8899 15.0291 3 13.4422 3 11.6493C3 9.20008 4.8 6.9375 7.5 6.5C8.34694 4.48637 10.3514 3 12.6893 3C15.684 3 18.1317 5.32251 18.3 8.25C19.8893 8.94488 21 10.6503 21 12.4969C21 14.0582 20.206 15.4339 19 16.2417M12 21V11M12 21L9 18M12 21L15 18"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="h-[2px] space-y-2 bg-secondary/15 my-3"></div>

                  <div className="flex justify-between ">
                    <div>
                      <h6 className="text-base font-medium">
                        Marketing Report 3
                      </h6>
                    </div>
                    <div className="">
                      <button>
                        <svg
                          className="myhover"
                          width="20px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.25589 16C3.8899 15.0291 3 13.4422 3 11.6493C3 9.20008 4.8 6.9375 7.5 6.5C8.34694 4.48637 10.3514 3 12.6893 3C15.684 3 18.1317 5.32251 18.3 8.25C19.8893 8.94488 21 10.6503 21 12.4969C21 14.0582 20.206 15.4339 19 16.2417M12 21V11M12 21L9 18M12 21L15 18"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="h-[2px] space-y-2 bg-secondary/15 my-3"></div>

                  <div className="flex justify-between ">
                    <div>
                      <h6 className="text-base font-medium">
                        Marketing Report 4
                      </h6>
                    </div>
                    <div className="">
                      <button>
                        <svg
                          className="myhover"
                          width="20px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.25589 16C3.8899 15.0291 3 13.4422 3 11.6493C3 9.20008 4.8 6.9375 7.5 6.5C8.34694 4.48637 10.3514 3 12.6893 3C15.684 3 18.1317 5.32251 18.3 8.25C19.8893 8.94488 21 10.6503 21 12.4969C21 14.0582 20.206 15.4339 19 16.2417M12 21V11M12 21L9 18M12 21L15 18"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="h-[2px] space-y-2 bg-secondary/15 my-3"></div>
                </div>
              </div>

              <div className="rounded-xl bg-secondary/10 p-5">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b-[3px] border-secondary/20 pb-2">
                  <div className="relative flex items-center gap-2 before:absolute before:-bottom-[11px] before:left-0 before:h-[3px] before:w-[calc(100%+.5rem)] before:bg-secondary">
                    <span className="rounded-lg bg-accent-1 p-1 text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 256"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path d="M244.8 150.4a8 8 0 0 1-11.2-1.6A51.6 51.6 0 0 0 192 128a8 8 0 0 1-7.37-4.89 8 8 0 0 1 0-6.22A8 8 0 0 1 192 112a24 24 0 1 0-23.24-30 8 8 0 1 1-15.5-4A40 40 0 1 1 219 117.51a67.94 67.94 0 0 1 27.43 21.68 8 8 0 0 1-1.63 11.21ZM190.92 212a8 8 0 1 1-13.84 8 57 57 0 0 0-98.16 0 8 8 0 1 1-13.84-8 72.06 72.06 0 0 1 33.74-29.92 48 48 0 1 1 58.36 0A72.06 72.06 0 0 1 190.92 212ZM128 176a32 32 0 1 0-32-32 32 32 0 0 0 32 32Zm-56-56a8 8 0 0 0-8-8 24 24 0 1 1 23.24-30 8 8 0 1 0 15.5-4A40 40 0 1 0 37 117.51a67.94 67.94 0 0 0-27.4 21.68 8 8 0 1 0 12.8 9.61A51.6 51.6 0 0 1 64 128a8 8 0 0 0 8-8Z" />
                      </svg>
                    </span>
                    <h6 className="text-base font-medium">Recordings</h6>
                  </div>
                </div>

                <div className="py-4 p-1 lg:p-1">
                  <div className="flex justify-between mt-6">
                    <div>
                      <h6 className="text-base font-medium">Recording 1</h6>
                    </div>
                    <div className="">
                      <button>
                        <svg
                          className="myhover"
                          width="20px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.25589 16C3.8899 15.0291 3 13.4422 3 11.6493C3 9.20008 4.8 6.9375 7.5 6.5C8.34694 4.48637 10.3514 3 12.6893 3C15.684 3 18.1317 5.32251 18.3 8.25C19.8893 8.94488 21 10.6503 21 12.4969C21 14.0582 20.206 15.4339 19 16.2417M12 21V11M12 21L9 18M12 21L15 18"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="h-[2px] space-y-2 bg-secondary/15 my-3"></div>

                  <div className="flex justify-between ">
                    <div>
                      <h6 className="text-base font-medium">Recording 2</h6>
                    </div>
                    <div className="">
                      <button>
                        <svg
                          className="myhover"
                          width="20px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.25589 16C3.8899 15.0291 3 13.4422 3 11.6493C3 9.20008 4.8 6.9375 7.5 6.5C8.34694 4.48637 10.3514 3 12.6893 3C15.684 3 18.1317 5.32251 18.3 8.25C19.8893 8.94488 21 10.6503 21 12.4969C21 14.0582 20.206 15.4339 19 16.2417M12 21V11M12 21L9 18M12 21L15 18"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="h-[2px] space-y-2 bg-secondary/15 my-3"></div>

                  <div className="flex justify-between ">
                    <div>
                      <h6 className="text-base font-medium">Recording 3</h6>
                    </div>
                    <div className="">
                      <button>
                        <svg
                          className="myhover"
                          width="20px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.25589 16C3.8899 15.0291 3 13.4422 3 11.6493C3 9.20008 4.8 6.9375 7.5 6.5C8.34694 4.48637 10.3514 3 12.6893 3C15.684 3 18.1317 5.32251 18.3 8.25C19.8893 8.94488 21 10.6503 21 12.4969C21 14.0582 20.206 15.4339 19 16.2417M12 21V11M12 21L9 18M12 21L15 18"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="h-[2px] space-y-2 bg-secondary/15 my-3"></div>

                  <div className="flex justify-between">
                    <div>
                      <h6 className="text-base font-medium">Recording 4</h6>
                    </div>
                    <div className="">
                      <button>
                        <svg
                          width="20px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.25589 16C3.8899 15.0291 3 13.4422 3 11.6493C3 9.20008 4.8 6.9375 7.5 6.5C8.34694 4.48637 10.3514 3 12.6893 3C15.684 3 18.1317 5.32251 18.3 8.25C19.8893 8.94488 21 10.6503 21 12.4969C21 14.0582 20.206 15.4339 19 16.2417M12 21V11M12 21L9 18M12 21L15 18"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="h-[2px] space-y-2 bg-secondary/15 my-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="this-week-tab"
          className="hidden"
          role="tabpanel"
          aria-labelledby="this-week-tab-btn"
        >
          <div className="">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4">
              <div className="rounded-xl bg-secondary/10 p-5 2xl:col-span-2">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b-[3px] border-secondary/20 pb-2">
                  <div className="relative flex items-center gap-2 before:absolute before:-bottom-[11px] before:left-0 before:h-[3px] before:w-[calc(100%+.5rem)] before:bg-secondary">
                    <span className="rounded-lg bg-accent-1 p-1 text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 17 19"
                        className="h-5 w-5"
                      >
                        <path d="M15.349 1.395h-2.093V.698a.698.698 0 0 0-1.396 0v.697H4.885V.698a.698.698 0 1 0-1.396 0v.697H1.395A1.395 1.395 0 0 0 0 2.791v13.953a1.395 1.395 0 0 0 1.395 1.396H15.35a1.395 1.395 0 0 0 1.395-1.396V2.791a1.395 1.395 0 0 0-1.395-1.396ZM3.489 2.791v.697a.698.698 0 0 0 1.395 0v-.697h6.976v.697a.698.698 0 0 0 1.396 0v-.697h2.093v2.79H1.395v-2.79h2.093Zm11.86 13.953H1.395V6.977H15.35v9.767ZM6.977 9.07v5.581a.698.698 0 1 1-1.396 0v-4.453l-.385.194a.698.698 0 1 1-.624-1.249l1.395-.698a.698.698 0 0 1 1.01.625Zm5.159 2.655-1.67 2.229h1.395a.698.698 0 0 1 0 1.395H9.07a.697.697 0 0 1-.558-1.116l2.51-3.347a.697.697 0 1 0-1.161-.77.697.697 0 1 1-1.208-.697 2.093 2.093 0 1 1 3.483 2.306Z" />
                      </svg>
                    </span>
                    <h6 className="text-base font-medium">Appointments</h6>
                  </div>

                  <div className="flex items-center gap-px text-sm font-medium text-primary">
                    <span className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 21 21"
                        className="h-4 w-4"
                      >
                        <path d="M10.072 0a10.072 10.072 0 1 0 10.072 10.072A10.082 10.082 0 0 0 10.072 0Zm0 18.594a8.522 8.522 0 1 1 8.522-8.522 8.532 8.532 0 0 1-8.522 8.522Zm3.647-9.845a.774.774 0 1 1-1.096 1.096l-1.776-1.777v5.877a.775.775 0 1 1-1.55 0V8.069L7.521 9.845A.775.775 0 1 1 6.425 8.75l3.099-3.1a.775.775 0 0 1 1.096 0l3.099 3.1Z" />
                      </svg>
                    </span>
                    <span className=""> +5% </span>
                  </div>
                </div>

                <div className="px-4 py-6 lg:p-8">
                  <h2 className="text-5xl font-medium lg:text-8xl">30</h2>
                </div>

                <div className="">
                  <div className="mb-2 flex flex-wrap justify-between gap-4 text-sm font-medium text-primary">
                    <p className="font-semibold">Progress Tracker</p>
                    <p>
                      <span className="font-medium text-secondary">40%</span>
                      to goal
                    </p>
                  </div>

                  <div
                    className="flex h-5 w-full overflow-hidden bg-gradient"
                    role="progressbar"
                    aria-valuenow="40"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      data-aos="fade-right"
                      className="flex flex-col justify-center overflow-hidden whitespace-nowrap bg-[#f4b610] text-center text-xs text-white transition duration-500"
                      style={{ width: "40%" }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="grid gap-5">
                <div className="rounded-xl bg-secondary/10 p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b-[3px] border-secondary/20 pb-2">
                    <div className="relative flex items-center gap-2 before:absolute before:-bottom-[11px] before:left-0 before:h-[3px] before:w-[calc(100%+.5rem)] before:bg-secondary">
                      <span className="rounded-lg bg-accent-1 p-1 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          className="h-5 w-5"
                        >
                          <path d="M9.725 6.173a.636.636 0 0 1 0-.9l2.731-2.73h-1.645a.636.636 0 0 1 0-1.271h3.18a.636.636 0 0 1 .636.636v3.18a.636.636 0 0 1-1.272 0V3.443l-2.73 2.73a.636.636 0 0 1-.9 0Zm6.164 5.837a4.472 4.472 0 0 1-4.442 3.889C5.135 15.899 0 10.763 0 4.452A4.472 4.472 0 0 1 3.889.009 1.272 1.272 0 0 1 5.21.765l1.679 3.75v.009a1.272 1.272 0 0 1-.146 1.26L5.088 7.748c.595 1.21 1.86 2.464 3.086 3.06l1.935-1.645a1.267 1.267 0 0 1 1.266-.156l.01.005 3.745 1.678a1.272 1.272 0 0 1 .76 1.32Zm-1.262-.16h-.009l-3.736-1.673-1.936 1.647a1.272 1.272 0 0 1-1.31.135c-1.49-.72-2.974-2.192-3.694-3.665a1.272 1.272 0 0 1 .125-1.31L5.724 5.02l-1.67-3.736v-.01a3.196 3.196 0 0 0-2.782 3.178 10.186 10.186 0 0 0 10.175 10.175 3.196 3.196 0 0 0 3.18-2.777Z" />
                        </svg>
                      </span>
                      <h6 className="text-base font-medium">Dials</h6>
                    </div>

                    <div className="flex items-center gap-px text-sm font-medium text-primary">
                      <span className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 21 21"
                          className="h-4 w-4"
                        >
                          <path d="M10.072 0a10.072 10.072 0 1 0 10.072 10.072A10.082 10.082 0 0 0 10.072 0Zm0 18.594a8.522 8.522 0 1 1 8.522-8.522 8.532 8.532 0 0 1-8.522 8.522Zm3.647-9.845a.774.774 0 1 1-1.096 1.096l-1.776-1.777v5.877a.775.775 0 1 1-1.55 0V8.069L7.521 9.845A.775.775 0 1 1 6.425 8.75l3.099-3.1a.775.775 0 0 1 1.096 0l3.099 3.1Z" />
                        </svg>
                      </span>
                      <span className=""> +7% </span>
                    </div>
                  </div>

                  <div className="px-4 pt-3 lg:px-8">
                    <h2 className="text-5xl font-medium">150</h2>
                  </div>
                </div>

                <div className="rounded-xl bg-secondary/10 p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b-[3px] border-secondary/20 pb-2">
                    <div className="relative flex items-center gap-2 before:absolute before:-bottom-[11px] before:left-0 before:h-[3px] before:w-[calc(100%+.5rem)] before:bg-secondary">
                      <span className="rounded-lg bg-accent-1 p-1 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          className="h-5 w-5"
                        >
                          <path d="M15.133 10.689 11.387 9.01l-.01-.005a1.272 1.272 0 0 0-1.265.156l-1.935 1.65C6.952 10.215 5.686 8.96 5.09 7.75l1.652-1.965a1.272 1.272 0 0 0 .15-1.258v-.01L5.21.768a1.272 1.272 0 0 0-1.32-.76A4.472 4.472 0 0 0 0 4.452c0 6.311 5.135 11.447 11.447 11.447a4.473 4.473 0 0 0 4.442-3.89 1.272 1.272 0 0 0-.756-1.32Zm-3.686 3.938A10.187 10.187 0 0 1 1.272 4.452a3.196 3.196 0 0 1 2.772-3.18v.01l1.67 3.736L4.07 6.984a1.272 1.272 0 0 0-.125 1.31c.72 1.473 2.205 2.945 3.694 3.665a1.274 1.274 0 0 0 1.252-.09.544.544 0 0 0 .058-.046l1.933-1.648 3.736 1.674h.009a3.196 3.196 0 0 1-3.18 2.778ZM8.903 3.816a.636.636 0 0 1 .636-.636h1.908V1.272a.636.636 0 0 1 1.272 0V3.18h1.908a.636.636 0 1 1 0 1.272h-1.908v1.907a.636.636 0 1 1-1.272 0V4.452H9.54a.636.636 0 0 1-.636-.636Z" />
                        </svg>
                      </span>
                      <h6 className="text-base font-medium">Reaches</h6>
                    </div>

                    <div className="flex items-center gap-px text-sm font-medium text-primary">
                      <span className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 21 21"
                          className="h-4 w-4"
                        >
                          <path d="M10.072 0a10.072 10.072 0 1 0 10.072 10.072A10.082 10.082 0 0 0 10.072 0Zm0 18.594a8.522 8.522 0 1 1 8.522-8.522 8.532 8.532 0 0 1-8.522 8.522Zm3.647-9.845a.774.774 0 1 1-1.096 1.096l-1.776-1.777v5.877a.775.775 0 1 1-1.55 0V8.069L7.521 9.845A.775.775 0 1 1 6.425 8.75l3.099-3.1a.775.775 0 0 1 1.096 0l3.099 3.1Z" />
                        </svg>
                      </span>
                      <span className=""> +3% </span>
                    </div>
                  </div>

                  <div className="px-4 pt-3 lg:px-8">
                    <h2 className="text-5xl font-medium">60</h2>
                  </div>
                </div>
              </div>

              <div className="grid gap-5">
                <div className="rounded-xl bg-secondary/10 p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b-[3px] border-secondary/20 pb-2">
                    <div className="relative flex items-center gap-2 before:absolute before:-bottom-[11px] before:left-0 before:h-[3px] before:w-[calc(100%+.5rem)] before:bg-secondary">
                      <span className="rounded-lg bg-accent-1 p-1 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 18 18"
                          className="h-5 w-5"
                        >
                          <path d="M12.461 6.23v4.155a.692.692 0 1 1-1.384 0V7.902L6.72 12.259a.691.691 0 0 1-1.183-.49.693.693 0 0 1 .203-.49l4.357-4.356H7.615a.692.692 0 1 1 0-1.385h4.154a.693.693 0 0 1 .692.693ZM18 9a9 9 0 1 1-9-9 9.01 9.01 0 0 1 9 9Zm-1.385 0A7.615 7.615 0 1 0 9 16.615 7.625 7.625 0 0 0 16.615 9Z" />
                        </svg>
                      </span>
                      <h6 className="text-base font-medium">Connection Rate</h6>
                    </div>

                    <div className="flex items-center gap-px text-sm font-medium text-primary">
                      <span className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 21 21"
                          className="h-4 w-4"
                        >
                          <path d="M10.072 0a10.072 10.072 0 1 0 10.072 10.072A10.082 10.082 0 0 0 10.072 0Zm0 18.594a8.522 8.522 0 1 1 8.522-8.522 8.532 8.532 0 0 1-8.522 8.522Zm3.647-9.845a.774.774 0 1 1-1.096 1.096l-1.776-1.777v5.877a.775.775 0 1 1-1.55 0V8.069L7.521 9.845A.775.775 0 1 1 6.425 8.75l3.099-3.1a.775.775 0 0 1 1.096 0l3.099 3.1Z" />
                        </svg>
                      </span>
                      <span className=""> +12% </span>
                    </div>
                  </div>

                  <div className="px-4 pt-4 lg:px-8">
                    <h2 className="text-5xl font-medium">70%</h2>
                  </div>
                </div>

                <div className="rounded-xl bg-secondary/10 p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b-[3px] border-secondary/20 pb-2">
                    <div className="relative flex items-center gap-2 before:absolute before:-bottom-[11px] before:left-0 before:h-[3px] before:w-[calc(100%+.5rem)] before:bg-secondary">
                      <span className="rounded-lg bg-accent-1 p-1 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          className="h-5 w-5"
                        >
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                          <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
                        </svg>
                      </span>
                      <h6 className="text-base font-medium">Conversion Rate</h6>
                    </div>

                    <div className="flex items-center gap-px text-sm font-medium text-primary">
                      <span className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 21 21"
                          className="h-4 w-4"
                        >
                          <path d="M10.072 0a10.072 10.072 0 1 0 10.072 10.072A10.082 10.082 0 0 0 10.072 0Zm0 18.594a8.522 8.522 0 1 1 8.522-8.522 8.532 8.532 0 0 1-8.522 8.522Zm3.647-9.845a.774.774 0 1 1-1.096 1.096l-1.776-1.777v5.877a.775.775 0 1 1-1.55 0V8.069L7.521 9.845A.775.775 0 1 1 6.425 8.75l3.099-3.1a.775.775 0 0 1 1.096 0l3.099 3.1Z" />
                        </svg>
                      </span>
                      <span className=""> +12% </span>
                    </div>
                  </div>

                  <div className="px-4 pt-4 lg:px-8">
                    <h2 className="text-5xl font-medium">80%</h2>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-secondary/10 p-5 2xl:col-span-2">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b-[3px] border-secondary/20 pb-2">
                  <div className="relative flex items-center gap-2 before:absolute before:-bottom-[11px] before:left-0 before:h-[3px] before:w-[calc(100%+.5rem)] before:bg-secondary">
                    <span className="rounded-lg bg-accent-1 p-1 text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 18"
                        className="h-5 w-5"
                      >
                        <path d="M15.604 4.38a.636.636 0 0 1-.857-.271 7.482 7.482 0 0 0-2.66-2.935.638.638 0 0 1-.028-1.057.636.636 0 0 1 .707-.019 8.86 8.86 0 0 1 3.11 3.426.636.636 0 0 1-.272.856ZM.636 4.452a.636.636 0 0 0 .564-.343 7.483 7.483 0 0 1 2.66-2.935.636.636 0 1 0-.679-1.076 8.86 8.86 0 0 0-3.11 3.426.636.636 0 0 0 .565.928Zm14.794 8.263a1.272 1.272 0 0 1-1.098 1.912h-3.244a3.18 3.18 0 0 1-6.232 0H1.613a1.272 1.272 0 0 1-1.097-1.912c.717-1.236 1.097-2.994 1.097-5.083a6.36 6.36 0 1 1 12.719 0c0 2.088.38 3.846 1.098 5.083Zm-5.66 1.912H6.174a1.908 1.908 0 0 0 3.596 0Zm4.562-1.272c-.846-1.452-1.272-3.377-1.272-5.723a5.088 5.088 0 1 0-10.175 0c0 2.346-.428 4.272-1.272 5.723h12.719Z" />
                      </svg>
                    </span>
                    <h6 className="text-base font-medium">Dial Outcomes</h6>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <div className="p-2 lg:p-4 min-w-500 ">
                    <div className="flex justify-between mt-6">
                      <div>
                        <h6 className="text-base font-medium">Campaign 1</h6>
                      </div>
                      <div className="flex gap-4">
                        <h6 className="text-base font-medium">
                          Callback: <span className="text-blue">4</span>
                        </h6>
                        <h6 className="text-base font-medium">
                          Email: <span className="text-blue">2</span>
                        </h6>
                        <h6 className="text-base font-medium">
                          Not Interested: <span className="text-blue">1</span>
                        </h6>
                      </div>
                    </div>

                    <div className="h-[2px] space-y-2 bg-secondary/15 my-3"></div>

                    <div className="flex justify-between">
                      <div>
                        <h6 className="text-base font-medium">Campaign 2</h6>
                      </div>
                      <div className="flex gap-4">
                        <h6 className="text-base font-medium">
                          Callback: <span className="text-blue">4</span>
                        </h6>
                        <h6 className="text-base font-medium">
                          Email: <span className="text-blue">2</span>
                        </h6>
                        <h6 className="text-base font-medium">
                          Not Interested: <span className="text-blue">1</span>
                        </h6>
                      </div>
                    </div>

                    <div className="h-[2px] space-y-2 bg-secondary/15 my-3"></div>

                    <div className="flex justify-between">
                      <div>
                        <h6 className="text-base font-medium">Campaign 3</h6>
                      </div>
                      <div className="flex gap-4">
                        <h6 className="text-base font-medium">
                          Callback: <span className="text-blue">4</span>
                        </h6>
                        <h6 className="text-base font-medium">
                          Email: <span className="text-blue">2</span>
                        </h6>
                        <h6 className="text-base font-medium">
                          Not Interested: <span className="text-blue">1</span>
                        </h6>
                      </div>
                    </div>

                    <div className="h-[2px] space-y-2 bg-secondary/15 my-3"></div>

                    <div className="flex justify-between">
                      <div>
                        <h6 className="text-base font-medium">Campaign 4</h6>
                      </div>
                      <div className="flex gap-4">
                        <h6 className="text-base font-medium">
                          Callback: <span className="text-blue">4</span>
                        </h6>
                        <h6 className="text-base font-medium">
                          Email: <span className="text-blue">2</span>
                        </h6>
                        <h6 className="text-base font-medium">
                          Not Interested: <span className="text-blue">1</span>
                        </h6>
                      </div>
                    </div>

                    <div className="h-[2px] space-y-2 bg-secondary/15 my-3"></div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-secondary/10 p-5">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b-[3px] border-secondary/20 pb-2">
                  <div className="relative flex items-center gap-2 before:absolute before:-bottom-[11px] before:left-0 before:h-[3px] before:w-[calc(100%+.5rem)] before:bg-secondary">
                    <span className="rounded-lg bg-accent-1 p-1 text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 256"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path d="M244.8 150.4a8 8 0 0 1-11.2-1.6A51.6 51.6 0 0 0 192 128a8 8 0 0 1-7.37-4.89 8 8 0 0 1 0-6.22A8 8 0 0 1 192 112a24 24 0 1 0-23.24-30 8 8 0 1 1-15.5-4A40 40 0 1 1 219 117.51a67.94 67.94 0 0 1 27.43 21.68 8 8 0 0 1-1.63 11.21ZM190.92 212a8 8 0 1 1-13.84 8 57 57 0 0 0-98.16 0 8 8 0 1 1-13.84-8 72.06 72.06 0 0 1 33.74-29.92 48 48 0 1 1 58.36 0A72.06 72.06 0 0 1 190.92 212ZM128 176a32 32 0 1 0-32-32 32 32 0 0 0 32 32Zm-56-56a8 8 0 0 0-8-8 24 24 0 1 1 23.24-30 8 8 0 1 0 15.5-4A40 40 0 1 0 37 117.51a67.94 67.94 0 0 0-27.4 21.68 8 8 0 1 0 12.8 9.61A51.6 51.6 0 0 1 64 128a8 8 0 0 0 8-8Z" />
                      </svg>
                    </span>
                    <h6 className="text-base font-medium">Reports</h6>
                  </div>
                </div>

                <div className="py-4 p-1 lg:p-1">
                  <div className="flex justify-between mt-6">
                    <div>
                      <h6 className="text-base font-medium ">
                        Marketing Report 1
                      </h6>
                    </div>
                    <div className="">
                      <button className="">
                        <svg
                          className="myhover"
                          width="20px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.25589 16C3.8899 15.0291 3 13.4422 3 11.6493C3 9.20008 4.8 6.9375 7.5 6.5C8.34694 4.48637 10.3514 3 12.6893 3C15.684 3 18.1317 5.32251 18.3 8.25C19.8893 8.94488 21 10.6503 21 12.4969C21 14.0582 20.206 15.4339 19 16.2417M12 21V11M12 21L9 18M12 21L15 18"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="h-[2px] space-y-2 bg-secondary/15 my-3"></div>

                  <div className="flex justify-between ">
                    <div>
                      <h6 className="text-base font-medium">
                        Marketing Report 2
                      </h6>
                    </div>
                    <div className="">
                      <button>
                        <svg
                          className="myhover"
                          width="20px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.25589 16C3.8899 15.0291 3 13.4422 3 11.6493C3 9.20008 4.8 6.9375 7.5 6.5C8.34694 4.48637 10.3514 3 12.6893 3C15.684 3 18.1317 5.32251 18.3 8.25C19.8893 8.94488 21 10.6503 21 12.4969C21 14.0582 20.206 15.4339 19 16.2417M12 21V11M12 21L9 18M12 21L15 18"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="h-[2px] space-y-2 bg-secondary/15 my-3"></div>

                  <div className="flex justify-between ">
                    <div>
                      <h6 className="text-base font-medium">
                        Marketing Report 3
                      </h6>
                    </div>
                    <div className="">
                      <button>
                        <svg
                          className="myhover"
                          width="20px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.25589 16C3.8899 15.0291 3 13.4422 3 11.6493C3 9.20008 4.8 6.9375 7.5 6.5C8.34694 4.48637 10.3514 3 12.6893 3C15.684 3 18.1317 5.32251 18.3 8.25C19.8893 8.94488 21 10.6503 21 12.4969C21 14.0582 20.206 15.4339 19 16.2417M12 21V11M12 21L9 18M12 21L15 18"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="h-[2px] space-y-2 bg-secondary/15 my-3"></div>

                  <div className="flex justify-between ">
                    <div>
                      <h6 className="text-base font-medium">
                        Marketing Report 4
                      </h6>
                    </div>
                    <div className="">
                      <button>
                        <svg
                          className="myhover"
                          width="20px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.25589 16C3.8899 15.0291 3 13.4422 3 11.6493C3 9.20008 4.8 6.9375 7.5 6.5C8.34694 4.48637 10.3514 3 12.6893 3C15.684 3 18.1317 5.32251 18.3 8.25C19.8893 8.94488 21 10.6503 21 12.4969C21 14.0582 20.206 15.4339 19 16.2417M12 21V11M12 21L9 18M12 21L15 18"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="h-[2px] space-y-2 bg-secondary/15 my-3"></div>
                </div>
              </div>

              <div className="rounded-xl bg-secondary/10 p-5">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b-[3px] border-secondary/20 pb-2">
                  <div className="relative flex items-center gap-2 before:absolute before:-bottom-[11px] before:left-0 before:h-[3px] before:w-[calc(100%+.5rem)] before:bg-secondary">
                    <span className="rounded-lg bg-accent-1 p-1 text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 256"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path d="M244.8 150.4a8 8 0 0 1-11.2-1.6A51.6 51.6 0 0 0 192 128a8 8 0 0 1-7.37-4.89 8 8 0 0 1 0-6.22A8 8 0 0 1 192 112a24 24 0 1 0-23.24-30 8 8 0 1 1-15.5-4A40 40 0 1 1 219 117.51a67.94 67.94 0 0 1 27.43 21.68 8 8 0 0 1-1.63 11.21ZM190.92 212a8 8 0 1 1-13.84 8 57 57 0 0 0-98.16 0 8 8 0 1 1-13.84-8 72.06 72.06 0 0 1 33.74-29.92 48 48 0 1 1 58.36 0A72.06 72.06 0 0 1 190.92 212ZM128 176a32 32 0 1 0-32-32 32 32 0 0 0 32 32Zm-56-56a8 8 0 0 0-8-8 24 24 0 1 1 23.24-30 8 8 0 1 0 15.5-4A40 40 0 1 0 37 117.51a67.94 67.94 0 0 0-27.4 21.68 8 8 0 1 0 12.8 9.61A51.6 51.6 0 0 1 64 128a8 8 0 0 0 8-8Z" />
                      </svg>
                    </span>
                    <h6 className="text-base font-medium">Recordings</h6>
                  </div>
                </div>

                <div className="py-4 p-1 lg:p-1">
                  <div className="flex justify-between mt-6">
                    <div>
                      <h6 className="text-base font-medium">Recording 1</h6>
                    </div>
                    <div className="">
                      <button>
                        <svg
                          className="myhover"
                          width="20px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.25589 16C3.8899 15.0291 3 13.4422 3 11.6493C3 9.20008 4.8 6.9375 7.5 6.5C8.34694 4.48637 10.3514 3 12.6893 3C15.684 3 18.1317 5.32251 18.3 8.25C19.8893 8.94488 21 10.6503 21 12.4969C21 14.0582 20.206 15.4339 19 16.2417M12 21V11M12 21L9 18M12 21L15 18"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="h-[2px] space-y-2 bg-secondary/15 my-3"></div>

                  <div className="flex justify-between ">
                    <div>
                      <h6 className="text-base font-medium">Recording 2</h6>
                    </div>
                    <div className="">
                      <button>
                        <svg
                          className="myhover"
                          width="20px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.25589 16C3.8899 15.0291 3 13.4422 3 11.6493C3 9.20008 4.8 6.9375 7.5 6.5C8.34694 4.48637 10.3514 3 12.6893 3C15.684 3 18.1317 5.32251 18.3 8.25C19.8893 8.94488 21 10.6503 21 12.4969C21 14.0582 20.206 15.4339 19 16.2417M12 21V11M12 21L9 18M12 21L15 18"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="h-[2px] space-y-2 bg-secondary/15 my-3"></div>

                  <div className="flex justify-between ">
                    <div>
                      <h6 className="text-base font-medium">Recording 3</h6>
                    </div>
                    <div className="">
                      <button>
                        <svg
                          className="myhover"
                          width="20px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.25589 16C3.8899 15.0291 3 13.4422 3 11.6493C3 9.20008 4.8 6.9375 7.5 6.5C8.34694 4.48637 10.3514 3 12.6893 3C15.684 3 18.1317 5.32251 18.3 8.25C19.8893 8.94488 21 10.6503 21 12.4969C21 14.0582 20.206 15.4339 19 16.2417M12 21V11M12 21L9 18M12 21L15 18"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="h-[2px] space-y-2 bg-secondary/15 my-3"></div>

                  <div className="flex justify-between">
                    <div>
                      <h6 className="text-base font-medium">Recording 4</h6>
                    </div>
                    <div className="">
                      <button>
                        <svg
                          width="20px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.25589 16C3.8899 15.0291 3 13.4422 3 11.6493C3 9.20008 4.8 6.9375 7.5 6.5C8.34694 4.48637 10.3514 3 12.6893 3C15.684 3 18.1317 5.32251 18.3 8.25C19.8893 8.94488 21 10.6503 21 12.4969C21 14.0582 20.206 15.4339 19 16.2417M12 21V11M12 21L9 18M12 21L15 18"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="h-[2px] space-y-2 bg-secondary/15 my-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="this-month-tab"
          className="hidden"
          role="tabpanel"
          aria-labelledby="this-month-tab-btn"
        >
          <div className="">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4">
              <div className="rounded-xl bg-secondary/10 p-5 2xl:col-span-2">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b-[3px] border-secondary/20 pb-2">
                  <div className="relative flex items-center gap-2 before:absolute before:-bottom-[11px] before:left-0 before:h-[3px] before:w-[calc(100%+.5rem)] before:bg-secondary">
                    <span className="rounded-lg bg-accent-1 p-1 text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 17 19"
                        className="h-5 w-5"
                      >
                        <path d="M15.349 1.395h-2.093V.698a.698.698 0 0 0-1.396 0v.697H4.885V.698a.698.698 0 1 0-1.396 0v.697H1.395A1.395 1.395 0 0 0 0 2.791v13.953a1.395 1.395 0 0 0 1.395 1.396H15.35a1.395 1.395 0 0 0 1.395-1.396V2.791a1.395 1.395 0 0 0-1.395-1.396ZM3.489 2.791v.697a.698.698 0 0 0 1.395 0v-.697h6.976v.697a.698.698 0 0 0 1.396 0v-.697h2.093v2.79H1.395v-2.79h2.093Zm11.86 13.953H1.395V6.977H15.35v9.767ZM6.977 9.07v5.581a.698.698 0 1 1-1.396 0v-4.453l-.385.194a.698.698 0 1 1-.624-1.249l1.395-.698a.698.698 0 0 1 1.01.625Zm5.159 2.655-1.67 2.229h1.395a.698.698 0 0 1 0 1.395H9.07a.697.697 0 0 1-.558-1.116l2.51-3.347a.697.697 0 1 0-1.161-.77.697.697 0 1 1-1.208-.697 2.093 2.093 0 1 1 3.483 2.306Z" />
                      </svg>
                    </span>
                    <h6 className="text-base font-medium">Appointments</h6>
                  </div>

                  <div className="flex items-center gap-px text-sm font-medium text-primary">
                    <span className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 21 21"
                        className="h-4 w-4"
                      >
                        <path d="M10.072 0a10.072 10.072 0 1 0 10.072 10.072A10.082 10.082 0 0 0 10.072 0Zm0 18.594a8.522 8.522 0 1 1 8.522-8.522 8.532 8.532 0 0 1-8.522 8.522Zm3.647-9.845a.774.774 0 1 1-1.096 1.096l-1.776-1.777v5.877a.775.775 0 1 1-1.55 0V8.069L7.521 9.845A.775.775 0 1 1 6.425 8.75l3.099-3.1a.775.775 0 0 1 1.096 0l3.099 3.1Z" />
                      </svg>
                    </span>
                    <span className=""> +5% </span>
                  </div>
                </div>

                <div className="px-4 py-6 lg:p-8">
                  <h2 className="text-5xl font-medium lg:text-8xl">150</h2>
                </div>

                <div className="">
                  <div className="mb-2 flex flex-wrap justify-between gap-4 text-sm font-medium text-primary">
                    <p className="font-semibold">Progress Tracker</p>
                    <p>
                      <span className="font-medium text-secondary">70%</span>
                      to goal
                    </p>
                  </div>

                  <div
                    className="flex h-5 w-full overflow-hidden bg-gradient"
                    role="progressbar"
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      data-aos="fade-right"
                      className="flex flex-col justify-center overflow-hidden whitespace-nowrap bg-[#f4b610] text-center text-xs text-white transition duration-500"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="grid gap-5">
                <div className="rounded-xl bg-secondary/10 p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b-[3px] border-secondary/20 pb-2">
                    <div className="relative flex items-center gap-2 before:absolute before:-bottom-[11px] before:left-0 before:h-[3px] before:w-[calc(100%+.5rem)] before:bg-secondary">
                      <span className="rounded-lg bg-accent-1 p-1 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          className="h-5 w-5"
                        >
                          <path d="M9.725 6.173a.636.636 0 0 1 0-.9l2.731-2.73h-1.645a.636.636 0 0 1 0-1.271h3.18a.636.636 0 0 1 .636.636v3.18a.636.636 0 0 1-1.272 0V3.443l-2.73 2.73a.636.636 0 0 1-.9 0Zm6.164 5.837a4.472 4.472 0 0 1-4.442 3.889C5.135 15.899 0 10.763 0 4.452A4.472 4.472 0 0 1 3.889.009 1.272 1.272 0 0 1 5.21.765l1.679 3.75v.009a1.272 1.272 0 0 1-.146 1.26L5.088 7.748c.595 1.21 1.86 2.464 3.086 3.06l1.935-1.645a1.267 1.267 0 0 1 1.266-.156l.01.005 3.745 1.678a1.272 1.272 0 0 1 .76 1.32Zm-1.262-.16h-.009l-3.736-1.673-1.936 1.647a1.272 1.272 0 0 1-1.31.135c-1.49-.72-2.974-2.192-3.694-3.665a1.272 1.272 0 0 1 .125-1.31L5.724 5.02l-1.67-3.736v-.01a3.196 3.196 0 0 0-2.782 3.178 10.186 10.186 0 0 0 10.175 10.175 3.196 3.196 0 0 0 3.18-2.777Z" />
                        </svg>
                      </span>
                      <h6 className="text-base font-medium">Dials</h6>
                    </div>

                    <div className="flex items-center gap-px text-sm font-medium text-primary">
                      <span className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 21 21"
                          className="h-4 w-4"
                        >
                          <path d="M10.072 0a10.072 10.072 0 1 0 10.072 10.072A10.082 10.082 0 0 0 10.072 0Zm0 18.594a8.522 8.522 0 1 1 8.522-8.522 8.532 8.532 0 0 1-8.522 8.522Zm3.647-9.845a.774.774 0 1 1-1.096 1.096l-1.776-1.777v5.877a.775.775 0 1 1-1.55 0V8.069L7.521 9.845A.775.775 0 1 1 6.425 8.75l3.099-3.1a.775.775 0 0 1 1.096 0l3.099 3.1Z" />
                        </svg>
                      </span>
                      <span className=""> +7% </span>
                    </div>
                  </div>

                  <div className="px-4 pt-3 lg:px-8">
                    <h2 className="text-5xl font-medium">200</h2>
                  </div>
                </div>

                <div className="rounded-xl bg-secondary/10 p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b-[3px] border-secondary/20 pb-2">
                    <div className="relative flex items-center gap-2 before:absolute before:-bottom-[11px] before:left-0 before:h-[3px] before:w-[calc(100%+.5rem)] before:bg-secondary">
                      <span className="rounded-lg bg-accent-1 p-1 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          className="h-5 w-5"
                        >
                          <path d="M15.133 10.689 11.387 9.01l-.01-.005a1.272 1.272 0 0 0-1.265.156l-1.935 1.65C6.952 10.215 5.686 8.96 5.09 7.75l1.652-1.965a1.272 1.272 0 0 0 .15-1.258v-.01L5.21.768a1.272 1.272 0 0 0-1.32-.76A4.472 4.472 0 0 0 0 4.452c0 6.311 5.135 11.447 11.447 11.447a4.473 4.473 0 0 0 4.442-3.89 1.272 1.272 0 0 0-.756-1.32Zm-3.686 3.938A10.187 10.187 0 0 1 1.272 4.452a3.196 3.196 0 0 1 2.772-3.18v.01l1.67 3.736L4.07 6.984a1.272 1.272 0 0 0-.125 1.31c.72 1.473 2.205 2.945 3.694 3.665a1.274 1.274 0 0 0 1.252-.09.544.544 0 0 0 .058-.046l1.933-1.648 3.736 1.674h.009a3.196 3.196 0 0 1-3.18 2.778ZM8.903 3.816a.636.636 0 0 1 .636-.636h1.908V1.272a.636.636 0 0 1 1.272 0V3.18h1.908a.636.636 0 1 1 0 1.272h-1.908v1.907a.636.636 0 1 1-1.272 0V4.452H9.54a.636.636 0 0 1-.636-.636Z" />
                        </svg>
                      </span>
                      <h6 className="text-base font-medium">Reaches</h6>
                    </div>

                    <div className="flex items-center gap-px text-sm font-medium text-primary">
                      <span className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 21 21"
                          className="h-4 w-4"
                        >
                          <path d="M10.072 0a10.072 10.072 0 1 0 10.072 10.072A10.082 10.082 0 0 0 10.072 0Zm0 18.594a8.522 8.522 0 1 1 8.522-8.522 8.532 8.532 0 0 1-8.522 8.522Zm3.647-9.845a.774.774 0 1 1-1.096 1.096l-1.776-1.777v5.877a.775.775 0 1 1-1.55 0V8.069L7.521 9.845A.775.775 0 1 1 6.425 8.75l3.099-3.1a.775.775 0 0 1 1.096 0l3.099 3.1Z" />
                        </svg>
                      </span>
                      <span className=""> +3% </span>
                    </div>
                  </div>

                  <div className="px-4 pt-3 lg:px-8">
                    <h2 className="text-5xl font-medium">130</h2>
                  </div>
                </div>
              </div>

              <div className="grid gap-5">
                <div className="rounded-xl bg-secondary/10 p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b-[3px] border-secondary/20 pb-2">
                    <div className="relative flex items-center gap-2 before:absolute before:-bottom-[11px] before:left-0 before:h-[3px] before:w-[calc(100%+.5rem)] before:bg-secondary">
                      <span className="rounded-lg bg-accent-1 p-1 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 18 18"
                          className="h-5 w-5"
                        >
                          <path d="M12.461 6.23v4.155a.692.692 0 1 1-1.384 0V7.902L6.72 12.259a.691.691 0 0 1-1.183-.49.693.693 0 0 1 .203-.49l4.357-4.356H7.615a.692.692 0 1 1 0-1.385h4.154a.693.693 0 0 1 .692.693ZM18 9a9 9 0 1 1-9-9 9.01 9.01 0 0 1 9 9Zm-1.385 0A7.615 7.615 0 1 0 9 16.615 7.625 7.625 0 0 0 16.615 9Z" />
                        </svg>
                      </span>
                      <h6 className="text-base font-medium">Connection Rate</h6>
                    </div>

                    <div className="flex items-center gap-px text-sm font-medium text-primary">
                      <span className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 21 21"
                          className="h-4 w-4"
                        >
                          <path d="M10.072 0a10.072 10.072 0 1 0 10.072 10.072A10.082 10.082 0 0 0 10.072 0Zm0 18.594a8.522 8.522 0 1 1 8.522-8.522 8.532 8.532 0 0 1-8.522 8.522Zm3.647-9.845a.774.774 0 1 1-1.096 1.096l-1.776-1.777v5.877a.775.775 0 1 1-1.55 0V8.069L7.521 9.845A.775.775 0 1 1 6.425 8.75l3.099-3.1a.775.775 0 0 1 1.096 0l3.099 3.1Z" />
                        </svg>
                      </span>
                      <span className=""> +12% </span>
                    </div>
                  </div>

                  <div className="px-4 pt-4 lg:px-8">
                    <h2 className="text-5xl font-medium">80%</h2>
                  </div>
                </div>

                <div className="rounded-xl bg-secondary/10 p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b-[3px] border-secondary/20 pb-2">
                    <div className="relative flex items-center gap-2 before:absolute before:-bottom-[11px] before:left-0 before:h-[3px] before:w-[calc(100%+.5rem)] before:bg-secondary">
                      <span className="rounded-lg bg-accent-1 p-1 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          className="h-5 w-5"
                        >
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                          <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
                        </svg>
                      </span>
                      <h6 className="text-base font-medium">Conversion Rate</h6>
                    </div>

                    <div className="flex items-center gap-px text-sm font-medium text-primary">
                      <span className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 21 21"
                          className="h-4 w-4"
                        >
                          <path d="M10.072 0a10.072 10.072 0 1 0 10.072 10.072A10.082 10.082 0 0 0 10.072 0Zm0 18.594a8.522 8.522 0 1 1 8.522-8.522 8.532 8.532 0 0 1-8.522 8.522Zm3.647-9.845a.774.774 0 1 1-1.096 1.096l-1.776-1.777v5.877a.775.775 0 1 1-1.55 0V8.069L7.521 9.845A.775.775 0 1 1 6.425 8.75l3.099-3.1a.775.775 0 0 1 1.096 0l3.099 3.1Z" />
                        </svg>
                      </span>
                      <span className=""> +12% </span>
                    </div>
                  </div>

                  <div className="px-4 pt-4 lg:px-8">
                    <h2 className="text-5xl font-medium">75%</h2>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-secondary/10 p-5 2xl:col-span-2">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b-[3px] border-secondary/20 pb-2">
                  <div className="relative flex items-center gap-2 before:absolute before:-bottom-[11px] before:left-0 before:h-[3px] before:w-[calc(100%+.5rem)] before:bg-secondary">
                    <span className="rounded-lg bg-accent-1 p-1 text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 18"
                        className="h-5 w-5"
                      >
                        <path d="M15.604 4.38a.636.636 0 0 1-.857-.271 7.482 7.482 0 0 0-2.66-2.935.638.638 0 0 1-.028-1.057.636.636 0 0 1 .707-.019 8.86 8.86 0 0 1 3.11 3.426.636.636 0 0 1-.272.856ZM.636 4.452a.636.636 0 0 0 .564-.343 7.483 7.483 0 0 1 2.66-2.935.636.636 0 1 0-.679-1.076 8.86 8.86 0 0 0-3.11 3.426.636.636 0 0 0 .565.928Zm14.794 8.263a1.272 1.272 0 0 1-1.098 1.912h-3.244a3.18 3.18 0 0 1-6.232 0H1.613a1.272 1.272 0 0 1-1.097-1.912c.717-1.236 1.097-2.994 1.097-5.083a6.36 6.36 0 1 1 12.719 0c0 2.088.38 3.846 1.098 5.083Zm-5.66 1.912H6.174a1.908 1.908 0 0 0 3.596 0Zm4.562-1.272c-.846-1.452-1.272-3.377-1.272-5.723a5.088 5.088 0 1 0-10.175 0c0 2.346-.428 4.272-1.272 5.723h12.719Z" />
                      </svg>
                    </span>
                    <h6 className="text-base font-medium">Dial Outcomes</h6>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <div className="p-2 lg:p-4 min-w-500 ">
                    <div className="flex justify-between mt-6">
                      <div>
                        <h6 className="text-base font-medium">Campaign 1</h6>
                      </div>
                      <div className="flex gap-4">
                        <h6 className="text-base font-medium">
                          Callback: <span className="text-blue">4</span>
                        </h6>
                        <h6 className="text-base font-medium">
                          Email: <span className="text-blue">2</span>
                        </h6>
                        <h6 className="text-base font-medium">
                          Not Interested: <span className="text-blue">1</span>
                        </h6>
                      </div>
                    </div>

                    <div className="h-[2px] space-y-2 bg-secondary/15 my-3"></div>

                    <div className="flex justify-between">
                      <div>
                        <h6 className="text-base font-medium">Campaign 2</h6>
                      </div>
                      <div className="flex gap-4">
                        <h6 className="text-base font-medium">
                          Callback: <span className="text-blue">4</span>
                        </h6>
                        <h6 className="text-base font-medium">
                          Email: <span className="text-blue">2</span>
                        </h6>
                        <h6 className="text-base font-medium">
                          Not Interested: <span className="text-blue">1</span>
                        </h6>
                      </div>
                    </div>

                    <div className="h-[2px] space-y-2 bg-secondary/15 my-3"></div>

                    <div className="flex justify-between">
                      <div>
                        <h6 className="text-base font-medium">Campaign 3</h6>
                      </div>
                      <div className="flex gap-4">
                        <h6 className="text-base font-medium">
                          Callback: <span className="text-blue">4</span>
                        </h6>
                        <h6 className="text-base font-medium">
                          Email: <span className="text-blue">2</span>
                        </h6>
                        <h6 className="text-base font-medium">
                          Not Interested: <span className="text-blue">1</span>
                        </h6>
                      </div>
                    </div>

                    <div className="h-[2px] space-y-2 bg-secondary/15 my-3"></div>

                    <div className="flex justify-between">
                      <div>
                        <h6 className="text-base font-medium">Campaign 4</h6>
                      </div>
                      <div className="flex gap-4">
                        <h6 className="text-base font-medium">
                          Callback: <span className="text-blue">4</span>
                        </h6>
                        <h6 className="text-base font-medium">
                          Email: <span className="text-blue">2</span>
                        </h6>
                        <h6 className="text-base font-medium">
                          Not Interested: <span className="text-blue">1</span>
                        </h6>
                      </div>
                    </div>

                    <div className="h-[2px] space-y-2 bg-secondary/15 my-3"></div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-secondary/10 p-5">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b-[3px] border-secondary/20 pb-2">
                  <div className="relative flex items-center gap-2 before:absolute before:-bottom-[11px] before:left-0 before:h-[3px] before:w-[calc(100%+.5rem)] before:bg-secondary">
                    <span className="rounded-lg bg-accent-1 p-1 text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 256"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path d="M244.8 150.4a8 8 0 0 1-11.2-1.6A51.6 51.6 0 0 0 192 128a8 8 0 0 1-7.37-4.89 8 8 0 0 1 0-6.22A8 8 0 0 1 192 112a24 24 0 1 0-23.24-30 8 8 0 1 1-15.5-4A40 40 0 1 1 219 117.51a67.94 67.94 0 0 1 27.43 21.68 8 8 0 0 1-1.63 11.21ZM190.92 212a8 8 0 1 1-13.84 8 57 57 0 0 0-98.16 0 8 8 0 1 1-13.84-8 72.06 72.06 0 0 1 33.74-29.92 48 48 0 1 1 58.36 0A72.06 72.06 0 0 1 190.92 212ZM128 176a32 32 0 1 0-32-32 32 32 0 0 0 32 32Zm-56-56a8 8 0 0 0-8-8 24 24 0 1 1 23.24-30 8 8 0 1 0 15.5-4A40 40 0 1 0 37 117.51a67.94 67.94 0 0 0-27.4 21.68 8 8 0 1 0 12.8 9.61A51.6 51.6 0 0 1 64 128a8 8 0 0 0 8-8Z" />
                      </svg>
                    </span>
                    <h6 className="text-base font-medium">Reports</h6>
                  </div>
                </div>

                <div className="py-4 p-1 lg:p-1">
                  <div className="flex justify-between mt-6">
                    <div>
                      <h6 className="text-base font-medium ">
                        Marketing Report 1
                      </h6>
                    </div>
                    <div className="">
                      <button className="">
                        <svg
                          className="myhover"
                          width="20px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.25589 16C3.8899 15.0291 3 13.4422 3 11.6493C3 9.20008 4.8 6.9375 7.5 6.5C8.34694 4.48637 10.3514 3 12.6893 3C15.684 3 18.1317 5.32251 18.3 8.25C19.8893 8.94488 21 10.6503 21 12.4969C21 14.0582 20.206 15.4339 19 16.2417M12 21V11M12 21L9 18M12 21L15 18"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="h-[2px] space-y-2 bg-secondary/15 my-3"></div>

                  <div className="flex justify-between ">
                    <div>
                      <h6 className="text-base font-medium">
                        Marketing Report 2
                      </h6>
                    </div>
                    <div className="">
                      <button>
                        <svg
                          className="myhover"
                          width="20px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.25589 16C3.8899 15.0291 3 13.4422 3 11.6493C3 9.20008 4.8 6.9375 7.5 6.5C8.34694 4.48637 10.3514 3 12.6893 3C15.684 3 18.1317 5.32251 18.3 8.25C19.8893 8.94488 21 10.6503 21 12.4969C21 14.0582 20.206 15.4339 19 16.2417M12 21V11M12 21L9 18M12 21L15 18"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="h-[2px] space-y-2 bg-secondary/15 my-3"></div>

                  <div className="flex justify-between ">
                    <div>
                      <h6 className="text-base font-medium">
                        Marketing Report 3
                      </h6>
                    </div>
                    <div className="">
                      <button>
                        <svg
                          className="myhover"
                          width="20px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.25589 16C3.8899 15.0291 3 13.4422 3 11.6493C3 9.20008 4.8 6.9375 7.5 6.5C8.34694 4.48637 10.3514 3 12.6893 3C15.684 3 18.1317 5.32251 18.3 8.25C19.8893 8.94488 21 10.6503 21 12.4969C21 14.0582 20.206 15.4339 19 16.2417M12 21V11M12 21L9 18M12 21L15 18"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="h-[2px] space-y-2 bg-secondary/15 my-3"></div>

                  <div className="flex justify-between ">
                    <div>
                      <h6 className="text-base font-medium">
                        Marketing Report 4
                      </h6>
                    </div>
                    <div className="">
                      <button>
                        <svg
                          className="myhover"
                          width="20px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.25589 16C3.8899 15.0291 3 13.4422 3 11.6493C3 9.20008 4.8 6.9375 7.5 6.5C8.34694 4.48637 10.3514 3 12.6893 3C15.684 3 18.1317 5.32251 18.3 8.25C19.8893 8.94488 21 10.6503 21 12.4969C21 14.0582 20.206 15.4339 19 16.2417M12 21V11M12 21L9 18M12 21L15 18"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="h-[2px] space-y-2 bg-secondary/15 my-3"></div>
                </div>
              </div>

              <div className="rounded-xl bg-secondary/10 p-5">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b-[3px] border-secondary/20 pb-2">
                  <div className="relative flex items-center gap-2 before:absolute before:-bottom-[11px] before:left-0 before:h-[3px] before:w-[calc(100%+.5rem)] before:bg-secondary">
                    <span className="rounded-lg bg-accent-1 p-1 text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 256"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path d="M244.8 150.4a8 8 0 0 1-11.2-1.6A51.6 51.6 0 0 0 192 128a8 8 0 0 1-7.37-4.89 8 8 0 0 1 0-6.22A8 8 0 0 1 192 112a24 24 0 1 0-23.24-30 8 8 0 1 1-15.5-4A40 40 0 1 1 219 117.51a67.94 67.94 0 0 1 27.43 21.68 8 8 0 0 1-1.63 11.21ZM190.92 212a8 8 0 1 1-13.84 8 57 57 0 0 0-98.16 0 8 8 0 1 1-13.84-8 72.06 72.06 0 0 1 33.74-29.92 48 48 0 1 1 58.36 0A72.06 72.06 0 0 1 190.92 212ZM128 176a32 32 0 1 0-32-32 32 32 0 0 0 32 32Zm-56-56a8 8 0 0 0-8-8 24 24 0 1 1 23.24-30 8 8 0 1 0 15.5-4A40 40 0 1 0 37 117.51a67.94 67.94 0 0 0-27.4 21.68 8 8 0 1 0 12.8 9.61A51.6 51.6 0 0 1 64 128a8 8 0 0 0 8-8Z" />
                      </svg>
                    </span>
                    <h6 className="text-base font-medium">Recordings</h6>
                  </div>
                </div>

                <div className="py-4 p-1 lg:p-1">
                  <div className="flex justify-between mt-6">
                    <div>
                      <h6 className="text-base font-medium">Recording 1</h6>
                    </div>
                    <div className="">
                      <button>
                        <svg
                          className="myhover"
                          width="20px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.25589 16C3.8899 15.0291 3 13.4422 3 11.6493C3 9.20008 4.8 6.9375 7.5 6.5C8.34694 4.48637 10.3514 3 12.6893 3C15.684 3 18.1317 5.32251 18.3 8.25C19.8893 8.94488 21 10.6503 21 12.4969C21 14.0582 20.206 15.4339 19 16.2417M12 21V11M12 21L9 18M12 21L15 18"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="h-[2px] space-y-2 bg-secondary/15 my-3"></div>

                  <div className="flex justify-between ">
                    <div>
                      <h6 className="text-base font-medium">Recording 2</h6>
                    </div>
                    <div className="">
                      <button>
                        <svg
                          className="myhover"
                          width="20px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.25589 16C3.8899 15.0291 3 13.4422 3 11.6493C3 9.20008 4.8 6.9375 7.5 6.5C8.34694 4.48637 10.3514 3 12.6893 3C15.684 3 18.1317 5.32251 18.3 8.25C19.8893 8.94488 21 10.6503 21 12.4969C21 14.0582 20.206 15.4339 19 16.2417M12 21V11M12 21L9 18M12 21L15 18"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="h-[2px] space-y-2 bg-secondary/15 my-3"></div>

                  <div className="flex justify-between ">
                    <div>
                      <h6 className="text-base font-medium">Recording 3</h6>
                    </div>
                    <div className="">
                      <button>
                        <svg
                          className="myhover"
                          width="20px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.25589 16C3.8899 15.0291 3 13.4422 3 11.6493C3 9.20008 4.8 6.9375 7.5 6.5C8.34694 4.48637 10.3514 3 12.6893 3C15.684 3 18.1317 5.32251 18.3 8.25C19.8893 8.94488 21 10.6503 21 12.4969C21 14.0582 20.206 15.4339 19 16.2417M12 21V11M12 21L9 18M12 21L15 18"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="h-[2px] space-y-2 bg-secondary/15 my-3"></div>

                  <div className="flex justify-between">
                    <div>
                      <h6 className="text-base font-medium">Recording 4</h6>
                    </div>
                    <div className="">
                      <button>
                        <svg
                          width="20px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.25589 16C3.8899 15.0291 3 13.4422 3 11.6493C3 9.20008 4.8 6.9375 7.5 6.5C8.34694 4.48637 10.3514 3 12.6893 3C15.684 3 18.1317 5.32251 18.3 8.25C19.8893 8.94488 21 10.6503 21 12.4969C21 14.0582 20.206 15.4339 19 16.2417M12 21V11M12 21L9 18M12 21L15 18"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="h-[2px] space-y-2 bg-secondary/15 my-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
