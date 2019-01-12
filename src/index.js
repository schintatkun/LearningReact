// import React from "react";
import React, {Component} from "react";
// import ReactDOM from "react-dom";
import {render} from "react-dom";

let skiData = {
    total: 50,
    powder: 20,
    backcountry: 10,
    goal: 100
}

class SkiDayCounter extends Component {
// class SkiDayCounter extends React.Component {
    render() {
        const {total, powder, backcountry, goal} = this.props;
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
            </section>
        )
    }
}


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

render(
    // ReactDOM.render(
    // <Message color="blue" minutes={10} msg="How are you?"/>, 
    <SkiDayCounter 
    total= {skiData.total}
    powder= {skiData.power}
    backcountry={skiData.backcountry}
    goal= {skiData.goal}
    />,
    document.getElementById("root")
)
