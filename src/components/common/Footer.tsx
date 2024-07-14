export default function Footer() {
  return (
    <footer className="bg-white">
      <hr className="  border-gray-200 sm:mx-auto lg:my-2" />
      <div className="flex justify-center py-10 max-sm:py-2 ">
        <div className="flex mt-4 items-center sm:justify-center sm:mt-0 ">
          <a href="#" className="text-gray-500 hover:text-gray-900 ">
            <svg
              className="w-5 h-5 max-sm:w-4 max-sm:h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 8 19"
            >
              <path
                fillRule="evenodd"
                d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Facebook page</span>
          </a>

          <a href="#" className="text-gray-500 pt-1 hover:text-gray-900  ms-5">
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              className="bi w-5 h-5 max-sm:w-4 max-sm:h-4 bi-linkedin"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
              />
            </svg>

            <span className="sr-only">GitHub account</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
