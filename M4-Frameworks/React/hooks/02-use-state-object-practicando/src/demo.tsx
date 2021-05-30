import React from "react";

interface userInfo {
  name: string;
  lastname: string;
}

export const MyComponent: React.FC = () => {
  const [userInfo, setUserInfo] = React.useState<userInfo>({
    name: "John",
    lastname: "Doe",
  });

  return (
    <>
      <h4>
        {userInfo.name} {userInfo.lastname}
      </h4>
      <input
        value={userInfo.name}
        // onChange={(e) => userInfo.name = e.target.value}
        onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
      />
      <input
        value={userInfo.lastname}
        // onChange={(e) => userInfo.lastname = e.target.value}
        onChange={(e) => setUserInfo({ ...userInfo, lastname: e.target.value })}
      />
      
    </>
  );
};
