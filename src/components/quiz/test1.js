import React, { useState, Fragment, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

function QuizApp(props) {


    const [state, setState] = useState({
        score: 0,
        numberOfQuestions: 0,
        correctAnswers: 0,
        wrongAnswers: 0
    })

    useEffect(() => {
        const { state } = props.location;
        if (state) {
            setState({
                score: state.score / state.numberOfQuestions * 100,
                numberOfQuestions: state.numberOfQuestions,
                numberOfAnsweredQuestion: state.numberOfAnsweredQuestion,
                correctAnswers: state.correctAnswers,
                wrongAnswers: state.wrongAnswers
            });
        }
    }, [])


 
    let stats, remark;
    const userScore = state.score;
    // Defining user score
    if (userScore <= 50) {
        remark = 'Better luck next time!'
    } else if (userScore > 50 && userScore <= 70) {
        remark = 'Barely passed!'
    } else if (userScore > 70 && userScore <= 90) {
        remark = 'Awesome Stuff!'
    } else if (userScore > 90 && userScore <= 100) {
        remark = 'Genius at work!'
    }
    if (state != undefined) {
        stats = (
            <Fragment>
                <div className="summary-container">
                    <div className=".quiz-summary">
                        <h4>{remark}</h4>
                        <h2>Ballaringiz: {state.score.toFixed(0)}&#37;</h2>
                        <span className="stats">Savollarning umumiy soni: </span>
                        <span className="stats">{state.numberOfQuestions}</span><br />

                        <span className="stats">bajarishlar soni </span>
                        <span className="stats">{state.numberOfAnsweredQuestion}</span><br />

                        <span className="stats">tori javoblar soni </span>
                        <span className="stats">{state.correctAnswers}</span> <br />

                        <span className="stats">notori javoblar soni </span>
                        <span className="stats">{state.wrongAnswers}</span><br />
                    </div>
                    <section>
                        <ul>
                            <Link to="/" className="options">qaytarilsin</Link>
                            <Link to="/play/quiz" className="options">qayta boshlang</Link>
                        </ul>
                    </section>
                </div>
            </Fragment>
        );
    } else {
        stats = (
            <section>
                <div className=".quiz-summary">
                    <h1 className="no-stats">statistika mavjudmas</h1>
                    <ul>
                        <Link to="/" className="options">qaytarilsin</Link>
                        <Link to="/play/quiz" className="options">testni boshlan!</Link>
                    </ul>
                </div>
            </section>
        );
    }


    return (

        <Fragment>
            <Helmet><title>test-app</title></Helmet>
            {stats}
        </Fragment>
    )
}

export default QuizApp;