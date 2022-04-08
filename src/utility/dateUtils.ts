function getMonthName(month: any) {
  var months = ["Ene.", "Feb.", "Mar.", "Abr.", "May.", "Jun.", "Jul.", "Ago.", "Sep.", "Oct.", "Nov.", "Dic."];
  return months[month];
}

export function getDate(date: Date) {
  return `${date.getDate()} de ${getMonthName(date.getMonth())}`;
}
