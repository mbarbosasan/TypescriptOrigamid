// const button = document.querySelector("button")

// function handleClick(event: PointerEvent) {
//   console.log(event.pageX);
// }

// button?.addEventListener("pointerdown", handleClick)

// function handleScroll(event: Event) {
//   console.log(event)
// }

// window.addEventListener("scroll", handleScroll)

// function ativarMenu(event: Event) {
//   if (event instanceof MouseEvent) {
//     console.log(event.pageX);
//   }
//   if (event instanceof TouchEvent) {
//     console.log(event.touches)
//   }

// }

// document.documentElement.addEventListener("mousedown", ativarMenu)
// document.documentElement.addEventListener("touchstart", ativarMenu)

// const button = document.querySelector("button")

// function handleClick(this: HTMLButtonElement, event: MouseEvent) {
//   // RUIM
//   // console.log(this)
//   console.log(event.currentTarget)
// }

// button?.addEventListener("click", handleClick)


// EXERCICIO
// Utilizando a estrutura HTML/CSS abaixo, crie o script que irá fazer o botão mobile funcionar (ativar/desativar a navegação).

// Estado dos elementos

// menu inativo:
// class="" em nav
// aria-expanded="false" em button
// aria-label="Abrir Menu" em button

// menu ativo:
// class="active" em nav
// aria-expanded="true" em button
// aria-label="Fechar Menu" em button

const btnMobile = document.querySelector("#btn-mobile")

function toggleMenu(event: Event) {
  const nav = document.querySelector("#nav")
  const button = event.currentTarget;

  if (button instanceof HTMLElement && nav) {
    nav.classList.toggle("active")
    const active = nav.classList.contains("active")

    if (active) {
      button.setAttribute("aria-expanded", "false")
      button.setAttribute("aria-label", "Abrir Menu")
    } else {
      button.setAttribute("aria-expanded", "true")
      button.setAttribute("aria-label", "Fechar Menu")  
    }


    console.log(button.ariaExpanded, button.ariaLabel, nav.classList)
  }
}


btnMobile?.addEventListener("click", toggleMenu)

let range = [1, 2, 3, 4, 5, 6]
