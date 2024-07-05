import { Vector3 } from 'three'

export function damp(
  current: Vector3,
  target: number | [x: number, y: number, z: number] | Vector3,
  smoothTime: number = 0.3,
  delta: number = 1 / 60,
  maxSpeed: number = Infinity,
  easing: (t: number) => number = (t) => t,
  eps: number = 0.001,
): boolean {
  // Convert target to Vector3 if it's not already
  const targetVector =
    target instanceof Vector3 ? target : new Vector3(...(Array.isArray(target) ? target : [target, target, target]))

  // Calculate the difference
  const diff = targetVector.clone().sub(current)
  const diffLength = diff.length()

  // Check if we're already close enough
  if (diffLength < eps) {
    current.copy(targetVector)
    return false
  }

  // Apply easing
  const t = easing(1 - Math.pow(0.001, delta / smoothTime))

  // Calculate step
  const step = diff.multiplyScalar(t)

  // Clamp to max speed
  if (maxSpeed < Infinity) {
    const maxStep = maxSpeed * delta
    if (step.length() > maxStep) {
      step.setLength(maxStep)
    }
  }

  // Update current position
  current.add(step)

  return true
}
