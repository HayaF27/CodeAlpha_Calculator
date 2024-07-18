let answer = document.getElementById('result');
let lists = document.querySelectorAll('li');

for (let x = 0; x < lists.length; x++) {

  answer.value.innerHTML;

  lists[x].addEventListener('click', function () {
    let getvalue = document.getElementById('result').value;

    if (lists[x].innerHTML == "=") {
      answer.value = eval(answer.value)
    }
    else {

      if (lists[x].innerHTML == "AC") {
        answer.value = "";
      }

      else {
        answer.value += lists[x].innerHTML;
      }

      if (lists[x].innerHTML == "Del") {
        answer.value = getvalue.slice(0, -1);
      }

    }
  })
}