import { use } from "react";
import ModelsCard from "./ModelsCard";

const Models = ({ dataPromise, carts, setCarts }) => {
  const data = use(dataPromise);

  return (
    <div className="container mx-auto max-w-281 p-15">
      <div className="card  grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {data.map((data) => {
          return (
            <ModelsCard
              data={data}
              key={data.id}
              carts={carts}
              setCarts={setCarts}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Models;
