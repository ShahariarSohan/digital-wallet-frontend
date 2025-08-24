export const formatDate=(isoDate:string):string=> {
  const d = new Date(isoDate);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
}

// Example usage:


