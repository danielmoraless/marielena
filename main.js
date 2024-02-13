import Typed from 'typed.js'
import textos from './textos.json'

var boton = document.getElementById("boton");

var cafune = new Audio("/marielena/1.mp3");

const typed = new Typed("#for-typed", {
  strings: textos.textos,
  typeSpeed: 10,
  onStringTyped: (_, self) => { self.stop() },
  onStart: (_, self) => { boton.innerText = "Siguiente" },
  onComplete: (_, self) => {
    boton.innerText = "Otra vez";

    boton.onclick = () => { location.reload(); };
  },
});

typed.stop()

boton.onclick = () => {
  typed.start();
  cafune.play();
}