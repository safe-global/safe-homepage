export function getColor() {
  const chance = Math.random()

  if (chance <= 0.14) return '#12FF80' // Green (14% CHANCE)
  if (chance <= 0.17) return '#12A154' // Dark Green (3% CHANCE)
  if (chance <= 0.2) return '#124228' // Darker Green (3% CHANCE)

  return 'currentColor'
}
