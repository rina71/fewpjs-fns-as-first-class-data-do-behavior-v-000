/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(input) {
  let time = parseInt(str.split(':').join(''));
  if (0000 <= time < 1200 ){
    return 'Good Morning'
  } else if (1200 <= time < 1500){
    return 'Good Afternoon'
  } else if (1500 <= time < 2400)
}
