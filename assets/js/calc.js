dateCalc = () => {
  starting = new Date(sdate.value);
  ending = new Date(edate.value);

  dateTime = starting.getTime() - ending.getTime();

  dateDay = dateTime / (1000 * 3600 * 24);
  res.innerHTML = `${dateDay} days`;
};
