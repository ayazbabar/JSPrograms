setInterval(() => {
  const now = new Date();
  let hours = now.getHours();
  let minutes = String(now.getMinutes()).padStart(2, "0");
  let seconds = String(now.getSeconds()).padStart(2, "0")
  console.clear();
    const ampm = hours>=12?"PM":"AM" 
    hours = hours % 12;
    hours = hours==0?12:hours;
    hours = String(hours).padStart(2, "0");
    console.log(`${hours}:${minutes}:${seconds} ${ampm}`)
}, 1000);
