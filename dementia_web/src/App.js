import './App.css';
import { withRouter } from "react-router-dom";

function App(props) {
    return (
        <div className="wrapper">
            <div className="head">Quizzes</div>
            <div className="cats">
                <div className="cat" onClick={() => props.history.push("clock")}>
                    <div className="img">
                        <img src="https://freepngimg.com/thumb/clock/7-wall-clock-png-image.png" alt="Clock"/>
                    </div>
                    <div className="title">Time Quiz</div>
                </div>
                <div className="cat" onClick={() => props.history.push("colour")}>
                    <div className="img">
                        <div className="teal-circle"/>
                    </div>
                    <div className="title">Colours Quiz</div>
                </div>
                <div className="cat" onClick={() => props.history.push("math")}>
                    <div className="img">
                        <div className="math-eq">2 + 3 = ___</div>
                    </div>
                    <div className="title">Mathematics Quiz</div>
                </div>
                <div className="cat" onClick={() => props.history.push("object")}>
                    <div className="img">
                        <img src="https://images-na.ssl-images-amazon.com/images/I/71bp9IpcK-L._SX522_.jpg" alt="Clock"/>
                    </div>
                    <div className="title">Object Recognition Quiz</div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(App);
