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
        <CardTitle className="text-xl">Rants and Bants</CardTitle>
        <CardDescription>eXpress your Joy and Love </CardDescription>
      </CardHeader>
      <form onSubmit={submitHandler}>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Display name</Label>
              <Input id="name" placeholder="Enter any name" ref={nameRef} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="rant">Message box</Label>
            </div>
            <Textarea
              id="rant"
              placeholder="Whether it is anger, frustration, joy, or sadness—speak from your heart"
              ref={messageRef}
              className="h-32"
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            // onClick={() => toast("Your rant has been uploaded!")}
            className="w-full"
          >
            Show Toast
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default UploadForm;
