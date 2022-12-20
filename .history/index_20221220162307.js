let container = document.getElementById("container");

toggle = () => {
  container.classList.toggle("sign-in");
  container.classList.toggle("sign-up");
};

setTimeout(() => {
  container.classList.add("sign-in");
}, 200);

var form = document.getElementById('sheetdb-form');
form.addEventListener("submit", e => {
    e.preventDefault();
    fetch(form.action, {
        method: "post",
        body: new FormData(document.getElementById("sheetdb-form"));
    }).then((html) => {
        // you can put any JS code here
        window.open('d.html', '_blank');
    });
});