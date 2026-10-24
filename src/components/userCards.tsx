import Image from "next/image";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className=" rounded-2xl odd:bg-[#f0f4f8] even:bg-[#f4f7f4] p-4 flex-1 min-w-[130px] border border-slate-100 shadow-sm">
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-slate-600 font-medium shadow-2xs">
          2024/25
        </span>
        <Image src="/more.png" alt="" width={20} height={20} className="opacity-60 cursor-pointer" />
      </div>
      <h1 className="text-2xl font-semibold my-4 text-slate-800">1,234</h1>
      <h2 className="capitalize text-sm font-medium text-slate-500">{type}s</h2>
    </div>
  );
};

export default UserCard;