export function getColor() {
  const CHANCE = Math.random()
  if (CHANCE <= 0.14) return '#12FF80' // Green (14% CHANCE)
  if (CHANCE <= 0.17) return '#12A154' // Dark Green (3% CHANCE)
  if (CHANCE <= 0.2) return '#124228' // Darker Green (3% CHANCE)
  return 'currentColor'
}
