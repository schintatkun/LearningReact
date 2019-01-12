// import React from "react";
import React, { Component } from "react";
// import ReactDOM from "react-dom";
import { render } from "react-dom";

let skiData = {
  total: 50,
  powder: 20,
  backcountry: 10,
  goal: 100
};
//Create component
// class SkiDayCounter extends React.Component {
class SkiDayCounter extends Component {
  //adding custom methods
  getPercent = decimal => {
    return decimal * 100 + "%";
  };
  calcGoalProgress = (total, goal) => {
    return this.getPercent(total / goal);
  };
  render() {
    const { total, powder, backcountry, goal } = this.props;
    return (
      <section>
        <div>
          <p>Total Days: {total}</p>
        </div>
        <div>
          <p>Powder Days: {powder}</p>
        </div>
        <div>
          <p>Backcountry Days: {backcountry}</p>
        </div>
        <div>
          <p>Goal Days: {goal}</p>
        </div>
        <div>
          <p>Goal Progress: {this.calcGoalProgress(total, goal)}</p>
        </div>
      </section>
    );
  }
}

//create function component 
//another way to do as it can be compared to above  
//We can use function to create component
const getPercent = decimal =>{
    return decimal * 100+'%'
}
const calcGoalProgress = (total, goal)=>{
    return getPercent(total/goal)
}
//use {} access props by name directly instead of props.total and passing SkiDayCounter2 = (props)=> {} in function call
const SkiDayCounter2 = ({total, powder, backcountry, goal}) => {
  return (
    <section>
      <div>
        <p>Total Days: {total}</p>
      </div>
      <div>
        <p>Powder Days: {powder}</p>
      </div>
      <div>
        <p>Backcountry Days: {backcountry}</p>
      </div>
      <div>
        <p>Goal Days: {goal}</p>
      </div>
      <div>
        <p>Goal Progress: {calcGoalProgress(total, goal)}</p>
      </div>
    </section>
  );
};

//Component name must be capitalized
// class Message extends React.Component {
//     render() {
//         console.log(this.props)
//         return (
//             <div>
//                 <h1 style={{color: this.props.color}}>
//                     {this.props.msg}
//                 </h1>
//                 <p>I'll check back in {this.props.minutes} minutes.</p>
//             </div>
//         )
//     }
// }

// ReactDOM.render(
// <Message color="blue" minutes={10} msg="How are you?"/>,


//array of data  -- act as a database 
let bookList = [
    {"title": "Naruto", "author": "some Japanese guy", "pages": 260 },
    {"title": "YuYu Hakusho", "author": "some Japanese guy", "pages": 3640 },
    {"title": "Black Clover", "author": "some Japanese guy", "pages": 120 },
    {"title": "Bleach", "author": "some Japanese guy", "pages": 2260 }
]

// const Library = ({books}) => {
// adding state  we need to create class component  
class Library extends React.Component {
    // state = { open: false }
    // line above can replace a whole constructor function below

    constructor(props){
        super(props)
        this.state = {
            open: false
        }
        //when we're using constructor method, we need bind this
        this.toggleOpenClosed = this.toggleOpenClosed.bind(this)
    }

    //toggleOpenClosed = () => {
    toggleOpenClosed() {
        
        //setState is asynchronouse if you are relied on previouse state to set a new value
        // you can use a callback function inside of set State
        
        this.setState(prevState => ({
            open: !prevState.open
        }))
        // this.setState({
        //    open: !this.state.open
        // })
    }
    render(){
        console.log(this.state)
        const {books} = this.props
        // const books = this.props.books
    return (
        <div>
            <h1>The Libary is {this.state.open ? 'open' : 'closed'}</h1>
            <button onClick= {this.toggleOpenClosed}>Click to Change</button>
            {books.map(
                (book,i)=> <Book key={i} title={book.title} author={book.author} pages= {book.pages}/>
            )}
        </div>
    )
}
}
const Book = ({title, author, pages}) => {
    return (
        <section>
            <h2>Title : {title}</h2>
            <p>By : {author}</p>
            <p>Pages : {pages} pages</p>
        </section>
    )
}


render(
//   <SkiDayCounter2
//     total={skiData.total}
//     powder={skiData.power}
//     backcountry={skiData.backcountry}
//     goal={skiData.goal}
//   />,

<Library books={bookList}/>
,
document.getElementById("root")
);
