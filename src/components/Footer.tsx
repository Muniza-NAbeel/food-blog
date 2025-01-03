import "boxicons/css/boxicons.min.css";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-semibold">Food Blog</h1>
            <p className="text-sm mt-2">
              © 2024 Made with 🤍. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="https://www.linkedin.com/in/muniza-malik-59826930a/"
              className="relative text-4xl hover:text-slate-300 pb-2 
               after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-slate-300 after:transition-all after:duration-600 
               hover:after:w-full shadow-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
            <a
              href="https://www.facebook.com/muniza.nabeel/"
              className="relative text-4xl hover:text-slate-300 pb-2 
                after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-slate-300 after:transition-all after:duration-600 
                 hover:after:w-full shadow-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-facebook-circle"></i>
            </a>
            <a
              href="https://github.com/Muniza-NAbeel/"
              className="relative text-4xl hover:text-slate-300 pb-2 
                after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-slate-300 after:transition-all after:duration-600 
                hover:after:w-full shadow-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-github"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}