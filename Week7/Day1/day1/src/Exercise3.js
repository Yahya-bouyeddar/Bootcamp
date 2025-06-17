import { Component } from "react";


const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };

class Exercise extends Component {
   
  render() {
    return (
      <div>
        <h1 style={style_header}>this is header</h1>
        <p>this is a paragraphe </p>
        <a href="https://www.google.com">this is a link</a>
        <form style={{display:'flex',flexDirection:'column'}}>
          <label>this is a form</label>
          <label>write your name</label>
          <input type="text"></input>
          <button type="submit">submit</button>
          <p>here is a image</p>
          {/* <img src="logo.svg"></img> */}
          <p>this is a list</p>
          <ul>
            <li>item1</li>
            <li>item2</li>
            <li>item3</li>
          </ul>
        </form>
      </div>
    );
  }
}
export default Exercise
