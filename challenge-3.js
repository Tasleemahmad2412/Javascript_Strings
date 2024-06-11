const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 substitution"],
  [64, "⭐ Yellow card"],
  [69, "🔴 red card"],
  [70, "🔁 substitution"],
  [72, "🔁 substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "⭐ Yellow card"],
]);

//1.
console.log(gameEvents.values());

const events = [...new Set(gameEvents.values())];
console.log(events);

//2.
gameEvents.delete(64);
console.log(gameEvents);

//3.
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happend on average every ${time / gameEvents.size} minutes`
);

// const lastDigit = time.pop();
//4.
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "FIRST" : "SECOND";
  console.log(`[${half} HALF] ${min} : ${event}`);
}
