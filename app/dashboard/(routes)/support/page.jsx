"use client";

import { useState } from "react";
import {
  LifebuoyIcon,
  EnvelopeIcon,
  ChatBubbleBottomCenterTextIcon,
  ClockIcon,
  CheckCircleIcon,
  XCircleIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import { ShieldCheckIcon, ArrowPathIcon } from "@heroicons/react/24/solid";

const SupportPage = () => {
  const [activeTab, setActiveTab] = useState("help");
  const [searchQuery, setSearchQuery] = useState("");

  // Sample data
  const faqs = [
    {
      id: 1,
      question: "How do I reset my password?",
      answer:
        "Go to Settings > Account > Password Reset. We'll send a link to your email.",
      category: "Account",
    },
    {
      id: 2,
      question: "Where can I download invoices?",
      answer:
        "Visit Billing > Invoice History. All invoices are available for 5 years.",
      category: "Billing",
    },
  ];

  const tickets = [
    {
      id: "TKT-2023-156",
      subject: "Login issues",
      status: "open",
      date: "2 hours ago",
      agent: "Sarah K.",
    },
    {
      id: "TKT-2023-142",
      subject: "Payment failed",
      status: "resolved",
      date: "3 days ago",
      agent: "Michael T.",
    },
  ];

  return (
    <div className="h-full flex flex-col bg-base-100">
      <div className="flex-1 scroller w-full overflow-y-hidden md:overflow-y-scroll pb-12 md:pb-0">
        {/* Main Content */}
        <main className="container mx-auto p-4 md:p-6">
          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="card bg-base-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="card-body items-center text-center">
                <ChatBubbleBottomCenterTextIcon className="h-10 w-10 text-primary" />
                <h3 className="card-title">Live Chat</h3>
                <p>Talk with our support team now</p>
                <button className="btn btn-primary mt-2">
                  Start Chat <ChevronRightIcon className="h-4 w-4" />
                </button>
                <div className="badge badge-success gap-1 mt-2">
                  <div className="h-2 w-2 rounded-full bg-current"></div>
                  Online now
                </div>
              </div>
            </div>

            <div className="card bg-base-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="card-body items-center text-center">
                <EnvelopeIcon className="h-10 w-10 text-c2" />
                <h3 className="card-title">Email Us</h3>
                <p>Get a response within 24 hours</p>
                <button className="btn bg-c2 mt-2 text-white">
                  Contact <ChevronRightIcon className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="card bg-base-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="card-body items-center text-center">
                <ShieldCheckIcon className="h-10 w-10 text-accent" />
                <h3 className="card-title">Help Center</h3>
                <p>Browse our knowledge base</p>
                <button className="btn btn-accent text-white mt-2">
                  Explore <ChevronRightIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="relative mb-8">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="input input-bordered w-full pl-10"
              placeholder="Search help articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Tabs */}
          <div className="tabs tabs-boxed bg-base-200 mb-6">
            <button
              className={`tab ${activeTab === "help" ? "tab-active" : ""}`}
              onClick={() => setActiveTab("help")}
            >
              Help Center
            </button>
            <button
              className={`tab ${activeTab === "tickets" ? "tab-active" : ""}`}
              onClick={() => setActiveTab("tickets")}
            >
              My Tickets
            </button>
            <button
              className={`tab ${activeTab === "contact" ? "tab-active" : ""}`}
              onClick={() => setActiveTab("contact")}
            >
              Contact Us
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === "help" && (
            <div>
              <h2 className="text-xl font-semibold mb-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div
                    key={faq.id}
                    className="collapse collapse-plus bg-base-200"
                  >
                    <input type="radio" name="faq-accordion" />
                    <div className="collapse-title font-medium">
                      {faq.question}
                      <span className="badge badge-sm badge-ghost ml-2">
                        {faq.category}
                      </span>
                    </div>
                    <div className="collapse-content">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-xl font-semibold mt-8 mb-4">
                Popular Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="card bg-base-200 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="card-body">
                      <h3 className="card-title">Getting Started Guide</h3>
                      <p>
                        Learn how to set up your account and explore features
                      </p>
                      <button className="btn btn-ghost btn-sm self-start px-0">
                        Read article <ChevronRightIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "tickets" && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">My Support Tickets</h2>
                <button className="btn bg-c1 text-white btn-sm">
                  <EnvelopeIcon className="h-4 w-4 mr-1" />
                  New Ticket
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Ticket ID</th>
                      <th>Subject</th>
                      <th>Status</th>
                      <th>Date</th>
                      <th>Agent</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tickets.map((ticket) => (
                      <tr key={ticket.id}>
                        <td>{ticket.id}</td>
                        <td>{ticket.subject}</td>
                        <td>
                          {ticket.status === "open" ? (
                            <span className="badge badge-warning gap-1">
                              <ClockIcon className="h-3 w-3" />
                              Open
                            </span>
                          ) : (
                            <span className="badge badge-success gap-1">
                              <CheckCircleIcon className="h-3 w-3" />
                              Resolved
                            </span>
                          )}
                        </td>
                        <td>{ticket.date}</td>
                        <td>{ticket.agent}</td>
                        <td>
                          <button className="btn btn-ghost btn-xs">View</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "contact" && (
            <div className="card bg-base-200">
              <div className="card-body">
                <h2 className="card-title">Contact Our Team</h2>
                <form className="space-y-4">
                  <div className="form-control ">
                    <label className="label mr-3">
                      <span className="label-text">Subject</span>
                    </label>
                    <input type="text" className="input input-bordered" />
                  </div>
                  <div className="form-control">
                    <label className="label mr-3">
                      <span className="label-text">Description</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-32"></textarea>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer justify-start gap-2">
                      <input type="checkbox" className="checkbox checkbox-sm" />
                      <span className="label-text">This is urgent</span>
                    </label>
                  </div>
                  <div className="flex justify-end">
                    <button className="btn bg-c1 text-white">
                      <EnvelopeIcon className="h-5 w-5 mr-2" />
                      Submit Ticket
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="bg-base-200 p-6 mt-12">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center gap-2 mb-4 md:mb-0">
                <ShieldCheckIcon className="h-6 w-6 text-primary" />
                <span className="font-semibold">24/7 Support Available</span>
              </div>
              <div className="flex gap-4">
                <button className="btn btn-ghost btn-sm">Privacy Policy</button>
                <button className="btn btn-ghost btn-sm">
                  Terms of Service
                </button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default SupportPage;
