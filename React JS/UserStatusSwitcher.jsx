import { useState } from "react";

function UserStatusSwitcher() {
  const [isOnline, setIsOnline] = useState(true); // true means online

  const toggleStatus = (e) => {
    e.preventDefault();
    setIsOnline((prev) => !prev);
  };

  return (
    <div>
      <h4>User Status</h4>
      {isOnline ? (
        <>
          <h5 style={{ color: "green" }}>Online</h5>
          <button onClick={toggleStatus}>Go offline</button>
        </>
      ) : (
        <>
          <h5 style={{ color: "red" }}>Offline</h5>
          <button onClick={toggleStatus}>Go online</button>
        </>
      )}
    </div>
  );
}

export default UserStatusSwitcher;
