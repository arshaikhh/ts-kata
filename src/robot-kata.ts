function robotTracker(direction: string[]): boolean {
  let eastwest_counter = 0;
  let northsouth_counter = 0;
  let reachedDestination = false;
  for (const dir of direction) {
    dir == "e"
      ? eastwest_counter++
      : dir == "w"
      ? eastwest_counter--
      : dir == "n"
      ? northsouth_counter++
      : northsouth_counter--;
  }
  eastwest_counter == 3 && northsouth_counter == 2
    ? (reachedDestination = true)
    : eastwest_counter == -4 && northsouth_counter == 3
    ? (reachedDestination = true)
    : (reachedDestination = false);
  return reachedDestination;
}
export default robotTracker;
