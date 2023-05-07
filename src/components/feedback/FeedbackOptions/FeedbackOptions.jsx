import css from "./FeedbackOptions.module.css";

export const FeedbackOptions =({options, onLeaveFeedback})=>{
return (
<div>
    {options.map(option => (  
            <button className = {css.feedbackButton} key={option.name} type='button' name = {option.name} onClick={onLeaveFeedback}>{option.name}</button>
        ))}
</div>);
};