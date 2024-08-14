import "./styles.css";

import { useState } from "react";

function App() {
  return <RobotList />;
}

const RobotList = () => {
  const [inputValue, setInputValue] = useState("");
  const [robots, setRobots] = useState([]);
  const [error, setError] = useState("");

  const handleAddRobot = () => {
    if (robots.includes(inputValue)) {
      setError("Robot listede var!");
    } else {
      setError("");
      setRobots([...robots, inputValue]);
    }
    setInputValue("");
  };

  const handleRemoveRobot = (robot) => {
    setRobots(robots.filter((robot) => robot !== inputValue));
  };
  return (
    <div className="container">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Bir robot ismi girin"
      />
      <button onClick={handleAddRobot}>Ekle</button>
      {error && <p className="error">{error}</p>}
      <div className="robot-list">
        {robots.map((robot, index) => (
          <img
            key={index}
            src={`https://robohash.org/${robot}`}
            alt={`Robot ${robot}`}
            onClick={() => handleRemoveRobot(robot)}
          />
        ))}
      </div>
    </div>
  );
};
export default App;
