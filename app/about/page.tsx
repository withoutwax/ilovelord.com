import Image from "next/image";
import Mentor from "@/components/Mentor";

const mentorList = [
  {
      quote: `할렐루야!<br />
             아가파오교회는 하나님을 기쁘시게 하며 주신 목적을 잃어버리지 않고 사역하는 귀한 공동체가 되길 소망합니다.<br />
             기성교회들이 미쳐 못 미치는 연예인들이나 세상 속에서 시간적 여유가 없어 교회에 잘 나오지 못하는 청장년들을 찾아 밤이 늦도록 예배하고 말씀으로 양육하는 일을 감당하는 일에 아가파오교회가 쓰임받음에 감사드립니다.<br />
             이 단체를 통하여서 많은 선교사가 파송되며 저물어가는 한국교계가 다시 태양이 떠오르듯 찬란한 빛을 발하기를. 하나님이 큰 영광 받으시는 아가파오교회가 되기를 축복합니다.`,
      caption: '민족복음화운동본부 총재 이 태 희 목사',
      lists: [
          '민족복음화운동본부 총재',
          '비젼코리아21중앙협의회 총재',
          '북한구원운동본부',
          '민주평통자문위원',
          '교회와 경찰중앙협의회 증경 회장',
          '수동기도원 원장',
          '성복교회 당회장'
      ],
      profile: '/assets/img/mentor/lee_th.jpg',
      name: '이태희 목사님'
  },
  {
      quote: `아가파오 미니스트리는 초대교회처럼 성령님의 임재가 가득한 모임이며 중국지하교회처럼 예수님 사랑에 눈물의 감동이 있고 기쁨의 춤이 있습니다. 죄사함의 축복과 병든 영혼, 육의 치료가 있고 영원한 천국 소망으로 넘치는 에클레시아 입니다. 저는 아가파오 미니스트리를 축복하고 추천합니다.`,
      caption: '순복음후쿠오카교회 담임 김 일 목사',
      lists: [
          '건국대학교 축산대학졸업',
          '순복음신학교졸업',
          '감리교신학대학원(M div.)',
          '버지니아비치 리젠트신학대학원 목회박사(D.Min)',
          '순복음신학대학 대학원 교수',
      ],
      profile: '/assets/img/mentor/kim_il.jpg',
      name: '김일 목사님'
  },
  {
      quote: `저는 아가파오 공동체를 좋아합니다.<br />
                거기엔 항상 눈물이 있기 때문입니다.
                억울하거나 슬퍼서 흘리는 눈물이 아닙니다.<br />
                하나님을 너무 사랑해서 울고,
                하나님의 은혜가 너무 크고 감사해서 울고,
                하나님 말씀대로 살고 싶은데 그렇지 못한 안타까움에 웁니다.<br />
                저는 아가파오의 이런 순수함이 너무 좋습니다.
                저는 또 아가파오 공동체를 좋아합니다.<br />
                거기엔 풍성한 사랑의 교제가 있기 때문입니다.
                같은 곳을 바라보는 친구들이 있어서 좋고
                함께 울고 웃어주는 가족들이 있어서 좋습니다.<br />
                함께 밥을 먹으며 웃을 땐 서로의 행복한 미소가 아름다워 좋습니다.<br />
                더욱 좋은 것은
                아가파오엔 예배가 살아있기 때문입니다.
                전심을 다해 예배드리는 그곳에는 언제나 강력한 하나님의 임재가 있습니다.<br />
                막힌 것들을 무너뜨리는 우레와 같은 기도가 있고,
                악한 영을 물리친 다윗의 찬양이 있고
                생명과도 같은 하나님의 말씀이 있어서 좋습니다.<br />
                누가 저에게 아가파오 공동체에 대해 물으면
                저는 주저하지 않고 그곳은 하나님의 꿈이 가득한 곳이라 말합니다.<br />
                그래서 아가파오는 항상 뭔가를 기대하게 만드는 공동체입니다.<br />
                저는 그런 아가파오 공동체를 사랑합니다.`,
      caption: '일산광림교회 담임 박 동 찬 목사',
      lists: [
       '일산광림교회 담임목사',
       '감리교 속회연구원 원장',
       '사) 민족복음화 운동본부 고양시 대표회장',
       '사)월드휴먼브리지 상임대표',
      ],
      profile: '/assets/img/mentor/park_dc.jpg',
      name: '박동찬 목사님'
  },
  {
      quote: `할렐루야!<br />
아가파오 미니스트리는 시작부터 보아온 사역단체입니다. 영혼을 향한 열정으로 세속문화의 중심인 강남에서 강력하게 복음을 선포하며 회개와 치유의 메시지를 전하고 있습니다. 매주 수요예배를 통해 많은 연예인과 청년들이 주님께 돌아오고 있습니다. 특히 미디어와 문화영역에 선한 영향력을 미치고 있기에, 이에 민감한 젊은 세대에게 복음이 널리 전파되길 기대합니다.<br />
작은 기도모임이 어느덧 사역단체로 성장한 것은 하나님의 은혜이며, 이 시대에 꼭 필요한 단체라고 믿습니다. 아가파오 미니스트리를 축복합니다.`,
      caption: '수원하나교회 담임 고 성 준 목사',
      lists: [
          '서울대 수학과와 동 대학원을 졸업',
          '미국 UC Berkeley에서 박사학위',
          '대전 침례신학교 목회 대학원 졸업',
          '현 수원하나교회 담임목사',
      ],
      profile: '/assets/img/mentor/go_sj.jpg',
      name: '고성준 목사님'
  },
  {
      quote: `믿음의 사람들의 인생 최대목적은 내가 살고 있는 시대를 향한 하나님의 경영을 깨닫고 지금 나의 자리로 보내신 아버지의 구체적인 인도하심을 발견하고 준비되어 쓰임 받는데 있습니다.<br />특수한 사역의 부르심을 위해 헌신하는 아가파오는 가장 먼저는 주님을 뜨겁게 사랑하며 그분을 더욱 깊이 아는 일에 온 마음과 정성을 쏟아 부으시기를 축복합니다.<br />
요셉의 가지처럼 뻗어 나가는 곳마다 하나님의 경륜이 풀어지고 요셉의 활처럼 악한자의 활보다 더 강하여 그 견고한 진을 파하는 아가파오 미니스트리가 되기를 축원합니다.`,
      caption: 'CG선교회 담임 윤 성 철 목사',
      lists: [
        'University of Maryland 국제경영학부 졸업',
        'Southern Baptist Theological seminary M.Div 졸업',
        '1997-98 일본선교사',
        '1998-2004 워싱턴 지구촌 교회 청년사역',
        '1999-현재 CG 선교회 대표',
        '2014 뉴저지 하나교회 담임',
      ],
      profile: '/assets/img/mentor/yoon_sc.jpg',
      name: '윤성철 목사님'
  },
  {
      quote: `'아가파오' 는 예배를 사모하는 사람들로 이루어진 자생적인 선교단체이다. 멤버 한 명 한 명이 하나님의 독특한 인도하심 가운데 만나서 아름다운 모임을 만들어 가고 있다. 나는 하나님께서 이들을 통하여 각 영역(경제, 문화, 미디어 등)에 하나님의 나라를 이루고자 하시는 비전을 보았다. 특별히 이 부르심에 헌신한 김무열 선교사는 이 시대에 너무도 필요한 하나님 나라의 일꾼임에 틀림없다. 그를 만나는 사람들 모두 그가 사랑하는 예수에 함께 빠져들기 때문이다. 그래서 나는 이 선교단체를 사랑하며 축복한다.`,
      caption: '뉴라이프 미니스트리 대표 정 이 호 목사',
      lists: [
          '뉴라이프 미니스트리 대표',
          '빌라델피아교회 목사',
          '274 얼라이언스 섬김',
      ],
      profile: '/assets/img/mentor/jung_eh.jpg',
      name: '정이호 목사님'
  },
  {
      quote: `아가파오 미니스트리는 강남지역에서 비즈니스, 엔터테인먼트와 같은 특별한 영역을 오랫동안 섬겨온 공동체입니다. 모든 힘과 권력이 집중되는 이 영역에서 한 영혼을 사랑하는 예수님의 마음으로 많은 사람들을 예수님께 이끌었으며, 또 그들의 변화를 통해 재정과 인적자원 등 많은 것들을 하나님의 일에 흘려 보내는 축복된 공동체입니다.<br />
저는 수년간 이들의 열매를 실제로 보았으며, 어렵기만 할 것 같은 강남 땅에서 오직 기도와 예배로 놀라운 사역을 아름답게 이루어가고 있는 아가파오 미니스트리를 사랑하고 축복합니다.`,
      caption: '기쁨이있는교회 담임 조 지 훈 목사',
      lists: [
          '아세아 연합 신학대학교',
          '한동대학교 졸업',
          '기쁨이 있는 교회 담임 목사',
          '아시안 아웃리치 선교담당 목사',
          'Good TV (C3 TV) : 젊은이 예배 설교',
      ],
      profile: '/assets/img/mentor/cho_jh.jpg',
      name: '조지훈 목사님'
  },
  {
      quote: `아가파오는 비즈니스와 엔터테인먼트 안에 하나님 나라의 기둥을 세우는 공동체입니다.<br />
                     맘몬의 보좌가 있는 최전방에서 하나님 나라의 군사들을 세우는 아가파오는 하나님의 전략입니다. 주님이 아가파오를 마지막 시대 강한 용사로 세우셔서 세상의 한 복판에 그리스도의 보혈의 깃발을 세우고 많은 영혼들을 주님께로 인도하실 것을 믿고 선포합니다.`,
      caption: '수지선한목자교회 담임 강 대 형 목사',
      lists: [
          '수지선한목자교회 담임목사',
          '생수의강 기독학교 교장',
          '갓피플 말씀채널 말씀강사',
          '감리교 신학대학, 대학원 졸업',
          '저서: 파이터-복음을 위해 싸우는 자 (규장)',
      ],
      profile: '/assets/img/mentor/kang_dh.jpg',
      name: '강대형 목사님'
  },
  {
      quote: `할렐루야!<br />
             '사랑하다'라는 가슴 벅찬 하나님의 마음을 이름으로 새긴 아가파오교회를 축복합니다.<br /><br />
             사랑하기에 기뻐하고, 사랑하기에 눈물 흘리며, 사랑하기에 이 땅에 복음을 들고 나아가는 귀한 공동체, 그들 한 명, 한 명의 삶을 통하여 청년들이 주께 돌아오고, 세상의 문화에 그리스도의 향기가 흘러가고 있습니다.<br /><br />
             하나님의 특별한 부르심에 반응하며 그 기적의 길을 걸어가는 아가파오교회를 볼 때에 저 또한 복음의 야성이 회복되고, 열정이 넘치게 됩니다.<br /><br />
             이 땅 위에 다시 예배의 부흥이 일어나고, 열방에 복음이 전파되기 원하시는 하나님의 놀라우신 뜻이 아가파오교회를 통하여 이루어져 갈 것을 기대하고 축복합니다.`,
      caption: '새중앙교회 담임 황 덕 영 목사',
      lists: [
          '새중앙교회 담임목사',
          '(사)한국세계선교협의회(KWMA) 이사',
          '(사)미래목회포럼 포럼좌장',
          '실천신학대학교대학원 이사',
          '다세연(다음 세대를 섬기는 사람들의 연대) 이사',
          '(사)평화한국 부이사장',
          '한국선교사자녀교육개발원(KOMKED) 이사장',
          'FoC(Focus on the Calling) 이사장',
      ],
      profile: '/assets/img/mentor/P_Hwang.png',
      name: '황덕영 목사님'
  },
]

