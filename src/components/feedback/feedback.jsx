import { Component } from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import buttonsData from "../buttonsData.json";

export class Feedback extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0,
    }

    incrementButton = (e) => {
        this.setState((prevState) => ({
          [e.target.name]: prevState[e.target.name]+1,
        }));
 
        this.countPositiveFeedbackPercentage();
    }

    countTotalFeedback=()=>{
        return (this.state.good + this.state.neutral + this.state.bad)
    }

    countPositiveFeedbackPercentage=()=>{
        return Math.round(this.state.good/(this.countTotalFeedback())*100)
    }
    render() {

        return (
            <>
    <Section title="Please leave feedback">
      <FeedbackOptions options={buttonsData} onLeaveFeedback={this.incrementButton}>
        </FeedbackOptions>
        </Section> 
              
    <Section title="Statistics">
    <Statistics 
    good={this.state.good} 
    neutral={this.state.neutral} 
    bad={this.state.bad} 
    total={this.countTotalFeedback()} 
    positivePercentage={this.countPositiveFeedbackPercentage()}/>
        </Section> 
        </>)   
  }
}