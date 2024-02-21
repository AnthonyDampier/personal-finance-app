import React, { useState } from "react";

//utils
import useWindowDimensions from "../../Utils/UseWindowDimensions";

const DraggableBox = ({
  initialX,
  initialY,
  boxWidth,
  boxHeight,
  userInfo,
  userFinancialInfo,
  userMortgageInfo,
}) => {
  const {windowWidth, windowHeight} = useWindowDimensions();
  console.log(windowWidth, windowHeight);

  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: (initialX + (windowWidth - boxWidth)), y: initialY});
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });


  const onMouseDown = (e) => {
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragOffset.x,
      y: e.clientY - dragOffset.y,
    });
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      style={{
        width: `${windowWidth}px`,
        height: `${windowHeight}px`,
        position: "absolute",
      }}
      onMouseMove={onMouseMove}
      >
      <div
        style={{
          width: `${boxWidth}px`,
          minheight: `${boxHeight}px`,
          position: "absolute",
          left: `${position.x}px`,
          top: `${position.y}px`,
          cursor: isDragging ? "grabbing" : "grab",
          background: "#ddd",
          justifyContent: "center",
          userSelect: "none",
          textAlign: "left",
          padding: "10px",
        }}
        onMouseDown={onMouseDown}
        
        onMouseUp={onMouseUp}
      >
        <h1>Draggable Box</h1>
        <p>Home Owner: {userInfo.name}</p>
        <p>Home Owner Age: {userInfo.age}</p>
        <p>Home Owner Email: {userInfo.email}</p>
        <p>Home Owner Address: {userInfo.address}</p>
        <p>Home Owner City: {userInfo.city}</p>
        <p>Home Owner Country: {userInfo.country}</p>
        <p>Home Owner Income: {userFinancialInfo.income}</p>
        <p>Home Owner Expenses: {userFinancialInfo.expenses}</p>
        <p>Home Owner Savings: {userFinancialInfo.savings}</p>
        <p>Home Owner Mortgage Amount: {userMortgageInfo.mortgageAmount}</p>
        <p>Home Owner Interest Rate: {userMortgageInfo.interestRate}</p>
        <p>Home Owner Loan Term: {userMortgageInfo.loanTerm}</p>
        <p>Home Owner Down Payment: {userMortgageInfo.downPayment}</p>
      </div>
    </div>
  );
};

export default DraggableBox;
