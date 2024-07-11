import { Vector3 } from 'three'

const SMOOTH_TIME_DEFAULT = 0.5
const MAX_SPEED_DEFAULT = Infinity
const EPS_DEFAULT = 0.001
const DAMPING_FACTOR = 0.0001

export function damp(
  current: Vector3,
  target: number | [x: number, y: number, z: number] | Vector3,
  delta: number = 1 / 60,
): boolean {
  // Convert target to Vector3 if it's not already
  const targetVector =
    target instanceof Vector3 ? target : new Vector3(...(Array.isArray(target) ? target : [target, target, target]))

  // Calculate the difference
  const diff = targetVector.clone().sub(current)
  const diffLength = diff.length()

  // Check if we're already close enough
  if (diffLength < EPS_DEFAULT) {
    current.copy(targetVector)
    return false
  }

  // Apply linear easing
  const t = 1 - Math.pow(DAMPING_FACTOR, delta / SMOOTH_TIME_DEFAULT)

  // Calculate step
  const step = diff.multiplyScalar(t)

  // Clamp to max speed
  if (MAX_SPEED_DEFAULT < Infinity) {
    const maxStep = MAX_SPEED_DEFAULT * delta
    if (step.length() > maxStep) {
      step.setLength(maxStep)
    }
  }

  // Update current position
  current.add(step)

  return true
}
