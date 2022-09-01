import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(6);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const showMoreItems = () => {
    setVisible((prevState) => prevState + 3);
  };

  return (
    <div>
      <div className="container">
        {items.slice(0, visible).map((item) => (
          <div className="card">
            <img src="https://source.unsplash.com/random/600x300?v=1" alt="unsplash"></img>
            <div>
              <p>{item.title}</p>
            </div>
          </div>
        ))}
         <button onClick={showMoreItems}>Load More</button>
      </div>
     
    </div>
  );
}

export default App;
