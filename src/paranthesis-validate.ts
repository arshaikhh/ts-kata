function paranthesisValidate(paranthesis: string): boolean {
  let square_counter = 0;
  let circle_counter = 0;
  let curly_counter = 0;
  const opener = "[({";
  const closer = "])}";
  let openclose_counter = 0;
  let index = 0;
  let isParanthesis = true;
  for (const char of paranthesis) {
    opener.includes(char)
      ? openclose_counter++
      : closer.includes(char)
      ? openclose_counter--
      : 0;
    char.includes("[")
      ? square_counter++
      : char.includes("]")
      ? square_counter--
      : char.includes("(")
      ? circle_counter++
      : char.includes(")")
      ? circle_counter--
      : char.includes("{")
      ? curly_counter++
      : char.includes("}")
      ? curly_counter--
      : 0;
    opener.includes(char) &&
    closer.includes(paranthesis[index + 1]) &&
    paranthesis[index + 1] != closer[opener.indexOf(char)]
      ? (isParanthesis = false)
      : 0;
    openclose_counter < 0 ? (isParanthesis = false) : 0;
    if (isParanthesis == false) {
      break;
    }
    index++;
  }
  openclose_counter != 0 ||
  square_counter != 0 ||
  curly_counter != 0 ||
  circle_counter != 0
    ? (isParanthesis = false)
    : 0;
  return isParanthesis;
}

export default paranthesisValidate;
