import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-zinc-50 text-center text-surface dark:bg-white-700 dark:text-white bg-green-600">

      <div className="container  mx-auto px-6 py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center sm:text-left">
          <div className="mb-6">
            <h5 className="mb-2.5 font-medium uppercase">Company</h5>

            <ul className="list-none mb-0">
              <li>
                <a href="#!" className="text-surface hover:underline dark:text-white">About</a>
              </li>
              <li>
                <a href="#!" className="text-surface hover:underline dark:text-white">Careers</a>
              </li>
              <li>
                <a href="#!" className="text-surface hover:underline dark:text-white">Press</a>
              </li>
              <li>
                <a href="#!" className="text-surface hover:underline dark:text-white">Blog</a>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h5 className="mb-2.5 font-medium uppercase">Support</h5>

            <ul className="list-none mb-0">
              <li>
                <a href="#!" className="text-surface hover:underline dark:text-white">Contact</a>
              </li>
              <li>
                <a href="#!" className="text-surface hover:underline dark:text-white">Help Center</a>
              </li>
              <li>
                <a href="#!" className="text-surface hover:underline dark:text-white">FAQ</a>
              </li>
              <li>
                <a href="#!" className="text-surface hover:underline dark:text-white">Accessibility</a>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h5 className="mb-2.5 font-medium uppercase">Legal</h5>

            <ul className="list-none mb-0">
              <li>
                <a href="#!" className="text-surface hover:underline dark:text-white">Privacy Policy</a>
              </li>
              <li>
                <a href="#!" className="text-surface hover:underline dark:text-white">Terms of Service</a>
              </li>
              <li>
                <a href="#!" className="text-surface hover:underline dark:text-white">Cookie Policy</a>
              </li>
              <li>
                <a href="#!" className="text-surface hover:underline dark:text-white">Licenses</a>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h5 className="mb-2.5 font-medium uppercase">Follow Us</h5>

            <ul className="list-none mb-0">
              <li>
                <a href="#!" className="text-surface hover:underline dark:text-white">Facebook</a>
              </li>
              <li>
                <a href="#!" className="text-surface hover:underline dark:text-white">Twitter</a>
              </li>
              <li>
                <a href="#!" className="text-surface hover:underline dark:text-white">LinkedIn</a>
              </li>
              <li>
                <a href="#!" className="text-surface hover:underline dark:text-white">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full  bg-green-600 py-4 px-4 text-center text-sm dark:bg-white-800">
        © 2024 Copyright:
        <a
          className="text-surface hover:underline dark:text-white"
          href="https://tailwind-elements.com/"
        >
          BEMAGROUP
        </a>
      </div>
    </footer>
  );
};

export default Footer;
