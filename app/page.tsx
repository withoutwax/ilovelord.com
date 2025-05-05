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

        <section className="menunav-wrap display-flex">
            <ul className="fixmenu">
                <li className="m btn-top"><a href="#m-home">Home</a></li>
                <li className="m"><a href="#m-agapao">Agapao</a></li>
                <li className="m"><a href="#m-worship">Worship</a></li>
                <li className="m"><a href="#m-media">Media</a></li>
                <li className="m"><a href="#m-sharing">Sharing</a></li>
                <li className="m"><a href="#m-contact">Contact</a></li>
            </ul>
        </section>

        <section className="main-section main-bg01 m-agapao scroll">
            <div className="row container content-center">
                <div className="col-md-6"></div>
                <div className="txt col-md-6 col-sm-12" data-aos="fade-up">
                    <h2>Agapao</h2>
                    <p>주의 성령이 내게 임하셨으니 이는 가난한 자에게 복음을 전하게 하시려고<br/>
                        내게 기름을 부으시고 나를 보내사 포로 된 자에게 자유를, 눈먼 자에게 다시 보게 함을 전파하며<br/>
                        눌린 자를 자유케 하고 주의 은혜의 해를 전파하게 하려 하심이라 하였더라 (눅 4:18-19)</p>
                    <a href="<?= AGAPAO_URL ?>/agapao.php?gubun=a1" className="btn btn_main btn_white">more about AGAPAO</a>
                </div>

            </div>
        </section>

        <section className="main-section main-bg02 m-worship scroll">
            <div className="row container content-center">
                <div className="col-md-6"></div>
                <div className="txt col-md-6 col-sm-12" data-aos="fade-up">
                    <h2>Worship</h2>
                    <p>아버지께 참으로 예배하는 자들은 신령과 진정으로 예배할 때가 오나니 곧 이때라<br/>
                        아버지께서는 이렇게 자기에게 예배하는 자들을 찾으시느니라 하나님은 영이시니 예배하는 자가<br/>
                        신령과 진정으로 예배할찌니라 (요 4:23-24)</p>
                    <a href="<?= WORSHIP_URL ?>/worship.php?gubun=w1" className="btn btn_main btn_white">more about WORSHIP</a>
                    <a href="https://agapao.im/" target="_blank" rel="noopener noreferrer" className="btn btn_main btn_white">AGAPAO
                        WORSHIP</a>
                </div>

            </div>
        </section>

        <section className="main-section main-bg03 m-media scroll">
            <div className="container content-center">
                <div className="txt" data-aos="fade-up">
                    <h2>Media</h2>
                    <p>내가 영을 전하노라 여호와께서 내게 이르시되 너는 내 아들이라 오늘날 내가 너를 낳았도다<br/>
                        내게 구하라 내가 열방을 유업으로 주리니 네 소유가 땅 끝까지 이르리로다 (시 2:7-8)</p>

                    <div className="media-wrap">
                        {/*<? foreach ($mRow as $key => $val) {*/}
                        {/*    $code = wz_get_youtube_code($val["link"]);*/}
                        {/*    ?>*/}
                        {/*    <div className="media first">*/}
                        {/*        <div className="media-gallery">*/}
                        {/*            <i className="fas fa-camera"></i>*/}
                        {/*            <div className="thumb">*/}
                        {/*                <a href="<?= MEDIA_URL ?>/media.php?gubun=m4&idx=<?= rawurlencode(encrypt($val["idx"])) ?>">*/}
                        {/*                    <img src="http://img.youtube.com/vi/<?= $code ?>/0.jpg">*/}
                        {/*                </a>*/}
                        {/*            </div>*/}
                        {/*            <div className="desc">*/}
                        {/*                <a href="<?= MEDIA_URL ?>/media.php?gubun=m4&idx=<?= rawurlencode(encrypt($val["idx"])) ?>"><?= $val["title"] ?></a><br/>*/}
                        {/*                <p><?= $val["regdate"] ?></p>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*<? } ?>*/}
                    </div>
                    <Link href={"https://agapao.im/music"} className="btn btn_main btn_black">more
                        about MEDIA
                    </Link>
                </div>
            </div>
        </section>

        <section className="main-section main-bg04 m-sharing scroll">
            <div className="row container content-center">
                <div className="col-md-6"></div>
                <div className="txt col-md-6 col-sm-12" data-aos="fade-up">
                    <h2>Sharing</h2>
                    <p>너희는 여호와의 선하심을 맛보아 알찌어다 그에게 피하는 자는 복이 있도다. (시편 34:8)</p>
                    <a href="<?= SHARING_URL ?>/sharing.php?gubun=s1" className="btn btn_main btn_white">more about SHARING</a>
                </div>

            </div>
        </section>

        <section className="container m-contact scroll">
            <div className="contact" data-aos="fade-up">
                <h2>Contact</h2>
                <p>서울특별시 강남구 압구정로32길 11 캐럴라인타워 B2 아가파오<br/>
                    <i className="fas fa-phone"></i> 02-518-7411 [문의가능시간 월-금 10:00-18:00]</p>
                <a href="<?= CONTACT_URL ?>/contact.php?gubun=c1" className="btn btn_main btn_black">more about CONTACT</a>
            </div>
        </section>
    </main>
  );
}