export default function About() {
  return (
    <section className="">
        <header className="bg-center bg-no-repeat bg-cover bg-fixed h-[50vh] bg-[url('/assets/img/agapao-top.jpg')] flex justify-center items-center">
    	   <h1 className="font-bold text-white">AGAPAO CHURCH</h1>
        </header>

        <section className="flex flex-col items-center space-y-4 py-28 px-8">
            <p className="font-[300] text-[1.2rem] leading-[2.2rem] text-[#8a8a8a] text-center tracking-[-0.03rem] font-serif">주의 성령이 내게 임하셨으니 이는 가난한 자에게 복음을 전하게 하시려고<br />
                내게 기름을 부으시고 나를 보내사 포로된 자에게 자유를, 눈먼 자에게 다시 보게 함을 전파하며<br />
                눌린 자를 자유케 하고 주의 은혜의 해를 전파하게 하려 하심이라 하였더라</p>
            <p className="font-extrabold text-[0.85rem] text-[#93a3a1] font-sans">눅 4:18-19</p>
        </section>

        <section className="agapao-infowrap !px-4 md:!px-8">
            <div className="mx-auto max-w-screen-2xl px-8">
                <h1>The Spirit of the Lord is on Me</h1>
                <p>
                    할렐루야! 아가파오 홈페이지를 찾아주신 여러분을 주님의 이름으로 환영합니다.<br />
                    아가파오교회는 2012년 직원 수요 예배를 시작으로 만들어졌습니다.<br />
                    주님의 은혜로 치유와 회복이 일어나고, 억눌렸던 자들이 자유함을 얻으면서 점점 부흥하고 있으며,
                    특히 세상의 빛과 소금의 역할을 감당하고자 하는 그리스도인들이 비즈니스, 엔터테인먼트, 미디어 등 각자의 영역에서 아버지의 마음을 가지고 세워져가고 있습니다.<br />
                    또한 열방에 다윗의 장막이 회복되기를 원하는 마음으로 중앙아시아, 미국, 일본, C국,R국 등 해외에 나아가 예배의 불을 붙이는 사역을 하고 있습니다.<br />
                    아가파오교회의 비전은 가난하고 소외된 자들을 돌보고 필요한 것들을 나눔으로써 주의 사랑을 전하고, 주의 은혜의 해가 전파되는 그 날까지 주의 자녀들을 먹이고, 입히고, 살리고 세워서 온 열방에 보내는 것입니다.
                </p>
                <p className="!text-[#af9273]">
                    Hallelujah! We welcome you to the Agapao website in the name of the Lord.<br />

                    Agapao Church was created in 2012 starting with the employee Wednesday service. <br />
                    We experience healing and restoration by the grace of our Lord, revival and freedom of those who are oppressed, and especially the arising of Christians who have the Father's heart to take role of becoming the light and salt in the world, in their respective areas of business, entertainment, and media.<br />
                    In addition, our church is to spread the flames of worship in Central Asia, the United States, Japan, C, R countries and more, with the desire to recover the Tabernacle of David within all nations.<br />
                    The vision of Agapao Church is to deliver God's love by caring for the poor and isolated, giving their needs, and to feed, clothe, save, raise up and send God's children all over the nation until the year of the Lord's favor is proclaimed.
                </p>
                <h2>
                    아가파오는<br />
                    한국독립교회 및 선교단체연합회 소속 선교단체입니다.<br />
                    <Image src={"/assets/img/kaicam.png"} alt="KAICAM" width={100} height={100} className="mt-4" />
                </h2>
            </div>
        </section>

       <section className="!px-8 bg-[#f8f8f8]">
         <div className="w-full max-w-[1260px] px-6 mx-auto">
             <h2 className="font-black text-center text-[1.6rem] text-[#93a3a1] p-16 !font-sans">고문목사</h2>
             <div className="space-y-20 pb-20">
                 {mentorList.map((mentor, i) => {
                     const isEven = i % 2 === 0;

                     return (
                       <Mentor
                         key={i + mentor.name}
                         data={mentor}
                         layout={isEven}
                       />
                     );
                   })}
             </div>
         </div>
       </section>
    </section>
  );
}
