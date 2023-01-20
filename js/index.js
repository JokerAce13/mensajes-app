document.getElementById('cancel-message-icon').style.visibility = "hidden";
document.getElementById('cancel-icon').style.visibility = "hidden";
var mediaqueryList = window.matchMedia("(min-width: 1024px)");


mediaqueryList.addListener( function(EventoMediaQueryList) {
  let chatElement = document.getElementById('chat');
  let directoryElement = document.getElementById('contact-directory');
  let searchElement = document.getElementById('search-messages');
  let profileElement = document.getElementById('profile');

  if (window.matchMedia("(min-width: 1024px)").matches) {
      chatElement.classList.remove('hideElement');
      chatElement.classList.add('showElement');
      directoryElement.classList.remove('hideElement');
      directoryElement.classList.add('showElement');
      searchElement.classList.add('hideElement');
      searchElement.classList.remove('showElement');
      profileElement.classList.add('hideElement');
      profileElement.classList.remove('showElement');
  }
  else {
    chatElement.classList.add('hideElement');
    chatElement.classList.remove('showElement');
    searchElement.classList.add('hideElement');
    searchElement.classList.remove('showElement');
  }
});

function changeIcon() {
  let input = document.getElementById('chat-input');
  let btn = document.getElementById('btn-mic-or-send');

  if(input.value.length !== 0) {
    btn.classList.remove('is-mic-icon');
    btn.classList.add('is-send-icon');
  }
  else {
    btn.classList.remove('is-send-icon');
    btn.classList.add('is-mic-icon');
  }
};

function hideSearchContactIcon() {
  let input = document.getElementById('search-input');

  if(input.value.length !== 0) {
    document.getElementById('cancel-icon').style.visibility = "visible";
  }
  else {
    document.getElementById('cancel-icon').style.visibility = "hidden";
  }
};

function hideSearchMessageIcon() {
  let input = document.getElementById('search-message-input');
  let messageList = document.getElementById('search-messages-list');

  if(input.value.length !== 0) {
    document.getElementById('cancel-message-icon').style.visibility = "visible";
    messageList.classList.remove('hideElement');
  }
  else {
    document.getElementById('cancel-message-icon').style.visibility = "hidden";
    messageList.classList.add('hideElement');
  }
};

function clearSearchContactInput() {
  let input = document.getElementById('search-input');
  input.value = '';
  hideSearchContactIcon();
};

function clearSearchMessageInput() {
  let input = document.getElementById('search-message-input');
  input.value = '';
  hideSearchMessageIcon();
};

function showProfile() {
  let profileElement = document.getElementById('profile');
  let directoryElement = document.getElementById('contact-directory');
  profileElement.classList.remove('hideElement');
  profileElement.classList.remove('showElement');
  directoryElement.classList.add('hideElement');
  directoryElement.classList.remove('showElement');
};

function hideProfile() {
  let profileElement = document.getElementById('profile');
  let directoryElement = document.getElementById('contact-directory');
  profileElement.classList.add('hideElement');
  profileElement.classList.remove('showElement');
  directoryElement.classList.remove('hideElement');
  directoryElement.classList.remove('showElement');
};

function showSearchMessage() {
  let searchMessageElement = document.getElementById('search-messages');
  searchMessageElement.classList.remove('hideElement');
};

function hideSearchMessage() {
  let searchMessageElement = document.getElementById('search-messages');
  searchMessageElement.classList.add('hideElement');
};

function toggleElement(hideElementId, showElementId) {
  if (window.matchMedia("(max-width: 768px)").matches) {
    let hideElement = document.getElementById(hideElementId);
    let showElement = document.getElementById(showElementId);
    hideElement.classList.add('hideElement');
    hideElement.classList.remove('showElement');
    showElement.classList.remove('hideElement');
    showElement.classList.add('showElement');
  }
};

function selectContact(contact) {
  let contactName = contact.querySelector('.contact-name');
  let username = document.getElementById('user-name');

  document.getElementById('user-image').src = `images/${contactName.innerHTML.toLowerCase()}.png`;
  username.innerHTML = contactName.innerHTML;

  let contacts = document.querySelectorAll('.contact');

  contacts.forEach(element => {
    element.classList.remove('is-active');
  });

  contact.classList.add('is-active');

};