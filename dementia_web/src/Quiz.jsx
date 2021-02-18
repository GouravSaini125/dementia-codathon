import React, {useRef} from 'react';
import {withRouter} from "react-router-dom";

const getData = quiz => {
    switch (quiz) {
        case "clock":
            return {
                head: "Time Quiz",
                items: [
                    {
                        image: "https://previews.123rf.com/images/yurakp/yurakp1504/yurakp150400005/38641574-wall-clock-isolated-on-the-white-background-.jpg",
                        options: ["01:12", "02:05", "07:08", "10:20"],
                        correct: "01:12"
                    },
                    {
                        image: "https://previews.123rf.com/images/monticello/monticello1412/monticello141200012/34393113-wall-clock-isolated-on-white-background-ten-past-ten.jpg",
                        options: ["06:10", "02:50", "10:11", "10:20"],
                        correct: "10:11"
                    },
                    {
                        image: "https://previews.123rf.com/images/bond80/bond801107/bond80110700008/10049105-blue-wall-clock-isolated-on-white-background.jpg",
                        options: ["03:12", "05:27", "07:08", "04:20"],
                        correct: "05:27"
                    },
                ]
            }
        case "colour":
            return {
                head: "Colours Quiz",
                items: [
                    {
                        image: "red",
                        options: ["green", "red", "blue", "black"],
                        correct: "red"
                    },
                    {
                        image: "blue",
                        options: ["green", "red", "blue", "black"],
                        correct: "blue"
                    },
                    {
                        image: "yellow",
                        options: ["green", "blue", "pink", "yellow"],
                        correct: "yellow"
                    },
                ]
            }
        case "math":
            return {
                head: "Mathematics Quiz",
                items: [
                    {
                        image: "3 + 6 = ___",
                        options: ["12", "6", "9", "3"],
                        correct: "9"
                    },
                    {
                        image: "2 * 5 = ___",
                        options: ["10", "15", "7", "3"],
                        correct: "10"
                    },
                    {
                        image: "7 - 5",
                        options: ["12", "7", "10", "2"],
                        correct: "2"
                    },
                ]
            }
        default:
            return {
                head: "Objects Quiz",
                items: [
                    {
                        image: "https://images-na.ssl-images-amazon.com/images/I/71bp9IpcK-L._SX522_.jpg",
                        options: ["laptop", "mobile", "clock", "aeroplane"],
                        correct: "mobile"
                    },
                    {
                        image: "https://images-na.ssl-images-amazon.com/images/I/51zA6gOLLML._SX679_.jpg",
                        options: ["chair", "table", "mobile", "car"],
                        correct: "chair"
                    },
                    {
                        image: "https://images-na.ssl-images-amazon.com/images/I/916q4pTEEaL._UY625_.jpg",
                        options: ["shoes", "shirt", "chair", "None"],
                        correct: "shoes"
                    },
                ]
            }
    }
}

function Quiz(props) {

    const quiz = props.match.params.quiz;
    const data = getData(quiz);
    const formRef = useRef(null);

    const handleEval = () => {
        const scoreArr = data.items.map((item, index) => {
            if (formRef.current["field" + index].value === item.correct) {
                return 1;
            }
            return 0;
        })
        alert("Your score is : " + scoreArr.reduce((a, b) => a + b, 0))
        props.history.push("/");
    }

    const getImage = (image) => {
        switch (quiz) {
            case "colour":
                return <div className="teal-circle" style={{backgroundColor: image}}/>
            case "math":
                return <div className="math-eq">{image}</div>
            default:
                return <img src={image} alt="Clock"/>
        }
    }

    return (
        <div className="wrapper">
            <div className="head">{data.head}</div>
            <form id="my-form" ref={formRef}>
                <div className="cats">
                    {
                        data.items.map((item, index) => (
                            <div className="cat" key={item.image}>
                                <div className="img">
                                    {
                                        getImage(item.image)
                                    }
                                </div>
                                <fieldset id={"field" + index}>
                                    {
                                        item.options.map((opt, i) => (
                                            <label key={opt}>
                                                <input type="radio" value={opt}
                                                       name={"field" + index}/> {opt}
                                            </label>
                                        ))
                                    }
                                </fieldset>
                            </div>
                        ))
                    }
                </div>
            </form>
            <div className="btn">
                <button onClick={handleEval}>Submit</button>
            </div>
        </div>
    )
}

export default withRouter(Quiz);