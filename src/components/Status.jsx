import React from "react";

const Status = ({ items }) => {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your list 🚀</em>
      </p>
    );
  const totalItem = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / totalItem) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈"
          : `You have ${totalItem} items on your list and you aready packed ${numPacked} (${percentage}%) 🎉`}
      </em>
    </footer>
  );
};

export default Status;
