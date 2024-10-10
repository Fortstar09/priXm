import RantCard from "@/components/RantCard";
import { SkeletonCard } from "@/components/SkeletonCard";
import { useState, useEffect } from "react";

interface Rant {
  id: string;
  name: string;
  message: string;
}

const ViewRants = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [rantData, setRantData] = useState<Rant[]>([]);

  useEffect(() => {
    fetch("https://prixm-c4e73-default-rtdb.firebaseio.com/rants.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const rants = [];

        for (const key in data) {
          const rant = {
            id: key,
            ...data[key],
          };
          rants.push(rant);
        }
        setIsLoading(false);
        setRantData(rants);
        console.log(rants);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="px-2 md:px-6 lg:px-10 text-gray-500">
      <h2 className="text-2xl font-medium py-6">
        Home of <span className="text-orange-500">Rants.</span>
      </h2>
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6">
          {rantData.map((rant) => (
            <RantCard key={rant.id} message={rant.message} name={rant.name} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewRants;
