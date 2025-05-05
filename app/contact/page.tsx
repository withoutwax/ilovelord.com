"use client";

import React from 'react';
import {NaverMap} from "@/components/Map";

export default function Contact() {

  return (
    <main>
      <header className="bg-center bg-no-repeat bg-cover bg-fixed h-[50vh] bg-[url('/assets/img/agapao-topcontact.jpg')] flex items-center justify-center text-white font-bold">
      	<h1>CONTACT US</h1>
      </header>

      <section className="p-[100px] bg-[#b0c4ba] text-white">
        <div className="flex flex-col items-center mx-auto max-w-screen-2xl px-8 space-y-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
          </svg>
          <p className="!text-white text-center font-[1.1rem] leading-[1.8rem]">
              ADD. 서울특별시 강남구 압구정로32길 11 캐럴라인타워 B2 아가파오<br />
              TEL. 02-518-7411 [문의가능시간 월-금 10:00-18:00]
          </p>
        </div>
      </section>

      <section className="py-20 md:py-[100px]">
        <div className="flex flex-col md:flex-row space-x-8 max-w-screen-2xl mx-auto px-8 gap-8">
          <div className="md:w-1/3">
              <ul>
                  <li className="text-[#555] p-[1.5rem] border-b border-[#e0e0e0] border-dashed leading-[1.6rem]">
                      <h3 className="text-[#af9273]"><i className="fas fa-bus"></i> 버스</h3>
                      간선 147, 148, 463<span className="text-[#ccc] py-0 px-[0.5rem]">&#8226;</span><br />
                      지선 4412, 4219<span className="text-[#ccc] py-0 px-[0.5rem]">&#8226;</span><br />
                      압구정역 3번 출구 하차<br />
                  </li>
                  <li className="text-[#555] p-[1.5rem] border-b border-[#e0e0e0] border-dashed leading-[1.6rem]">
                      <h3 className="text-[#af9273]"><i className="fas fa-subway"></i> 지하철</h3>
                      3호선 압구정역<br />
                      2번과 3번 출구에서 오시기 편합니다.<br /><br />
                  </li>
                  <li className="text-[#555] p-[1.5rem]  leading-[1.6rem]">
                      <h3 className="flex items-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                        </svg>
                        <span>주차안내</span>
                      </h3>
                      주차 공간이 협소합니다.<br />
                      대중교통 이용 바랍니다.
                  </li>
              </ul>
          </div>
          <div className="w-full md:w-2/3 aspect-square md:aspect-auto">
            <NaverMap />
          </div>
        </div>
      </section>
    </main>
  );
}
