import Image from "next/image";

type Props = {
    quote: string;
    caption: string;
    lists: string[];
    profile: string;
    name: string;
}

export default function Mentor({data, layout}: {data: Props, layout: number}) {

  return (
     <ul className={`flex pt-0 ${layout ? '' : 'flex-row-reverse'}`} >
       <li className="left greeting">
           <div className="text-gray-500 leading-7" dangerouslySetInnerHTML={{ __html: data.quote }}></div>
           <p className="mt-4"><em>{data.caption}</em></p>
       </li>
       <li className="center list">
           <ul>
               {data.lists.map((list, i) => (
                   <li key={list+i}>{list}</li>
               ))}
           </ul>
       </li>
       <li className="right img">
           <Image src={data.profile} alt={data.name} width={200} height={200} className="aspect-square object-cover rounded-full" />
           <h3>{data.name}</h3>
       </li>
   </ul>
  );
}