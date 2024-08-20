//WRITE A PROGRAM TO CALCULATE DAYS BEFORE CHRISTMAS

function finddate() {
  today = new Date();
  let x = new Date(today.getFullYear(), 11, 25);
  if (today.getMonth() == 11 && today.getDate() > 25) {
    x.setFullYear(x.getFullYear() + 1);
  }
  let day = 1000 * 60 * 60 * 24;
  console.log(
    Math.ceil((x.getTime() - today.getTime()) / day) +
      "  days remaining till christmas."
  );
}
finddate();
