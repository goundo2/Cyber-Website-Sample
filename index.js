function toggleModal(person) {
    let modal = document.getElementById("success-modal");
    let modalText = document.getElementById("modal-text");
  
    // Show modal
    modal.style.display = "flex";
  
    // Set personalized message
    modalText.textContent = `🎉 Thanks ${person.name} from ${person.state} for RSVPing!`;
  
    // Confetti 🎊
    confetti({ particleCount: 120, spread: 70, origin: { y: 0.6 } });
  
    // Auto-close after 5s
    setTimeout(() => {
      modal.style.display = "none";
    }, 5000);
  }
  
  function validateForm(event) {
    event.preventDefault();
  
    const name = document.getElementById("name");
    const state = document.getElementById("state");
    const email = document.getElementById("email");
  
    let isValid = true;
  
    [name, state, email].forEach((input) => {
      input.classList.remove("invalid");
      if (input.value.trim() === "") {
        input.classList.add("invalid");
        isValid = false;
      }
    });
  
    if (isValid) {
      const person = {
        name: name.value.trim(),
        state: state.value.trim(),
        email: email.value.trim()
      };
  
      name.value = "";
      state.value = "";
      email.value = "";
  
      toggleModal(person);
    }
  }
  
  document.getElementById("rsvp-form").addEventListener("submit", validateForm);
  