import { useTabContext } from '@material-ui/lab'
import React, { useState } from 'react'

const HooksApp = () => {
    const [courseGoals, setCourseGoals] = useState([
        { id: 'cg1', text: 'Finish the Course' },
        { id: 'cg2', text: 'Do Some Sample Projects' },
        { id: 'cg3', text: 'Start writing about React' },
    ])
    const addNewGoalHandler = (newgoal) => {
        setCourseGoals(prevCourseGoals => prevCourseGoals.concat(newgoal));
    }

    return (
        <div className="course-goals">
            <h2>Course Goals</h2>
            <NewGoal onAddGoal={addNewGoalHandler}></NewGoal>
            <GoalList goals={courseGoals}></GoalList>
        </div>
    )
}

export default HooksApp


const NewGoal = props => {

    const [enteredText, setenteredText] = useState('');

    const addGoalHandler = event => {

        event.preventDefault();

        const newgoal = {
            id: Math.random().toString(),
            text: enteredText
        }

        setenteredText('');

        props.onAddGoal(newgoal);
    }


    const onTextChangeHandler = event => {
        setenteredText(event.target.value);
    }

    return (
        <form className="new-goal" onSubmit={addGoalHandler}>
            <input type="text" value={enteredText} onChange={onTextChangeHandler} />
            <button type="submit">New Goal</button>
        </form>
    );
}

const GoalList = (props) => {
    return (
        <ul className="goal-list">
            {
                props.goals.map((goals) => {
                    return <li key={goals.id}>{goals.text}</li>
                })
            }
        </ul>
    );
};