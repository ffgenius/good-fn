<script setup lang="ts">
import confetti from 'canvas-confetti'

// Function to trigger the confetti fireworks
function handleClick() {
  const duration = 5 * 1000 // 5 seconds
  const animationEnd = Date.now() + duration
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

  // Helper function to get a random value between a range
  function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min
  }

  const interval = window.setInterval(() => {
    const timeLeft = animationEnd - Date.now()

    if (timeLeft <= 0) {
      clearInterval(interval)
      return
    }

    const particleCount = 50 * (timeLeft / duration)

    // Confetti from left side
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    })

    // Confetti from right side
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    })
  }, 250)
}
</script>

<template>
  <div class="inline-block" @click="handleClick">
    <slot />
  </div>
</template>
