import React from "react";

const CopilotPanel = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7f5f9] via-[#f7f5f9] to-[#d9d6e8] flex justify-center items-center font-inter">
      <div className="w-full max-w-2xl h-[100vh] bg-white bg-opacity-70 rounded-xl shadow-md flex flex-col">
        <header className="flex items-center justify-between border-b border-gray-300 px-4 py-3 rounded-t-xl bg-white bg-opacity-90">
          <nav className="flex space-x-6 text-sm font-semibold text-gray-700">
            <button className="flex items-center space-x-1 text-[#5a5fc4] border-b-2 border-[#5a5fc4] pb-1">
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="#5a5fc4"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 3h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zM7 8h10v2H7V8zm0 4h10v2H7v-2z" />
              </svg>
              <span>AI Copilot</span>
            </button>
            <button className="text-gray-700 font-semibold">Details</button>
          </nav>
          <button aria-label="Copy" className="p-1 rounded hover:bg-gray-200">
            <svg
              aria-hidden="true"
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <rect height="13" rx="2" ry="2" width="13" x="9" y="9" />
              <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
            </svg>
          </button>
        </header>

        <main className="flex-1 overflow-y-auto px-4 py-4 space-y-6 bg-white bg-opacity-70 scrollbar-hide">
          <section className="flex items-start space-x-3">
            <img
              src="https://storage.googleapis.com/a1aa/image/d43b32e2-0f3a-4dcd-f0d9-7026308c02ab.jpg"
              alt="User avatar"
              className="w-8 h-8 rounded-full object-cover mt-1"
            />
            <div>
              <p className="font-semibold text-gray-900 mb-1">You</p>
              <p className="text-gray-600 text-sm">How do I get a refund?</p>
            </div>
          </section>

          <section className="flex items-start space-x-3">
            <img
              src="https://storage.googleapis.com/a1aa/image/e62fa492-6100-4655-f62b-ce5b3151e033.jpg"
              alt="Fin avatar"
              className="w-8 h-8 rounded object-cover mt-1"
            />
            <div className="bg-gradient-to-r from-[#d9c7e9] to-[#e9d9f7] rounded-xl p-4 text-gray-900 text-sm max-w-[320px]">
              <p className="mb-3 leading-relaxed">
                We understand that sometimes a purchase may not meet your
                expectations, and you may need to request a refund.
                <span className="inline-block bg-[#1e40af] text-white text-xs font-semibold rounded-full w-5 h-5 text-center align-middle ml-1 select-none">
                  1
                </span>
              </p>
              <p className="mb-3 leading-relaxed">
                To assist you with your refund request, could you please provide
                your order ID and proof of purchase.
              </p>
              <p className="mb-3 leading-relaxed whitespace-pre-line">
                Please note: We can only refund orders placed within the last 60
                days, and your item must meet our requirements for condition to
                be returned. Please check when you placed your order before
                proceeding.
              </p>
              <p className="mb-3 leading-relaxed">
                Once I’ve checked these details, if everything looks OK, I will
                send a returns QR code which you can use to post the item back
                to us. Your refund will be automatically issued once you put it
                in the post.
                <span className="inline-block bg-[#1e40af] text-white text-xs font-semibold rounded-full w-5 h-5 text-center align-middle ml-1 select-none">
                  2
                </span>
              </p>
              <button
                type="button"
                className="w-full mt-1 bg-white border border-gray-300 rounded-md py-2 px-3 flex items-center justify-center space-x-2 text-gray-900 font-semibold hover:bg-gray-50"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 4h6M16 4v6M16 4l-8 8-4-4-6 6" />
                </svg>
                <span>Add to composer</span>
                <svg
                  className="w-4 h-4 ml-auto"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </section>

          <section className="text-gray-700 text-sm space-y-2">
            <p>5 relevant sources found</p>
            <ul className="space-y-1">
              <li className="flex items-center space-x-2">
                <span className="w-5 h-5 flex justify-center items-center rounded-full bg-gray-200 text-gray-700 text-xs font-bold select-none">
                  <i className="fas fa-book-open"></i>
                </span>
                <span>Getting a refund</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-5 h-5 flex justify-center items-center rounded-full bg-blue-200 text-blue-700 text-xs font-bold select-none">
                  <i className="fas fa-comment-alt"></i>
                </span>
                <span>Refund for an order placed by mistake</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-5 h-5 flex justify-center items-center rounded-full bg-blue-200 text-blue-700 text-xs font-bold select-none">
                  <i className="fas fa-comment-alt"></i>
                </span>
                <span>Refund for an unwanted gift</span>
              </li>
            </ul>
            <p className="font-semibold cursor-pointer select-none">
              See all <span aria-hidden="true">→</span>
            </p>
          </section>
        </main>

        <footer className="p-4 bg-white bg-opacity-90 rounded-b-xl">
          <input
            type="text"
            placeholder="Ask a follow up question..."
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5a5fc4] focus:border-transparent"
            aria-label="Ask a follow up question"
          />
        </footer>
      </div>
    </div>
  );
};

export default CopilotPanel;
