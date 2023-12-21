import React from 'react';

const Skeleton = () => {
  return (
    <div class="w-full mx-0 max-md:p-[5px] max-md:m-0 max-lg:grid">
      <div class="h-max shadow-md rounded-md items-center w-full max-md:mr-0 ">
        <div class="p-1 " style={{height:'400px'}}>
            <div data-placeholder class="max-md:w-[100%]  mb-2 w-[335px] h-[100%] overflow-hidden relative bg-gray-400 rounded-xl">
            </div>
        </div>
        <div data-placeholder class="rounded-xl overflow-hidden relative bg-gray-400 max-md:mt-[5px]" style={{width:'250px',height:'30px',marginLeft:'2px', }}></div> 
          <div class="mt-1 p-[5px]" style={{display:'flex',justifyContent:'space-between',paddingTop:'30px',}}>
            <div data-placeholder class="w-[100px] h-[30px] rounded-xl overflow-hidden relative bg-gray-400 mr-20 max-md:mr-10 max-md:w-[50%]"></div>
            <div data-placeholder class=" w-[100px] h-[30px] rounded-xl overflow-hidden relative bg-gray-400 ml-20 max-md:ml-10 max-md:w-[50%] "></div>
          </div>
      
        <div class="p-4 w-full max-md:p-0">
          <div data-placeholder class=" rounded-xl mb-1 mt-5 h-20 w-full overflow-hidden relative bg-gray-400">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
