import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <main>
        <section className="section-main m-home scroll">
          <div className="container">
          	<div className="maintext-wrap">
        		<Image src="/assets/img/main-toptext.png" alt="" width={750} height={750}/>
                <div>
                    <i className="scrollbtn btn btn_icon01 fas fa-chevron-down"></i>
                </div>
            </div>
          </div>
        </section>

        <section className="container page-start">
            <div className="agapao_original">
                <h2 className="agapaotxt">
                    <span className="agapaotxt01">ἀγαπάω</span> &nbsp;=&nbsp; <span className="agapaotxt02">AGAPAO</span> &nbsp;=&nbsp;
                    <span className="agapaotxt03">사랑하다</span>
                </h2>
            </div>
        </section>

        <section className="main-section main-bg01 flex flex-col items-center justify-center text-white text-center">
            <h2>Agapao</h2>
            <p>주의 성령이 내게 임하셨으니 이는 가난한 자에게 복음을 전하게 하시려고<br/>
                내게 기름을 부으시고 나를 보내사 포로 된 자에게 자유를, 눈먼 자에게 다시 보게 함을 전파하며<br/>
                눌린 자를 자유케 하고 주의 은혜의 해를 전파하게 하려 하심이라 하였더라 (눅 4:18-19)</p>
            <Link href="/about" className="btn btn_main btn_white">more about AGAPAO</Link>
        </section>

        <section className="main-section main-bg02 flex flex-col items-center justify-center text-white text-center">
            <h2>Worship</h2>
            <p>아버지께 참으로 예배하는 자들은 신령과 진정으로 예배할 때가 오나니 곧 이때라<br/>
                아버지께서는 이렇게 자기에게 예배하는 자들을 찾으시느니라 하나님은 영이시니 예배하는 자가<br/>
                신령과 진정으로 예배할찌니라 (요 4:23-24)</p>
            <Link href="https://agapao.im/" target="_blank" rel="noopener noreferrer" className="btn btn_main btn_white">AGAPAO
                WORSHIP</Link>
        </section>

        <section className="main-section main-bg03 flex flex-col items-center justify-center text-black text-center">
            <h2>Media</h2>
            <p>내가 영을 전하노라 여호와께서 내게 이르시되 너는 내 아들이라 오늘날 내가 너를 낳았도다<br/>
                내게 구하라 내가 열방을 유업으로 주리니 네 소유가 땅 끝까지 이르리로다 (시 2:7-8)</p>
            <Link href="https://agapao.im/music" className="btn btn_main btn_black">more
                about MEDIA
            </Link>
        </section>

        <section className="m-contact bg-white">
            <div className="contact" data-aos="fade-up">
                <h2>Contact</h2>
                <p>서울특별시 강남구 압구정로32길 11 캐럴라인타워 B2 아가파오<br/>
                    <i className="fas fa-phone"></i> 02-518-7411 [문의가능시간 월-금 10:00-18:00]</p>
                <Link href="/contact" className="btn btn_main btn_black">more about CONTACT</Link>
            </div>
        </section>
    </main>
  );
}
