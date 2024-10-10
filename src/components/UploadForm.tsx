import { useRef } from "react";
// import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const UploadForm = ({
  addRantHandler,
}: {
  addRantHandler: (rantMessage: {
    name: string | undefined;
    message: string | undefined;
  }) => void;
}) => {
  const nameRef: React.RefObject<HTMLInputElement> = useRef(null);
  const messageRef: React.RefObject<HTMLTextAreaElement> = useRef(null);

  function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const enteredName = nameRef.current?.value;
    const enteredMessage = messageRef.current?.value;

    const rantMessage = { name: enteredName, message: enteredMessage };

    addRantHandler(rantMessage);
    nameRef.current!.value = "";
    messageRef.current!.value = "";
  }

  return (
    <Card className="w-[350px] md:w-[500px]">
      <CardHeader>
        <CardTitle className="text-2xl text-[#FF9E6D]">Randow Rants.</CardTitle>
        <CardDescription className="text-[12px] text-gray-400 md:max-w-[75%]">
          Let it out! Prixm is your space to freely express random thoughts,
          rants, or anything on your mind.
        </CardDescription>
      </CardHeader>
      <form onSubmit={submitHandler}>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name" className="text-gray-500 font-normal">
                Display name
              </Label>
              <Input
                id="name"
                placeholder=""
                className=" placeholder-gray-200 text-sm"
                ref={nameRef}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="rant" className="text-gray-500 font-normal">
                Message box
              </Label>
            </div>
            <Textarea
              id="rant"
              placeholder=""
              ref={messageRef}
              className="h-32 text-sm "
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            variant="default"
            // onClick={() => toast("Your rant has been uploaded!")}
            className="w-full hover:bg-orange-300 bg-[#FF9E6D] text-white"
          >
            Upload Rant
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default UploadForm;
