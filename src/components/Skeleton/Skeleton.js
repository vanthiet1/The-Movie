import React from 'react';

const Skeleton = () => {
  return (
    <div class="w-full flex items-center flex-col  mx-3">
      <div class="mr-6 h-max flex flex-col shadow-md rounded-md items-center w-full">
        <div class="flex items-center p-1" style={{height:'400px'}}>
            <div data-placeholder class="  rounded-xl mb-2 h-5 w-40 overflow-hidden relative bg-gray-400" style={{height:'100%',width:'335px',}}>
            </div>
        </div>
        <div data-placeholder class=" rounded-xl overflow-hidden relative bg-gray-400" style={{width:'250px',height:'30px',marginRight:'75px', }}></div> 
          <div class="mt-1" style={{display:'flex',justifyContent:'space-between',paddingTop:'30px',}}>
            <div data-placeholder class=" rounded-xl overflow-hidden relative bg-gray-400 mr-20" style={{width:'100px', height:'30px'}}></div>
            <div data-placeholder class=" rounded-xl overflow-hidden relative bg-gray-400 ml-20" style={{width:'100px', height:'30px'}}></div>
          </div>
      
        <div class=" p-4 w-full">
          <div data-placeholder class=" rounded-xl mb-1 mt-5 h-20 w-full overflow-hidden relative bg-gray-400">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
