export type CryptoPunkIconColor = '#12FF80' | '#12A154' | '#124228' | 'currentColor'

/**
 * Generates a random color code based on predefined probabilities.
 *
 * The function selects a color based on a random chance. The colors and their associated
 * probabilities are as follows:
 * - Green (#12FF80) with a 14% chance,
 * - Dark Green (#12A154) with a 3% chance,
 * - Darker Green (#124228) with a 3% chance.
 * If none of these conditions are met, it defaults to the 'currentColor'.
 *
 * @returns {string} A string representing the color code or 'currentColor'.
 */
export function getRandomColor(): CryptoPunkIconColor {
  const chance = Math.random()

  if (chance <= 0.17) return '#12A154' // Dark Green (3% CHANCE)
  if (chance <= 0.2) return '#124228' // Darker Green (3% CHANCE)
  if (chance <= 0.24) return '#12FF80' // Green (14% CHANCE)

  return 'currentColor'
}
