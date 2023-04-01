const form = document.querySelector("form");

const inputMessages = document.querySelector(".input-messages");

form.onsubmit = (event) => {
  event.preventDefault();

  const user_name = event.srcElement[0];
  const email = event.srcElement[1];
  const message = event.srcElement[2];

  if (
    user_name.value.length === 0 ||
    email.value.length === 0 ||
    message.value.length === 0
  ) {
    inputMessages.style.display = "inline";
    inputMessages.style.background = "#cd3434";

    inputMessages.innerHTML = "Fill in all the blanks";
  } else {
    inputMessages.style.display = "inline";
    inputMessages.style.background = "#5fcd34";
    inputMessages.innerHTML = "Message sent successfully!";
    form.reset();

    setInterval(() => {
      inputMessages.style.display = "none";
      inputMessages.innerHTML = "";
    }, 8000);
  }
};
