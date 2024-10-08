import { HeartIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

type RantCardProps = {
  message: string;
  name: string;
};

const RantCard = ({ message, name }: RantCardProps) => {
  return (
    <div className="flex flex-col items-start justify-start gap-1 md:gap-2">
      <div className=" font-light border rounded-[6px] p-6">{message}</div>
      <div className="flex flex-col">
        <h3 className="text-2xl text-gray-700 font-normal">{name}</h3>
        <Button className="px-0 py-0 text-gray-500 font-thin" variant="link">
          <HeartIcon className="mr-2 h-4 w-4" /> Add to favorite
        </Button>
      </div>
    </div>
  );
};

export default RantCard;
