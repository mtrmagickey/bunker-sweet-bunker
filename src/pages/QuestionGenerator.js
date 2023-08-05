import React, { useState } from 'react';

const QuestionGenerator = () => {
  const questions = [
    "What's your idea of a perfect date in a post-apocalyptic world?",
    "How would you cheer me up if we were stuck in a bunker together?",
    "What's one thing you would bring into the bunker to help pass the time?",
    "What's the most adventurous thing you've done that would prepare you for bunker life?",
    "Describe your dream bunker in three words.",
    "If you could bring one celebrity into the bunker with us, who would it be and why?",
    "What's the first thing you'd do if we emerged from the bunker after a year?",
    "How would you handle a disagreement in the bunker?",
    "What's the one survival skill you're most proud of?",
    "What's your go-to comfort food in a crisis?",
    "What's the one thing from the outside world you'd miss the most in a bunker?",
    "If we only had a one-song record in our bunker, what song would you want it to be?",
    "If you could pick one book to bring into the bunker, what would it be?",
    "What's your favorite indoor hobby that would make bunker life more enjoyable?",
    "What's your best joke to lighten the mood during a crisis?",
    "What's one thing about you that would surprise me?",
    "How would you make a special occasion feel special in a bunker?",
    "What's your strategy to stay physically active in a bunker?",
    "What personal belonging could you not live without in a bunker?",
    "What's your favorite memory from before the apocalypse?",
    "What would be your role in our bunker community?",
    "What's your favorite homemade meal that you'd love to cook in the bunker?",
    "What's one personal achievement you're proud of that would benefit our bunker life?",
    "What's your favorite game to play during a power outage?",
    "If you could have one luxury item in our bunker, what would it be?",
    "How would you contribute to maintaining a positive atmosphere in the bunker?",
    "If we could have a pet in the bunker, what would you choose and why?",
    "What's the most challenging experience you've had that prepared you for bunker living?",
    "What's your favorite uplifting quote or saying for tough times?",
    "What's your best tip for getting a good night's sleep in a bunker?",
    "What's the most important quality you bring to a team in a crisis?",
    "How would you make our bunker feel more like home?",
    "What's one food you couldn't live without, even in a bunker?",
    "What's your favorite method to relax and de-stress during tense times?",
    "What's the one survival movie or book you find the most inspiring?",
    "What's the first thing you'd do on a day when it's safe to go outside?",
    "How would you celebrate holidays and birthdays in the bunker?",
    "What's the most creative way you've ever solved a problem?",
    "What's one survival skill you would like to learn while in the bunker?",
    "How would you keep fit and healthy living in a bunker?",
    "What's one thing you would do to make the bunker more eco-friendly?",
    "What's your go-to song for a sing-along to lift spirits?",
    "What's one childhood hobby or game you'd revisit in the bunker?",
    "What's the most courageous thing you've ever done?",
    "What's one interesting fact about you that would surprise your fellow bunker dwellers?",
    "What's your strategy to conserve and ration supplies in the bunker?",
    "How would you handle the responsibility of being the bunker's leader for a week?",
    "What's the most encouraging thing someone has said to you in a tough situation?",
    "What's your favorite way to pass the time on a rainy day?",
    "What's one piece of technology you wish you could have in the bunker?"
];

  
  const [currentQuestion, setCurrentQuestion] = useState(null);

  const rollForQuestion = () => {
    const roll = Math.floor(Math.random() * questions.length);
    setCurrentQuestion(questions[roll]);
  };

  return (
    <div>
      <button onClick={rollForQuestion}>Roll for Question</button>
      <p>{currentQuestion ? currentQuestion : 'Question will be displayed here after rolling.'}</p>
    </div>
  );
};

export default QuestionGenerator;
