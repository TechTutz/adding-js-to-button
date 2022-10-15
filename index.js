// grab value
const count = document.getElementById('count');

// define add function
const add = () => {
  const value = Number(count.innerText);
  const newValue = value + 1;
  count.innerText = newValue.toString();
};

// add function to button with event listener
document.getElementById('button').addEventListener('click', () => add());
