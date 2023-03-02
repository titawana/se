<template>
    <div class="bg-gray-500 w-full h-[900px] flex justify-center items-center">
        <div class="bg-white w-[800px] h-[600px] rounded-lg p-4" >
            <div class="bg-pink-500 h-2/3 w-full flex flex-row">
                <div class="bg-white w-1/2 h-full flex flex-col justify-center items-center p-4">
                    <img class =" rounded-full h-[250px] w-[250px]  " src="https://fandomkpop.com/wp-content/uploads/2022/10/IU-e1664952721856.jpg">
                    <br>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label>
                    <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file">
                </div>
                <div class="bg-white w-1/2 h-full p-6">
                    <p class="text-xl font-bold ">Edit Your Profile </p>
                    <label class="block pt-1">
                    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Name</span>
                    <input type="email" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                    </label>
                    <label class="block pt-1">
                    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Phone number</span>
                    <input type="email" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                    </label>
                    <label class="block pt-1">
                    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Email</span>
                    <input type="email" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
                    </label>
                </div>
            </div>
            <div class="bg-white h-1/3 w-full flex justify-center items-center">
                <button class="bg-rose-500 p-2  w-[200px] text-white rounded m-10"> BACK </button>
                <button class="bg-emerald-500 p-2 w-[200px] text-white rounded"> SUMMIT </button>
            </div>

        </div>
    </div>
</template>