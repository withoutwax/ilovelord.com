const currentYear = new Date().getFullYear();
export default function Footer() {

  return (
    <footer className="bg-black">
			<div className="w-full max-w-screen-2xl mx-auto">
	    	<div className="flex flex-col md:flex-row md:items-center px-8">
	    		<p className="text-[#ccc] leading-8 mt-12 mb-12 pr-16 md:w-5/12">
	    			주의 성령이 내게 임하셨으니<br />
	    			이는 가난한 자에게 복음을 전하게 하시려고<br />
	    			내게 기름을 부으시고 나를 보내사 포로된 자에게 자유를,<br />
	    			눈먼 자에게 다시 보게 함을 전파하며 눌린 자를 자유케 하고<br />
	    			주의 은혜의 해를 전파하게 하려 하심이라 하였더라<br />
	    			(눅 4:18-19)
	    		</p>
	    		<div className="md:w-7/12 grid md:grid-cols-3 gap-4 border-t-2 border-b-2 border-[#af9273] py-12 px-4">
						<p className="text-white order-[1] md:order-[1]">주일학교<span className="ml-8 text-zinc-400">AM 11:00</span></p>
						<p className="text-white order-[2] md:order-[2]">장년예배<span className="ml-8 text-zinc-400">AM 11:00</span></p>
						<p className="text-white order-[4] md:order-[3]">수요예배<span className="ml-8 text-zinc-400">PM 8:00</span></p>
						<p className="hidden md:block md:order-[4]"></p>
						<p className="text-white order-[3] md:order-[5]">청년예배<span className="ml-8 text-zinc-400">PM 02:00</span></p>
						<p className="text-white order-[5] md:order-[6]">금요예배<span className="ml-8 text-zinc-400">PM 9:00</span></p>
	    		</div>
	    	</div>
			</div>
    	<div className="text-sm font-light text-gray-400 text-center leading-5 bg-[#18191a] border-t border-[#333] p-12 m-0">
    		<p>
					{`Copyright© ${currentYear}. AGAPAO. All rights reserved. 주소 : 서울특별시 강남구 압구정로32길 11 캐럴라인타워 B2 아가파오 | Tel. 02-518-7411`}
    		</p>
    	</div>
    </footer>
  );
}