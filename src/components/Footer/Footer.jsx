// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 text-white py-6">
//       <div className="max-w-7xl mx-auto px-4 text-center">
//         <p className="text-sm mb-2">&copy; {new Date().getFullYear()} Recipe App. All rights reserved.</p>
//         <p className="text-sm">Developed by <span className="font-semibold">Ankur Changani</span></p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm mb-2">
          &copy; {new Date().getFullYear()} Recipe App. All rights reserved.
        </p>
        <p className="text-sm">
          Developed by <span className="font-semibold">Ankur Changani</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
