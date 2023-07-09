export default {
  beforeMount(el, binding) {
    el.insertAdjacentHTML(
      'afterbegin',
      `<img src=${binding.value} style="font-size: inherit; height: 1em; width: 1em">`
    )
  }
}
