export function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function maxLength(string: string, length: number = 30) {
  return string.length > length ? `${string.slice(0, length)}...` : string
}
