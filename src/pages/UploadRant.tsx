import UploadForm from "@/components/UploadForm";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

export function UploadRant() {
  function addRant(rantMessage: {
    name: string | undefined;
    message: string | undefined;
  }) {
    fetch("https://prixm-c4e73-default-rtdb.firebaseio.com/rants.json", {
      method: "POST",
      body: JSON.stringify(rantMessage),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          toast("Network response was not ok");
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(() => {
        toast("Rant added successfully");
        // You could update state or show a success message here
      })
      .catch((error) => {
        toast("Error adding rant:", error);
        // You could show an error message to the user here
      });
  }

  return (
    <>
      <div className="justify-center flex items-center mb-16">
        <UploadForm addRantHandler={addRant} />
      </div>
      <Toaster />
    </>
  );
}
