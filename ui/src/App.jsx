import * as React from "react";
import SessionGlance from "./tutor/SessionGlance";
import CardLayout from "./tutor/CardLayout";
const user = {
  id: "1",
  userid: "1",
  tutorid: "1",
  courseid: "1",
  topicid: "1",
  name: "Luis Garcia",
  email: "lgarcia29@ewu.edu",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  retrospective:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  role: "1",
  //sessions
  //Courses
};

export default () => {
  return (
    <>
      <div className="home" style={{ height: "100vh" }}>
        <SessionGlance
          name={user.name}
          email={user.email}
          role={user.role}
          description={user.description}
          retrospective={user.retrospective}
        />
      </div>
      <div className="inqueue">
        <CardLayout />
      </div>
    </>
  );
};
