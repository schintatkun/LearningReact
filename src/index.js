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

const Library = () => {
    return (
        <div>
            <Book title="Naruto" author="Japanese" pages= {50}/>
            <Book title="Naruto" author="Japanese" pages= {50}/>
            <Book title="Naruto" author="Japanese" pages= {50}/>
        </div>
    )
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

<Library/>
,
document.getElementById("root")
);
