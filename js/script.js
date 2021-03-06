//обработчик кнопки Start
var startButton = document.querySelector('.btn-start');
startButton.onclick = function () {
  console.log('PROGRESS START');
  startButton.innerText = "In progress";
  startButton.classList.add('in-progress');
  //в массив
  var cellList = [].slice.call(document.getElementsByClassName('cell'));
  var cellCount = cellList.length;

  //перебор всех ячеек
  cellList.forEach(function(cell, i) {
    //запуск эффекта поворотас определенной задержкой для каждой из ячеек
    setTimeout(function() {
      console.log("Cell " + ++i + " animation start");
      cell.classList.add('rotate180'); 
      
      //вешаем обработчик событий на отслеживание конца transition
      cell.addEventListener('transitionend', function(e) {
        console.log("Cell " + e.target.innerText + " animation end");
        if(i == cellCount) {
          console.log('PROGRESS END');
          document.querySelector('.modal-window').style.display = "flex";
          startButton.classList.remove('in-progress');
          startButton.innerText = "Start";
        }
      });
    }, i*300);
  });
}

//обработчик для модального окна
document.querySelector('.btn-modal-close').onclick = function () {
  document.querySelector('.modal-window').style.display = "none";
}