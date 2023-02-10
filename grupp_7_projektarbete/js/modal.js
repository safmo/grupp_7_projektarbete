const modalHTML = `
<div class="modal" style="display: none">
  <div class="modal__overlay"></div>
  <div class="modal__content">
    <form class="form" method="POST" action="#">
      <section class="form__section">
        <header class="form__header">
          <h2 class="headline headline--danger">Log <span>in</span></h2>
          <p class="form__info">Required fields are followed by <strong><abbr class="form__text-required" title="required" aria-label="required">*</abbr></strong>
          </p>
        </header>
        <div class="form__group">
          <div class="form__field">
            <label class="form__label" for="mail">
              <span>E-mail: </span>
              <strong><abbr class="form__text-required" title="required" aria-label="required">*</abbr></strong>
              </label>
            <input class="form__input" type="email" id="mail" name="usermail" />
          </div>
          <div class="form__field">
            <label class="form__label" for="pwd">
              <span>Password: </span>
              <strong><abbr class="form__text-required" title="required" aria-label="required">*</abbr></strong>
              </label>
            <input class="form__input" type="password" id="pwd" name="password" />
          </div>
        </div>
        <div class="form__group">
          <div class="form__field">
            <label><input type="checkbox" name="remember" /> Remember me</label>
          </div>
          <div class="form__field">
            <button class="btn btn--success" type="submit">
              Log in
            </button>
          </div>
          <div class="form__field">
              <a href="#" title="Get a new password" style="text-align: right;"><small>Forgot Password?</small></a>
          </div>
        </div>
      </section>
    </form>
    <button title="Close" class="close__modal">&#10006;</button>
  </div>
</div>
`;

const pageFooter = document.querySelector(".page-footer");
pageFooter.insertAdjacentHTML("afterend", modalHTML);

const btn = document.querySelector(".login");
const modal = document.querySelector(".modal");

function attachModalListeners(modalElm) {
  modalElm
    .querySelector(".close__modal")
    .addEventListener("click", toggleModal);
  modalElm
    .querySelector(".modal__overlay")
    .addEventListener("click", toggleModal);
}

function detachModalListeners(modalElm) {
  modalElm
    .querySelector(".close__modal")
    .removeEventListener("click", toggleModal);
  modalElm
    .querySelector(".modal__overlay")
    .removeEventListener("click", toggleModal);
}

function toggleModal() {
  var currentState = modal.style.display;

  if (currentState === "none") {
    modal.style.display = "block";
    attachModalListeners(modal);
  } else {
    modal.style.display = "none";
    detachModalListeners(modal);
  }
}

btn.addEventListener("click", toggleModal);
