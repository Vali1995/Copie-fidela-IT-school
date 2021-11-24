var app = document.getElementById("app");

var typewriter = new Typewriter(app, {
  loop: true,
});

typewriter
  .typeString("Web Development!")
  .pauseFor(300)
  .deleteAll()
  .typeString("Testare sofware")
  .pauseFor(300)
  .deleteAll()
  .typeString("UI/UX Design")
  .pauseFor(300)
  .deleteAll()
  .typeString("Graphic Design")
  .pauseFor(300)
  .deleteAll()
  .typeString("Programare")
  .pauseFor(300)
  .deleteAll()
  .typeString("IT")
  .pauseFor(300)
  .deleteAll()
  .start();
