import React from 'react';

export default function HomePage() {
  return (
    <div className="relative w-[1543px] h-[862px] bg-white">
      {/* Menu */}
      <nav className="absolute w-[490px] h-[37px] top-0 left-0">
        {/* Frame 6 */}
        <div className="flex flex-row items-center gap-[92px] absolute w-[583px] h-[22px] left-0 top-[8px]">
          {/* Home */}
          <a href="#" className="h-full flex items-center text-base font-medium text-gray-900">
            Home
          </a>
          {/* Service */}
          <a href="#" className="h-full flex items-center text-base font-medium text-gray-900">
            Service
          </a>
          {/* Group 2 - placeholder para outros itens */}
          <div>
            {/* Aqui vão outros links ou grupos */}
          </div>
        </div>
      </nav>

      {/* Outros componentes da home page aqui */}
    </div>
  );
}
