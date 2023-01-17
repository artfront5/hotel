export function getCorrectDate(date: Date) {
  const correctTime = new Intl.DateTimeFormat('ru', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }).format(date);

  return correctTime.split('.').reverse().join('-');
}

export function getCheckoutDate(checkIn: string, daysCount: number) {
  const dateCheckIn = new Date(checkIn);

  return getCorrectDate(
    new Date(
      dateCheckIn.getFullYear(),
      dateCheckIn.getMonth(),
      dateCheckIn.getDate() + daysCount
    )
  );
}

export function getCorrectCheckInDate(time: string) {
  return new Intl.DateTimeFormat('ru', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(time));
}
