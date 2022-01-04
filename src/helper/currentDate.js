const getCurrentDateFormat = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().length === 1 ? `0${(today.getMonth() + 1).toString()}`
    : (today.getMonth() + 1).toString();
  const day = today.getDate().toString().length === 1 ? `0${today.getDate().toString()}`
    : today.getDate().toString();
  return `${year}-${month}-${day}`;
};

export default getCurrentDateFormat;
