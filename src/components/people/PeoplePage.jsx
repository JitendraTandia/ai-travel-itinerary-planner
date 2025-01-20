import React from "react";
import ChatBox from "./ChatBox";
import ChatPeopleList from "./ChatPeopleList";

const PeoplePage = () => {
  return (
    <section className="flex min-h-[80vh] justify-center">
      <ChatPeopleList />
      <ChatBox />
    </section>
  );
};

export default PeoplePage;
