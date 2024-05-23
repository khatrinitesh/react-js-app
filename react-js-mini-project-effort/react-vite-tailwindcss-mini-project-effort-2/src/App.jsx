import { useState } from "react";
import "./custom.css";
import { NavLink } from "react-router-dom";
import CustomApp from "./TailwindCSS/1/App";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <CustomApp />
      {/* <header className="hover:text-[200px] py-[10px] font-[900] bg-primary sm:w-[100px] md:w-[200px] lg:w-[100%]">
        header
      </header> */}
      {/* <div className="container mx-auto">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <div className="container mx-auto px-4 py-4">Container</div>
        <iframe
          className="w-full aspect-video hover:aspect-square"
          src="https://youtu.be/dQw4w9WgXcQ"
        ></iframe>
        <div className="columns-4">
          <img
            className="w-full aspect-square"
            src="https://www.joshwcomeau.com/images/shoe-closeup.png"
          />
          <img
            className="w-full aspect-square"
            src="https://www.joshwcomeau.com/images/shoe-closeup.png"
          />
          <img
            className="w-full aspect-square"
            src="https://www.joshwcomeau.com/images/shoe-closeup.png"
          />
          <img
            className="w-full aspect-square"
            src="https://www.joshwcomeau.com/images/shoe-closeup.png"
          />
        </div>
        <div className="columns-1">Columns 1</div>
        <div className="columns-2">Columns 2</div>
        <div className="columns-3">Columns 3</div>
        <div className="columns-2">
          <p>Well, let me tell you something, ...</p>
          <p className="break-after-column">Sure, go ahead, laugh...</p>
          <p>Maybe we can live without...</p>
          <p>Look. If you think this is...</p>
        </div>
        <div className="columns-2">
          <p>Well, let me tell you something, ...</p>
          <p className="break-inside-avoid-column">Sure, go ahead, laugh...</p>
          <p>Maybe we can live without...</p>
          <p>Look. If you think this is...</p>
        </div>
        <span className="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2">
          Hello
          <br />
          World
        </span>
        <span className="box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2">
          Hello
          <br />
          World
        </span>
        <div className="box-content h-32 w-32 p-4 md:box-content border-4">
          Box Content
        </div>
        <div>
          When controlling the flow of text, using the CSS property
          <span className="inline">display: inline</span>
          will cause the text inside the element to wrap normally. While using
          the property{" "}
          <span className="inline-block">display: inline-block</span>
          will wrap the element to prevent the text inside from extending beyond
          its parent. Lastly, using the property{" "}
          <span className="block">display: block</span>
          will put the element on its own line and fill its parent.
        </div>
        <div className="p-4">
          <div className="flow-root">
            <div className="my-4">Well, let me tell you something,</div>
          </div>
          <div className="flow-root">
            <div className="my-4">Sure, go ahead, laugh if you want...</div>
          </div>
        </div>
        <div>
          <img
            className="float-right"
            src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80"
          />
          <p className="clear-left hover:clear-none textDec">
            Maybe we can live without libraries, people like you and me. Maybe.
            Sure, we're too old to change the world, but what about that kid,
            sitting down, opening a book, right now, in a branch at the local
            library and finding drawings of pee-pees and wee-wees on the Cat in
            the Hat and the Five Chinese Brothers? Doesn't HE deserve better?
            Look. If you think this is about overdue fines and missing books,
            you'd better think again. This is about that kid's right to read a
            book without getting his mind warped! Or: maybe that turns you on,
            Seinfeld; maybe that's how y'get your kicks. You and your good-time
            buddies.
          </p>
        </div>
        <div className="bg-indigo-300">
          <img
            src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80"
            className="object-cover hover:object-top h-48 w-96"
          />
        </div>
        <div className="overflow-auto focus:overscroll-contain h-32">
          Sit nulla consectetur do amet adipisicing laboris ea laboris. Ex
          voluptate esse reprehenderit ullamco voluptate nostrud aliqua elit
          adipisicing elit veniam laborum. Dolor anim ex magna commodo anim elit
          eu adipisicing culpa et veniam culpa. Fugiat ex ea veniam ullamco
          officia adipisicing ipsum qui. Aliquip amet id cupidatat ut veniam et
          aute deserunt commodo incididunt. Cupidatat mollit aute proident
          veniam laborum dolor deserunt minim nulla irure. Ullamco excepteur
          dolor eiusmod id enim minim eiusmod consequat mollit minim. Ea
          cupidatat non quis consectetur aute sint ad reprehenderit ex. Non
          deserunt anim eiusmod culpa veniam labore adipisicing pariatur
          proident mollit. Nostrud ut Lorem Lorem id ad eiusmod dolor deserunt.
          Ut eiusmod velit consequat proident.
        </div>
        <div className="static">
          <p>Static parent</p>
          <div className="absolute bottom-0 left-0">
            <p>Absolute child</p>
          </div>
        </div>
        <div className="relative parentContent">
          <p>Relative parent</p>
          <div className="innerContent absolute top-0 left-0 ">
            <p>Absolute child</p>
          </div>
        </div>
        <div>
          <div>
            <div className="sticky top-0 ...">A</div>
            <div>
              <div>
                <img src="..." />
                <strong>Andrew Alfred</strong>
              </div>
              <div>
                <img src="..." />
                <strong>Aisha Houston</strong>
              </div>
            </div>
          </div>
          <div>
            <div className="sticky top-0">B</div>
            <div>
              <div>
                <img src="..." />
                <strong>Bob Alfred</strong>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-32 w-32 ...">
          <div className="absolute left-0 top-0 h-16 w-16 ...">01</div>
        </div>

        <div className="relative h-32 w-32 ...">
          <div className="absolute inset-x-0 top-0 h-16 ...">02</div>
        </div>

        <div className="relative h-32 w-32 ...">
          <div className="absolute top-0 right-0 h-16 w-16 ...">03</div>
        </div>
        <div className="relative h-32 w-32 ...">
          <div className="absolute inset-y-0 left-0 w-16 ...">04</div>
        </div>
        <div className="relative h-32 w-32 ...">
          <div className="absolute inset-0 ...">05</div>
        </div>
        <div className="relative h-32 w-32 ...">
          <div className="absolute inset-y-0 right-0 w-16 ...">06</div>
        </div>

        <div className="relative h-32 w-32 ...">
          <div className="absolute bottom-0 left-0 h-16 w-16 ...">07</div>
        </div>
        <div className="relative h-32 w-32 ...">
          <div className="absolute inset-x-0 bottom-0 h-16 ...">08</div>
        </div>
        <div className="relative h-32 w-32 ...">
          <div className="absolute bottom-0 right-0 h-16 w-16 ...">09</div>
        </div>
        <div className="top-4 md:top-6">Top content</div>
        <div className="grid grid-cols-3">
          <div>01</div>
          <div className="invisible">02</div>
          <div>03</div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Invoice #</th>
              <th>Client</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#100</td>
              <td>Pendant Publishing</td>
              <td>$2,000.00</td>
            </tr>
            <tr className="collapse">
              <td>#101</td>
              <td>Kruger Industrial Smoothing</td>
              <td>$545.00</td>
            </tr>
            <tr>
              <td>#102</td>
              <td>J. Peterman</td>
              <td>$10,000.25</td>
            </tr>
          </tbody>
        </table>
        <div className="z-40 md:z-50">05</div>
        <div className="z-30">04</div>
        <div className="z-20">03</div>
        <div className="z-10">02</div>
        <div className="z-0">01</div>

        <h2>Flexbox & Grid &lt;&lt; Flex Basic</h2>
        <hr />
        <div className="flex flex-row">
          <div className="basis-1/4">01</div>
          <div className="basis-1/4">02</div>
          <div className="basis-1/2">03</div>
        </div>
        <div className="flex flex-row">
          <div className="basis-1/4">01</div>
          <div className="basis-1/4">02</div>
          <div className="basis-1/2">03</div>
        </div>
        <div className="flex flex-row">
          <div>01</div>
          <div>02</div>
          <div>03</div>
        </div>
        <div className="flex flex-col">
          <div>01</div>
          <div>02</div>
          <div>03</div>
        </div>
        <div className="flex flex-col-reverse">
          <div>01</div>
          <div>02</div>
          <div>03</div>
        </div>
        <div className="flex flex-nowrap">
          <div>01</div>
          <div>02</div>
          <div>03</div>
        </div>
        <div className="flex flex-wrap">
          <div>01</div>
          <div>02</div>
          <div>03</div>
        </div>
        <div className="flex flex-wrap-reverse">
          <div>01</div>
          <div>02</div>
          <div>03</div>
        </div>
        <div className="flex flex-nowrap">
          <div>01</div>
          <div>02</div>
          <div>03</div>
        </div>
        <div className="flex flex-wrap">
          <div>01</div>
          <div>02</div>
          <div>03</div>
        </div>
        <div className="flex flex-wrap-reverse">
          <div>01</div>
          <div>02</div>
          <div>03</div>
        </div>
        <div className="flex">
          <div className="flex-none w-14 h-14">01</div>
          <div className="flex-initial w-64">02</div>
          <div className="flex-initial w-32">03</div>
        </div>
        <div className="flex">
          <div className="flex-none ...">01</div>
          <div className="flex-1 w-64 ...">02</div>
          <div className="flex-1 w-32 ...">03</div>
        </div>
        <div className="flex">
          <div className="flex-none w-14 h-14">01</div>
          <div className="flex-initial w-64 ...">02</div>
          <div className="flex-initial w-32 ...">03</div>
        </div>
        <div className="flex ...">
          <div className="flex-none w-14 h-14 ...">01</div>
          <div className="grow h-14 ...">02</div>
          <div className="flex-none w-14 h-14 ...">03</div>
        </div>
        <div className="flex ...">
          <div className="grow h-14 ...">01</div>
          <div className="grow-0 h-14 ...">02</div>
          <div className="grow h-14 ...">03</div>
        </div>
        <div className="flex ...">
          <div className="flex-none w-14 h-14 ...">01</div>
          <div className="shrink w-64 h-14 ...">02</div>
          <div className="flex-none w-14 h-14 ...">03</div>
        </div>
        <div className="flex ...">
          <div className="flex-none w-14 h-14 ...">01</div>
          <div className="md:shrink  lg:shrink xl:shrink  2xl:shrink shrink-0 w-64 h-14 ...">
            02
          </div>
          <div className="flex-none w-14 h-14 ...">03</div>
        </div>
        <div className="flex justify-between ...">
          <div className="order-last">01</div>
          <div>02</div>
          <div>03</div>
        </div>
        <div className="flex justify-between ...">
          <div className="order-2 hover:order-last">01</div>
          <div className="-order-1">02</div>
          <div className="order-3">03</div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div>01</div>
          <div>09</div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="...">01</div>
          <div className="...">02</div>
          <div className="...">03</div>
          <div className="col-span-2 ...">04</div>
          <div className="...">05</div>
          <div className="...">06</div>
          <div className="col-span-2 ...">07</div>
        </div>
        <div className="grid grid-cols-6 gap-4">
          <div className="col-start-2 col-span-4">01</div>
          <div className="col-start-1 col-end-3">02</div>
          <div className="col-end-7 col-span-2">03</div>
          <div className="col-start-1 col-end-7">04</div>
        </div>
        <div className="grid grid-rows-4 grid-flow-col gap-4">
          <div>01</div>
          <div>09</div>
        </div>
        <div className="grid grid-rows-3 grid-flow-col gap-4">
          <div className="row-span-3 ...">01</div>
          <div className="col-span-2 ...">02</div>
          <div className="row-span-2 col-span-2 ...">03</div>
        </div>
        <div className="grid grid-rows-3 grid-flow-col gap-4">
          <div className="row-start-2 row-span-2 ...">01</div>
          <div className="row-end-3 row-span-2 ...">02</div>
          <div className="row-start-1 row-end-4 ...">03</div>
        </div>
        <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 ...">
          <div className="col-span-2">01</div>
          <div className="col-span-2">02</div>
          <div>03</div>
          <div>04</div>
          <div>05</div>
        </div>
        <div className="grid grid-flow-col auto-cols-max hover:auto-cols-min">
          <div>01</div>
          <div>02</div>
          <div>03</div>
        </div>
        <div className="grid grid-flow-row auto-rows-max">
          <div>01</div>
          <div>02</div>
          <div>03</div>
        </div>
        <div className="grid gap-4 grid-cols-2">
          <div>01</div>
          <div>02</div>
          <div>03</div>
          <div>04</div>
          <div>05</div>
          <div>06</div>
          <div>07</div>
        </div>
        <div className="grid hover:gap-6 gap-x-8 gap-y-4 grid-cols-3">
          <div>01</div>
          <div>02</div>
          <div>03</div>
          <div>04</div>
          <div>05</div>
          <div>06</div>
        </div>
        <div className="flex justify-start">
          <div>01</div>
          <div>02</div>
          <div>03</div>
        </div>
        <div className="flex justify-center">
          <div>01</div>
          <div>02</div>
          <div>03</div>
        </div>
        <div className="flex justify-end">
          <div>01</div>
          <div>02</div>
          <div>03</div>
        </div>
        <div className="flex justify-around">
          <div>01</div>
          <div>02</div>
          <div>03</div>
        </div>
        <div className="flex justify-evenly">
          <div>01</div>
          <div>02</div>
          <div>03</div>
        </div>
        <div className="grid grid-flow-col justify-stretch">
          <div>01</div>
          <div>02</div>
          <div>03</div>
        </div>
        <div className="grid justify-items-start">
          <div>01</div>
          <div>02</div>
          <div>03</div>
          <div>04</div>
          <div>05</div>
          <div>06</div>
        </div>
        <div className="grid justify-items-end">
          <div>01</div>
          <div>02</div>
          <div>03</div>
          <div>04</div>
          <div>05</div>
          <div>06</div>
        </div>
        <div className="grid justify-items-center">
          <div>01</div>
          <div>02</div>
          <div>03</div>
          <div>04</div>
          <div>05</div>
          <div>06</div>
        </div>
        <div className="grid justify-items-stretch">
          <div>01</div>
          <div>02</div>
          <div>03</div>
          <div>04</div>
          <div>05</div>
          <div>06</div>
        </div>
        <div className="h-56 grid grid-cols-3 gap-4 content-start ">
          <div>01</div>
          <div>02</div>
          <div>03</div>
          <div>04</div>
          <div>05</div>
        </div>
        <div className="h-56 grid grid-cols-3 gap-4 content-center">
          <div>01</div>
          <div>02</div>
          <div>03</div>
          <div>04</div>
          <div>05</div>
        </div>
        <div className="h-56 grid grid-cols-3 gap-4 content-end">
          <div>01</div>
          <div>02</div>
          <div>03</div>
          <div>04</div>
          <div>05</div>
        </div>
        <div className="h-56 grid grid-cols-3 gap-4 content-between">
          <div>01</div>
          <div>02</div>
          <div>03</div>
          <div>04</div>
          <div>05</div>
        </div>
        <div className="h-56 grid grid-cols-3 gap-4 content-around">
          <div>01</div>
          <div>02</div>
          <div>03</div>
          <div>04</div>
          <div>05</div>
        </div>
        <div className="h-56 grid grid-cols-3 gap-4 content-evenly ...">
          <div>01</div>
          <div>02</div>
          <div>03</div>
          <div>04</div>
          <div>05</div>
        </div>
        <div className="h-56 grid grid-cols-3 gap-4 content-stretch ...">
          <div>01</div>
          <div>02</div>
          <div>03</div>
          <div>04</div>
          <div>05</div>
        </div>
        <div className="flex items-stretch ...">
          <div className="py-4">01</div>
          <div className="py-12">02</div>
          <div className="py-8">03</div>
        </div>
        <div className="flex items-start ...">
          <div className="py-4">01</div>
          <div className="py-12">02</div>
          <div className="py-8">03</div>
        </div>
        <div class="grid grid-rows-4 grid-flow-col gap-4">
          <div className="p-[10px]">01</div>
          <div className="m-[25px]">09</div>
        </div>
        <hr />
        <div class="grid grid-rows-3 grid-flow-col gap-4">
          <div class="row-span-4">01</div>
          <div class="col-span-2">02</div>
          <div class="row-span-2 col-span-3">03</div>
        </div>
        <div class="grid grid-rows-3 grid-flow-col gap-4">
          <div class="row-start-2 row-span-2 ...">01</div>
          <div class="row-end-3 row-span-2 ...">02</div>
          <div class="row-start-1 row-end-4 ...">03</div>
        </div>
        <div className="flex flex-nowrap lg:flex-wrap">
          <div className="w-1/2">Container width left</div>
          <div className="w-1/2">Container width right</div>
          <div className="w-1/2">Container width right</div>
          <div className="w-1/2">Container width right</div>
          <div className="w-1/2">Container width right</div>
          <div className="w-1/2">Container width right</div>
        </div>
        <div class="grid grid-flow-row auto-rows-max">
          <div>01</div>
          <div>02</div>
          <div>03</div>
        </div>
        <div class="grid gap-x-8 gap-y-4 grid-cols-3">
          <div>01</div>
          <div>02</div>
          <div>03</div>
          <div>04</div>
          <div>05</div>
          <div>06</div>
        </div>
        <div class="flex justify-start">
          <div>01</div>
          <div>02</div>
          <div>03</div>
        </div>
        <div class="flex justify-center p-[100px] m-[100px] bg-[orange] text-[100px] font-black font-variant-numeric-diagonal-fractions tracking-[50px]">
          <div>01</div>
          <div>02</div>
          <div>03</div>
        </div>
        <span className="line-clamp-10 w-1/2 leading-[50px]">
          Veniam dolor in occaecat reprehenderit aliquip dolore proident eiusmod
          eu. Laborum duis labore magna velit ullamco reprehenderit magna non
          Lorem ut sit magna magna. Reprehenderit do enim elit culpa qui nulla
          dolore ea est quis minim duis commodo laboris. Consequat do sunt amet
          non proident Lorem id commodo qui Lorem minim ex. Laboris enim Lorem
          ullamco exercitation id qui nisi. Eu est labore excepteur ex ullamco.
          Velit tempor proident veniam do cupidatat commodo. Mollit fugiat
          incididunt incididunt aliquip enim aliqua incididunt. Anim aliqua
          aliqua ut quis consequat. Ullamco magna ipsum culpa et mollit
          consequat amet mollit sit amet nisi proident excepteur sunt. Commodo
          anim voluptate cupidatat proident. Commodo amet ut ea consectetur esse
          ut ea proident exercitation dolore enim quis laboris.
        </span>
        <ul class="list-inside list-image-[url(https://static.thenounproject.com/png/15578-200.png)]">
          <li>5 cups chopped Porcini mushrooms</li>
          <li>5 cups chopped Porcini mushrooms</li>
          <li>5 cups chopped Porcini mushrooms</li>
          <li>5 cups chopped Porcini mushrooms</li>
          <li>5 cups chopped Porcini mushrooms</li>
          <li>5 cups chopped Porcini mushrooms</li>
          <li>5 cups chopped Porcini mushrooms</li>
        </ul>
        <ul class="list-disc list-[upper-roman] text-[#50d71e] underline-offset-[3px] capitalize truncate align-[4px]">
          <li>5 cups chopped Porcini mushrooms</li>
          <li>5 cups chopped Porcini mushrooms</li>
          <li>5 cups chopped Porcini mushrooms</li>
          <li>5 cups chopped Porcini mushrooms</li>
          <li>5 cups chopped Porcini mushrooms</li>
          <li>5 cups chopped Porcini mushrooms</li>
          <li>5 cups chopped Porcini mushrooms</li>
        </ul>
        
        <div class="w-1/2">
          <div class="flex">
            <div class="flex flex-col items-center mr-4">
              <div>
                <div class="flex items-center justify-center w-10 h-10 border rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 13l-5 5m0 0l-5-5m5 5V6"
                    />
                  </svg>
                </div>
              </div>
              <div class="w-px h-full bg-gray-300"></div>
            </div>
            <div class="pb-8 ">
              <p class="mb-2 text-xl font-bold text-gray-600">Step 1</p>
              <p class="text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. veniam
                libero facilis minus reprehenderit.
              </p>
            </div>
          </div>
          <div class="flex">
            <div class="flex flex-col items-center mr-4">
              <div>
                <div class="flex items-center justify-center w-10 h-10 border rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 13l-5 5m0 0l-5-5m5 5V6"
                    />
                  </svg>
                </div>
              </div>
              <div class="w-px h-full bg-gray-300"></div>
            </div>
            <div class="pb-8 ">
              <p class="mb-2 text-xl font-bold text-gray-600">Step 2</p>
              <p class="text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. veniam
                libero facilis minus reprehenderit.
              </p>
            </div>
          </div>
          <div class="flex">
            <div class="flex flex-col items-center mr-4">
              <div>
                <div class="flex items-center justify-center w-10 h-10 border rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 13l-5 5m0 0l-5-5m5 5V6"
                    />
                  </svg>
                </div>
              </div>
              <div class="w-px h-full bg-gray-300"></div>
            </div>
            <div class="pb-8 ">
              <p class="mb-2 text-xl font-bold text-gray-600">Step 3</p>
              <p class="text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. veniam
                libero facilis minus reprehenderit.
              </p>
            </div>
          </div>

          <div class="flex">
            <div class="flex flex-col items-center mr-4">
              <div>
                <div class="flex items-center justify-center w-10 h-10 border rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div class="pt-1">
              <p class="mb-2 text-lg font-bold text-gray-600">Done</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-center py-6 lg:py-12">
          <div class="w-full mx-auto lg:max-w-4xl">
            <div class="relative">
              <div class="absolute hidden w-px h-full transform -translate-x-1/2 bg-indigo-300 lg:block left-1/2"></div>
              <div class="space-y-12 lg:space-y-8">
                <div>
                  <div class="flex flex-col items-center">
                    <div class="flex items-center justify-start w-full mx-auto">
                      <div class="w-full lg:w-1/2 lg:pr-8">
                        <div class="p-4 bg-white rounded shadow-lg shadow-cyan-300">
                          <p>
                            Lorem, ipsum dolor sit amet consectetur dolor elit.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-indigo-400 border-2 border-red-200 rounded-full left-1/2 sm:translate-y-0">
                      <span class="text-white">1</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div class="flex flex-col items-center">
                    <div class="flex items-center justify-end w-full mx-auto">
                      <div class="w-full lg:w-1/2 lg:pl-8">
                        <div class="p-4 bg-white rounded shadow-lg shadow-red-300">
                          <p>
                            Lorem, ipsum dolor sit amet consectetur dolor elit.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-indigo-400 border-2 border-red-200 rounded-full left-1/2 sm:translate-y-0">
                      <span class="text-white">2</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div class="flex flex-col items-center">
                    <div class="flex items-center justify-start w-full mx-auto">
                      <div class="w-full lg:w-1/2 lg:pr-8">
                        <div class="p-4 bg-white rounded shadow-lg shadow-yellow-300">
                          <p>
                            Lorem, ipsum dolor sit amet consectetur dolor elit.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-indigo-400 border-2 border-red-200 rounded-full left-1/2 sm:translate-y-0">
                      <span class="text-white">3</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div class="flex flex-col items-center">
                    <div class="flex items-center justify-end w-full mx-auto">
                      <div class="w-full lg:w-1/2 lg:pl-8">
                        <div class="p-4 bg-white rounded shadow-lg shadow-lime-300">
                          <p>
                            Lorem, ipsum dolor sit amet consectetur dolor elit.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-indigo-400 border-2 border-red-200 rounded-full left-1/2 sm:translate-y-0">
                      <span class="text-white">4</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-3 divide-x">
        <div>01</div>
        <div>02</div>
        <div>03</div>
      </div>
      <div className={`customBox font-poppins columns-3xs border-2 border-rose-600 z-10 md:z-20 bg-blue-500 h-8 w-8 flex items-start md:items-center animate-pulse`}>
          Ut culpa labore consequat pariatur do in est nostrud enim sint culpa
          aute consequat mollit. Laborum do deserunt deserunt duis et cupidatat
          ea occaecat labore id ex anim magna aute. Velit adipisicing dolore
          dolore ex. Nisi exercitation ut eu nostrud laboris ea. Voluptate
          occaecat culpa laborum nostrud proident. Aliquip est in magna qui id
          voluptate eiusmod. Reprehenderit deserunt mollit consectetur aliquip
          reprehenderit eu laborum non cupidatat et id velit veniam. Occaecat
          nisi minim do exercitation velit velit cillum ad non dolor ea deserunt
          nulla.
          <h1>headTitle</h1>
        </div> */}
      {/* <footer class="border-t border-gray-200 d-none">
        <div class="container flex flex-wrap items-center justify-center px-4 py-8 mx-auto  lg:justify-between">
          <div class="flex flex-wrap justify-center">
            <ul class="flex items-center space-x-4">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Terms</li>
            </ul>
          </div>
          <div class="flex justify-center mt-4 lg:mt-0">
            <a>
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-6 h-6 text-blue-600"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="ml-3">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-6 h-6 text-blue-300"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="ml-3">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-6 h-6 text-pink-400"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a class="ml-3">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                class="w-6 h-6 text-blue-500"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </div>
        </div>
      </footer>
      <div class="bg-fixed h-[1200px] bg-hero-pattern bg-cover bg-center">
        nmtes
      </div>
      <div className="from-[#243c5a] h-[400px] bg-clip-padding"></div>
      <div class="bg-clip-padding">
        This element has a background image that is clipped to the border.
      </div>
      <div class="bg-clip-padding">
        This element has a background image that is clipped to the padding box.
      </div>
      <div class="bg-clip-padding">
        This element has a background image that is clipped to the content.
      </div>
      <div class="bg-clip-border md:bg-clip-content">
        This element has a background image that is clipped to the border box by
        default, but starting from the medium breakpoint and above, it changes
        to be clipped to the content box.
      </div>
      <button class="rounded-md">element has a blue background</button>
      <div class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        graident
      </div>
      <div class="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% border-8 border-indigo-600 border-t-4 border-b-4 ">
        Gradient is color
      </div>
      <div class="divide-y divide-slate-200 ...">
        <div>01</div>
        <div>02</div>
        <div>03</div>
      </div>
      <div dir="ltr">
        <div class="border-s-4">1</div>
      </div>

      <div dir="rtl">
        <div class="border-s-4">1</div>
      </div>
      <button class="outline outline-offset-2 outline-1 ...">Button A</button>
      <button class="outline outline-offset-2 outline-2 ...">Button B</button>
      <button class="outline outline-offset-2 outline-4 ...">Button C</button>
      <button class="outline outline-offset-2 outline-blue-500 ...">
        Button A
      </button>
      <button class="outline outline-offset-2 outline-cyan-500 ...">
        Button B
      </button>
      <button class="outline outline-offset-2 outline-pink-500 ...">
        Button C
      </button>
      <button class="outline-2 outline-blue-500/50 ...">Save Changes</button>
      <span class="shadow-slate-50">Shadow Slate 50</span>
      <span class="shadow-slate-100">Shadow Slate 50</span>
      <span class="shadow-slate-200">Shadow Slate 50</span>
      <button class="bg-indigo-500 opacity-100"></button>
      <button class="bg-indigo-500 opacity-75"></button>
      <button class="bg-indigo-500 opacity-50"></button>
      <button class="bg-indigo-500 opacity-25"></button>
      <div class="flex justify-center -space-x-14">
        <div class="mix-blend-multiply bg-blue-400 ..."></div>
        <div class="mix-blend-multiply bg-pink-400 ..."></div>
        <div class="blur-2xl">
          <img src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80" />
        </div>
        <table class="table-auto">
          <thead>
            <tr>
              <th>Song</th>
              <th>Artist</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
              <td>Malcolm Lockyer</td>
              <td>1961</td>
            </tr>
            <tr>
              <td>Witchy Woman</td>
              <td>The Eagles</td>
              <td>1972</td>
            </tr>
            <tr>
              <td>Shining Star</td>
              <td>Earth, Wind, and Fire</td>
              <td>1975</td>
            </tr>
          </tbody>
        </table>
        <table>
          <caption class="caption-top">
            Table 3.1: Professional wrestlers and their signature moves.
          </caption>
          <thead>
            <tr>
              <th>Wrestler</th>
              <th>Signature Move(s)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>"Stone Cold" Steve Austin</td>
              <td>Stone Cold Stunner, Lou Thesz Press</td>
            </tr>
            <tr>
              <td>Bret "The Hitman" Hart</td>
              <td>The Sharpshooter</td>
            </tr>
            <tr>
              <td>Razor Ramon</td>
              <td>Razor's Edge, Fallaway Slam</td>
            </tr>
          </tbody>
        </table>
        <img
          src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80"
          alt=""
          className="w-24 h-24 object-cover rounded-lg shadow-xl"
        />
      </div>
      <div class="divide-y divide-dashed">
        <div>01</div>
        <div>02</div>
        <div>03</div>
      </div>
      <button class="transition duration-150 ease-in-out ...">Button A</button>
      <button class="transition duration-300 ease-in-out ...">Button B</button>
      <button class="transition duration-700 ease-in-out ...">Button C</button>
      <button class="ease-in duration-300">Button A</button>
      <button class="ease-out duration-300">Button B</button>
      <button class="ease-in-out duration-300">Button C</button>
      <button type="button" class="cursor-pointer ">
        Submit
      </button>
      <button type="button" class="cursor-progress ">
        Saving
      </button>
      <button type="button" disabled class="cursor-not-allowed ...">
        Confirm
      </button>
      <textarea class="caret-blue-500 focus:caret-indigo-500"></textarea>
      <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div class="md:flex">
          <div class="md:shrink-0">
            <img
              class="h-48 w-full object-cover md:h-full md:w-48"
              src="/img/building.jpg"
              alt="Modern building architecture"
            />
          </div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Company retreats
            </div>
            <a
              href="#"
              class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Incredible accommodation for your team
            </a>
            <p class="mt-2 text-slate-500">
              Looking to take your team away on a retreat to enjoy awesome food
              and take in some sunshine? We have a list of places to do just
              that.
            </p>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default App;
