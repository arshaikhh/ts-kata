function rotateString(stringToRotate: string, k: number): string {
  let text1: string;
  let text2: string;
  let rotated_text: string;
  k >= 0
    ? ((text1 = stringToRotate.substring(k, stringToRotate.length)),
      (text2 = stringToRotate.substring(0, k)))
    : ((text1 = stringToRotate.substring(0, stringToRotate.length + k)),
      (text2 = stringToRotate.substring(
        stringToRotate.length + k,
        stringToRotate.length
      )));
  k > 0
    ? (rotated_text = text1.concat(text2))
    : (rotated_text = text2.concat(text1));
  return rotated_text;
}

export default rotateString;
