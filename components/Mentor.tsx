import Image from "next/image";

type Props = {
    quote: string;
    caption: string;
    lists: string[];
    profile: string;
    name: string;
}

export default function Mentor({ data, layout }: { data: Props; layout: boolean }) {
    return (
      <ul
        className={`flex ${layout ? "flex-col-reverse md:flex-row" : "flex-col-reverse md:flex-row-reverse"} w-full rounded-lg overflow-hidden`}
      >
        {/* Quote + Caption Block */}
        <li className="w-full md:w-1/2 p-8 !bg-white text-left">
          <div
            className="text-gray-600 leading-7"
            dangerouslySetInnerHTML={{ __html: data.quote }}
          ></div>
          <p className="mt-4 text-[0.95rem] text-[#af9273] underline font-medium">
            <em>{data.caption}</em>
          </p>
        </li>

        {/* List Block */}
        <li className="w-full md:w-1/4 p-6 bg-[#f0f0f0]">
          <ul className="list-disc pl-5 text-sm text-gray-800 space-y-2">
            {data.lists.map((list, i) => (
              <li key={list + i}>{list}</li>
            ))}
          </ul>
        </li>

        <li className="w-full md:w-1/4 flex flex-col items-center justify-center p-6">
          <Image
            src={data.profile}
            alt={data.name}
            width={180}
            height={180}
            className="rounded-full object-cover w-44 h-44 mb-4"
          />
          <h3 className="text-lg font-semibold text-center">{data.name}</h3>
        </li>
      </ul>
    );
  }