import React from "react";
import ClientsData from "./ClientsData";

const Clients = () => {
  return (
    <div className="bg-grey-50" id="clients">
      <div className="container py-16 md:py-20">
        <div className="mx-auto w-full sm:w-3/4 lg:w-full">
          <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
            My latest clients
          </h2>
          <ClientsData/>
        </div>
      </div>
    </div>
  );
};

export default Clients;
