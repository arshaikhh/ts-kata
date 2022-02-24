function maxListofList(list_of_list: number[][]): number[] {
  const max_list = [];
  for (const list of list_of_list) {
    max_list.push(findMax(list));
  }
  return max_list;
}
function findMax(list: number[]): number {
  let max = list[0];
  for (const num of list) {
    num > max ? (max = num) : 0;
  }
  return max;
}

export default maxListofList;
