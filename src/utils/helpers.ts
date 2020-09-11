export function handleBackgroundImage(cardNumber: number) {
  switch (cardNumber) {
    case 1:
      return '/black.png'
    case 2:
      return '/blue.png'
    case 3:
      return '/green.png'
    case 4:
      return '/purp.png'
    case 5:
      return '/black.png'
    case 6:
      return '/six.png'
    case 7:
      return '/green.png'
    case 8:
      return '/eight.png'
    case 9:
      return '/blue.png'
    case 10:
      return '/purp.png'
    default:
      return '/ten.png'
  }
}
