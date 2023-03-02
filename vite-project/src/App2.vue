<script setup>

const value =0
</script>
<template>
    <div class =" bg-black w-[500px] h-[800px] flex flex-col">
        <div class="bg-green-300 w-full h-1/3"></div>
        <div class =" bg-yellow-300 w-full h-2/3 flex flex-col">
            <div class =" bg-red-200 w-full h-1/5 flex flex-row items-center justify-around">
                <div class ="w-[75px] h-[75px] bg-gray-200 rounded-full flex justify-center items-center font-bold">AC</div>  
                <div class ="w-[75px] h-[75px] bg-gray-200 rounded-full flex justify-center items-center font-medium">+/-</div>  
                <div class ="w-[75px] h-[75px] bg-gray-200 rounded-full flex justify-center items-center font-medium">%</div>  
                <div class ="w-[75px] h-[75px] bg-gray-200 rounded-full flex justify-center items-center font-medium"> C</div>  
            </div>
            <div class ="bg-red-300 w-full h-1/5 flex flex-row items-center justify-around">
                <div class ="w-[75px] h-[75px] bg-gray-200 rounded-full flex justify-center items-center font-bold">7</div>  
                <div class ="w-[75px] h-[75px] bg-gray-200 rounded-full flex justify-center items-center font-medium">8</div>  
                <div class ="w-[75px] h-[75px] bg-gray-200 rounded-full flex justify-center items-center font-medium">9</div>  
                <div class ="w-[75px] h-[75px] bg-gray-200 rounded-full flex justify-center items-center font-medium">X</div>
            </div>
            <div class ="bg-red-400 w-full h-1/5 flex flex-row items-center justify-around">
                <div class ="w-[75px] h-[75px] bg-gray-200 rounded-full flex justify-center items-center font-bold">4</div>  
                <div class ="w-[75px] h-[75px] bg-gray-200 rounded-full flex justify-center items-center font-medium">5</div>  
                <div class ="w-[75px] h-[75px] bg-gray-200 rounded-full flex justify-center items-center font-medium">6</div>  
                <div class ="w-[75px] h-[75px] bg-gray-200 rounded-full flex justify-center items-center font-medium">-</div>
            </div>
            <div class ="bg-red-500 w-full h-1/5 flex flex-row items-center justify-around">
                <div class ="w-[75px] h-[75px] bg-gray-200 rounded-full flex justify-center items-center font-bold">1</div>  
                <div class ="w-[75px] h-[75px] bg-gray-200 rounded-full flex justify-center items-center font-medium">2</div>  
                <div class ="w-[75px] h-[75px] bg-gray-200 rounded-full flex justify-center items-center font-medium">3</div>  
                <div class ="w-[75px] h-[75px] bg-gray-200 rounded-full flex justify-center items-center font-medium">+</div>
            </div>
            <div class ="bg-red-600 w-full h-1/5 flex flex-row items-center justify-around">
                <div class ="w-[200px] h-[75px] bg-gray-200 rounded-full flex justify-center items-center font-medium">2</div>  
                <div class ="w-[75px] h-[75px] bg-gray-200 rounded-full flex justify-center items-center font-medium">3</div>  
                <div class ="w-[75px] h-[75px] bg-gray-200 rounded-full flex justify-center items-center font-medium">+</div>
            </div>
        </div>
    </div>

  </template>