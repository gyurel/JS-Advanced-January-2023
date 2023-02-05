function notify(message) {
  let notificationDiv = document.getElementById('notification');
  notificationDiv.addEventListener('click', onclick);

  notificationDiv.textContent = message;
  notificationDiv.style.display = 'block';

  function onclick(){
    notificationDiv.style.display = '';
    notificationDiv.textContent = '';
  }
}
