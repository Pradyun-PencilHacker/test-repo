import "./App.css";
import {useState } from "react";

function App() {
  

  const data = [
    {
      userId: "1",
      title: "Guide to using Figma",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae eaque natus possimus deleniti voluptatibus ad sunt eveniet, ea soluta eligendi quasi earum debitis inventore modi odit quo tempora ex eius",
      tags: "#Figma #Typography"
    },
    {
      userId: "2",
      title: "Use illustrations to make your layout pop",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae eaque natus possimus deleniti voluptatibus ad sunt eveniet, ea soluta eligendi quasi earum debitis inventore modi odit quo tempora ex eius",
      tags: "#Typography #Layouts #Figma"
    },
    {
      userId: "3",
      title: "How not to use colour",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae eaque natus possimus deleniti voluptatibus ad sunt eveniet, ea soluta eligendi quasi earum debitis inventore modi odit quo tempora ex eius",
      tags: "#Graphic design #Typography #CSS"
    },
    {
      userId: "4",
      title: "The basics of layout",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae eaque natus possimus deleniti voluptatibus ad sunt eveniet, ea soluta eligendi quasi earum debitis inventore modi odit quo tempora ex eius",
      tags: "#Layouts #CSS #Typography"
    },
    {
      userId: "5",
      title: "Wireframing 101",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae eaque natus possimus deleniti voluptatibus ad sunt eveniet, ea soluta eligendi quasi earum debitis inventore modi odit quo tempora ex eius",
      tags: "#Figma #Graphic design #Layouts"
    },
    {
      userId: "6",
      title: "10 ways art inspires design",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae eaque natus possimus deleniti voluptatibus ad sunt eveniet, ea soluta eligendi quasi earum debitis inventore modi odit quo tempora ex eius",
      tags: "#Graphic design #CSS"
    },
    {
      userId: "7",
      title: "Mistakes to avoid as a newbie designer",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae eaque natus possimus deleniti voluptatibus ad sunt eveniet, ea soluta eligendi quasi earum debitis inventore modi odit quo tempora ex eius",
      tags: "#Figma #Layouts #CSS"
    },
    {
      userId: "8",
      title: "Common design thinking pitfalls",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae eaque natus possimus deleniti voluptatibus ad sunt eveniet, ea soluta eligendi quasi earum debitis inventore modi odit quo tempora ex eius",
      tags: "#Layouts #CSS #Typography"
    },
    {
      userId: "9",
      title: "How to take down a design brief",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae eaque natus possimus deleniti voluptatibus ad sunt eveniet, ea soluta eligendi quasi earum debitis inventore modi odit quo tempora ex eius",
      tags: "#Graphic design #Typography"
    },
    {
      userId: "10",
      title: "Creating a playful color palette",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae eaque natus possimus deleniti voluptatibus ad sunt eveniet, ea soluta eligendi quasi earum debitis inventore modi odit quo tempora ex eius",
      tags: "#Figma #CSS #Layouts"
    },
    {
      userId: "11",
      title: "Utilizing type to make your design stand out",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae eaque natus possimus deleniti voluptatibus ad sunt eveniet, ea soluta eligendi quasi earum debitis inventore modi odit quo tempora ex eius",
      tags: "#Typography #CSS"
    },
    {
      userId: "12",
      title: "Take your Photoshop skills to the next level",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae eaque natus possimus deleniti voluptatibus ad sunt eveniet, ea soluta eligendi quasi earum debitis inventore modi odit quo tempora ex eius",
      tags: "#Graphic design #Figma #CSS #Layouts"
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
              <h3>{item.title}</h3>
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
