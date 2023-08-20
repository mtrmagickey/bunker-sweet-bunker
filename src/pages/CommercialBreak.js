import React, { useState } from 'react';

const CommercialBreak = () => {
  const [adCopy, setAdCopy] = useState('');

  const adCopies = [
 'And now, dear survivors, a word from our generous sponsors who make this wasteland a little more livable! Defend your territory with the latest in Pointy Stick Technologies! From the Basic Jabber to the Deluxe SpearMaster 3000, we have got the pointy sticks that make raiders think twice. Order now and get a free rock!',
 'And now, dear survivors, a word from our generous sponsors who make this wasteland a little more livable! Seeking spiritual guidance in these trying times? Join The Church of the Nuclear Warhead. Worship the boom that brought us together. Weekly sermons and potluck dinners at Crater Cathedral. All are welcome, especially those with extra limbs! Join us this Sunday, and find out why we are the blast everyone is talking about!',
 'And now, dear survivors, a word from our generous sponsors who make this wasteland a little more livable! Need a vacation from the end of the world? Visit the Definitely Not Hunting Humans All-Inclusive Resort! Enjoy fine dining, relaxing spas, and absolutely no hidden traps. We promise! Book now, and remember, what happens in the resort, stays in the resort... permanently!',
 'And now, dear survivors, a word from our generous sponsors who make this wasteland a little more livable! Bunker looking a bit drab? Spruce it up with Pleasant Host Bunker Housekeeping Kits! Includes roach repellent, dust-free doilies, and a manual on polite conversation with your fellow survivors. Make the apocalypse feel like home! Pleasant Host – because even the end of the world should be pleasant!',
 'And now, dear survivors, a word from our generous sponsors who make this wasteland a little more livable! Worried about that pesky radiation? Dr. Sanity Iodine Tablets are here to save the day! Pop one a day, and keep the mutations away. Side effects may include glowing in the dark, but hey, who needs a flashlight?',
 'And now, dear survivors, a word from our generous sponsors who make this wasteland a little more livable! Tired of drinking from irradiated puddles? Try Fresh Water Cloud Seeding! With just one call, we will seed your clouds and make it rain pure, uncontaminated water. Quench your thirst the civilized way! Because in the apocalypse, even the clouds need a helping hand!',
 'And now, dear survivors, a word from our generous sponsors who make this wasteland a little more livable! Lonely in the wasteland? Find your perfect three-eyed partner with Mutant Matchmaking Services! Love is blind, and so are some of our clients. Mutant Matchmaking – where every date is a blind date... literally!',
 'And now, dear survivors, a word from our generous sponsors who make this wasteland a little more livable! Need a caffeine boost to outrun those zombies? Try ApocaLattes Coffee Shop! Our beans are roasted over real car fires. ApocaLattes – because the end of the world shouldn\'t mean the end of good coffee!',
 'And now, dear survivors, a word from our generous sponsors who make this wasteland a little more livable! Stocking up for the next nuclear winter? Survivor\'s Supermarket has all your canned and preserved needs! Now featuring our "Buy One, Get One Free" cockroach protein bars. Survivor\'s Supermarket – where expiration dates are just a suggestion!',
 'And now, dear survivors, a word from our generous sponsors who make this wasteland a little more livable! Lost a limb to a mutant bear? Come on down to Rusty\'s Robotic Limb Emporium! Our limbs might be second-hand, but they\'re first-rate. Rusty\'s – where you can give yourself a hand... or two!',
 'And now, dear survivors, a word from our generous sponsors who make this wasteland a little more livable! Want to outrun raiders and mutants? Get in shape at Wasteland Workout Gym! Our treadmills are powered by real hamsters. Wasteland Workout – because survival of the fittest isn\'t just a saying!',
 'And now, dear survivors, a word from our generous sponsors who make this wasteland a little more livable! Moving to a new bunker? Let Bunker Buddy Moving Services do the heavy lifting! We promise not to drop the nuclear family heirlooms. Bunker Buddy – we move your stuff, not the fallout!',
 'And now, dear survivors, a word from our generous sponsors who make this wasteland a little more livable! Worried about the unexpected? Get covered with End Times Insurance Co. We insure against alien invasions, zombie outbreaks, and meteor strikes. End Times Insurance – because it\'s never too late to plan for the end of the world!',
 'And now, dear survivors, a word from our generous sponsors who make this wasteland a little more livable! Hungry for some home-cooked apocalypse cuisine? Visit Doomsday Diner! Try our famous Mutant Meatloaf and Radioactive Ribs. Doomsday Diner – where the food is to die for... possibly!'];

  const startCommercialBreak = () => {
    const randomIndex = Math.floor(Math.random() * adCopies.length);
    setAdCopy(adCopies[randomIndex]);
  };

  return (
    <div>
      <h2>Commercial Break</h2>
      <button onClick={startCommercialBreak}>Start Commercial Break</button>
      {adCopy && <p>Ad copy: {adCopy}</p>}
    </div>
  );
};

export default CommercialBreak;
