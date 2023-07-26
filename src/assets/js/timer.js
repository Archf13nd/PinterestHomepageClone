import { transformRef } from 'vue/compiler-sfc'

const timer = (object, timingsArray) => {
  const timings = {}
  timingsArray.forEach((e) => {
    object[e.name] = 0
    timings[object.completeCycle - e.timing] = e.name
  })

  let cycleCounter = 0

  const timer = (timestamp) => {
    let timePassed = Math.round(timestamp / 10) * 10

    // Cycle 1: Timing adjustments are gc(6000) = 5500ms
    let timePassedOnCurrentCycle = timePassed - object.completeCycle * cycleCounter

    if (timings[timePassedOnCurrentCycle]) {
      object[timings[timePassedOnCurrentCycle]] = cycleCounter
    }
    if (timePassedOnCurrentCycle > object.completeCycle) {
      cycleCounter += 1
    }
    requestAnimationFrame(timer)
  }

  return requestAnimationFrame(timer)
}

export default timer
