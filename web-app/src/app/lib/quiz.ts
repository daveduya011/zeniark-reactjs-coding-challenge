import questions from "@/data/questions.json";

export function getQuizQuestions() {
  return getRandomItems(questions.results, 10);
}

function getRandomItems(array: any[], count: number) {
  const selectedItems = [];
  const clonedArray = array.slice();

  for (let i = 0; i < count; i++) {
    let randomIndex = Math.floor(Math.random() * (array.length - i));
    let selectedItem = clonedArray[randomIndex];

    // Remove the selected item from the array
    clonedArray.splice(randomIndex, 1);

    // Add the selected item to the selectedItems array
    selectedItems.push(selectedItem);
  }

  return selectedItems;
}
