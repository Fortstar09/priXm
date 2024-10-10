// import { HeartIcon } from "@radix-ui/react-icons";

type RantCardProps = {
  message: string;
  name: string;
};

const RantCard = ({ message, name }: RantCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className=" h-auto leading-relaxed p-3 md:h-[230px] font-light text-sm lg:text-base flex justify-center items-center border rounded-t-[6px] md:p-6">
        {message}
      </div>
      <div className="flex justify-between gap-1 items-center w-full p-2 lg:py-2 lg:px-3 md:px-4 bg-orange-400 rounded-b-[6px]">
        <h3 className="text-xl text-white font-light capitalize">{name}</h3>
        {/* <HeartIcon className="text-white" /> */}
      </div>
    </div>
  );
};

export default RantCard;
