export default function convertHourToMinutes(time: string) {
  const [hour, minute] = time.split(':').map(Number)
  const timeInMinutes = (hour * 60) + minute

  return timeInMinutes
}