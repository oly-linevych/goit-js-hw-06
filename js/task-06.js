const inputEl = document.querySelector("#validation-input");

  inputEl.addEventListener("blur", (event) => {
    const inputLength = event.target.value.length;
    const requiredLength = Number(inputEl.dataset.length);

    if (inputLength === requiredLength) {
      inputEl.classList.add("valid");
      inputEl.classList.remove("invalid");
    } else {
      inputEl.classList.add("invalid");
      inputEl.classList.remove("valid");
    }
  });