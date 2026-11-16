// Sends the contact form in place. Without JavaScript the form still posts
// to Web3Forms, which shows its own confirmation page.
(function () {
  var year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();

  var form = document.querySelector("[data-contact]");
  if (!form || !window.fetch) return;
  var status = form.querySelector("[data-status]");
  var button = form.querySelector("button[type=submit]");

  function show(text, state) {
    status.textContent = text;
    status.dataset.state = state || "";
  }

  // Until a Web3Forms access key is pasted into index.html, say so instead of failing.
  var unconfigured = /^YOUR_/.test(form.elements.access_key.value);

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (unconfigured) {
      show("This form isn’t connected yet. Please check back soon.", "error");
      return;
    }
    button.disabled = true;
    show("Sending…");
    fetch(form.action, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new FormData(form)
    })
      .then(function (response) { return response.json(); })
      .then(function (result) {
        if (!result.success) throw new Error(result.message);
        form.reset();
        show("Thanks. We’ll be in touch soon.");
      })
      .catch(function () {
        show("Sorry, that didn’t send. Please try again in a moment.", "error");
      })
      .then(function () { button.disabled = false; });
  });
})();
