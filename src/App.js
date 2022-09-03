import "./App.css";
import {useState } from "react";

function App() {
  

  const data = [
    {
      userId: "1",
      title: "Title 1",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae eaque natus possimus deleniti voluptatibus ad sunt eveniet, ea soluta eligendi quasi earum debitis inventore modi odit quo tempora ex eius",
      tags: "Figma, Typography"
    },
    {
      userId: "2",
      title: "Title 2",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae eaque natus possimus deleniti voluptatibus ad sunt eveniet, ea soluta eligendi quasi earum debitis inventore modi odit quo tempora ex eius",
      tags: "Typography, Layouts, Figma"
    },
    {
      userId: "3",
      title: "Title 3",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae eaque natus possimus deleniti voluptatibus ad sunt eveniet, ea soluta eligendi quasi earum debitis inventore modi odit quo tempora ex eius",
      tags: "Graphic design, Typography, CSS"
    },
    {
      userId: "4",
      title: "Title 4",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae eaque natus possimus deleniti voluptatibus ad sunt eveniet, ea soluta eligendi quasi earum debitis inventore modi odit quo tempora ex eius",
      tags: "Layouts, CSS, Typography"
    },
    {
      userId: "5",
      title: "Title 5",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae eaque natus possimus deleniti voluptatibus ad sunt eveniet, ea soluta eligendi quasi earum debitis inventore modi odit quo tempora ex eius",
      tags: "Figma, Graphic design, Layouts"
    },
    {
      userId: "6",
      title: "Title 6",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae eaque natus possimus deleniti voluptatibus ad sunt eveniet, ea soluta eligendi quasi earum debitis inventore modi odit quo tempora ex eius",
      tags: "Graphic design, CSS"
    },
    {
      userId: "7",
      title: "Title 7",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae eaque natus possimus deleniti voluptatibus ad sunt eveniet, ea soluta eligendi quasi earum debitis inventore modi odit quo tempora ex eius",
      tags: "Figma, Layouts, CSS"
    },
    {
      userId: "8",
      title: "Title 8",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae eaque natus possimus deleniti voluptatibus ad sunt eveniet, ea soluta eligendi quasi earum debitis inventore modi odit quo tempora ex eius",
      tags: "Layouts, CSS, Typography"
    },
    {
      userId: "9",
      title: "Title 9",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae eaque natus possimus deleniti voluptatibus ad sunt eveniet, ea soluta eligendi quasi earum debitis inventore modi odit quo tempora ex eius",
      tags: "Graphic design, Typography"
    },
    {
      userId: "10",
      title: "Title 10",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae eaque natus possimus deleniti voluptatibus ad sunt eveniet, ea soluta eligendi quasi earum debitis inventore modi odit quo tempora ex eius",
      tags: "Figma, CSS, Layouts"
    },
    {
      userId: "11",
      title: "Title 11",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae eaque natus possimus deleniti voluptatibus ad sunt eveniet, ea soluta eligendi quasi earum debitis inventore modi odit quo tempora ex eius",
      tags: "Typography, CSS"
    },
    {
      userId: "12",
      title: "Title 12",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae eaque natus possimus deleniti voluptatibus ad sunt eveniet, ea soluta eligendi quasi earum debitis inventore modi odit quo tempora ex eius",
      tags: "Graphic design, Figma, CSS, Layouts"
    }
  ];

  const [items, setItems] = useState(data);
  const [visible, setVisible] = useState(6);

  // useEffect(() => {
  //   // fetch("https://jsonplaceholder.typicode.com/posts")
  //   //   .then((res) => res.json())
  //   //   .then((data) => {
  //   //     setItems(data);
  //   //     console.log(data)
  //   //   });
  //   setItems(data)
  // },[]);

  const loadItems = () => {
    setVisible((prevState) => prevState + 3);
  };

  const handleSearch =(searchTerm) => {
     
      const updatedArray = data.slice(0, visible).filter((elem) =>{ return elem.tags.includes(searchTerm)});

      setItems(updatedArray);
  }


  const handleReset = () => {
    setItems(data)
  }




  return (
    <div>
      <div className="btn-container">
          <button onClick ={() => handleReset()}>All</button>
          <button onClick ={() => handleSearch('Figma')}>Figma</button>
          <button onClick ={() => handleSearch('Typography')}>Typography</button>
          <button onClick ={() => handleSearch('CSS')}>CSS</button>
          <button onClick ={() => handleSearch('Graphic design')}>Graphic Design</button>
          <button onClick ={() => handleSearch('Layouts')}>Layouts</button>
          
        </div>
      <div className="container">
        
        {items.slice(0, visible).map((item) => (
          <div className="card" key={item.userId}>
            <img
              src="https://source.unsplash.com/random/400x200"
              alt="unsplash"
            ></img>
            <div className="card-title">
              <h4>{item.title}</h4>
            </div>
            <div className="card-tags">
              <span>{item.tags}</span>
            </div>
          </div>
        ))}
        <button className="load-btn" onClick={loadItems}>Load More</button>
      </div>
    </div>
  );
}

export default App;
