const cmz = require('cmz')

const styles = {}
styles.root = cmz(`
:root {
  --bgFrom: #33F;
  --bgTo: #3F3;
  --bgDegree: 0deg;
}

& {
  display: inline-block;
  width: 10rem;
  height: 10rem;
  border-radius: 10rem;
  background: linear-gradient(var(--bgDegree), var(--bgFrom), var(--bgTo));
}
`)

const root = document.getElementById('root')

root.innerHTML = [
  makeAvatar(),
  makeAvatar(),
  makeAvatar()
].join('\n')

// ----


function randomInRange (min, max) {
  return Math.floor(
    (Math.random() * (max - min)) + min
  )
}

function renderHsl (hsl) { 
  return `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`
}

function randomColor () {
  return {
    h: randomInRange(0, 360), 
    s: randomInRange(30, 80),
    l: randomInRange(30, 80)
  }
}

function renderStyle (style) {
  return Object.keys(style).map(function (key) {
    return `${key}: ${style[key]}`
  }).join('; ')
}

function makeAvatar () {
  const style = {
    '--bgFrom': renderHsl(randomColor()),
    '--bgTo': `${renderHsl(randomColor())} ${randomInRange(80, 100)}%`,
    '--bgDegree': `${randomInRange(0, 360)}deg`
  }

  return `<div class="${styles.root}" style="${renderStyle(style)}"></div>`
}
