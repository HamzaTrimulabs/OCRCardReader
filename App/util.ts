const getCardNo = (text: string) => {
  if (!text && !text.length) {
    return 'String is empty';
  }
  const num = /[0-9]{5}-[0-9]{7}-[0-9]{1}/g;
  const ans = num.exec(text);
  return ans[0] === undefined ? 'Not Found' : ans[0];
};

const getName = (text: string) => {
  if (!text && !text.length) {
    return 'String is empty';
  }
  const nameLocation = /Name/g.exec(text);
  const FatherNameLocation = /Father Name/g.exec(text);

  const substring = text.substring(
    nameLocation?.index + 5,
    FatherNameLocation?.index
  );
  const newSubString = substring.split('\n', 1);
  return newSubString === undefined ? 'Not Found' : newSubString[0];
};

const getDoB = (text: string) => {
  if (!text && !text.length) {
    return 'String is empty';
  }
  const dob = /[0-9]{2}\.[0-9]{2}\.[0-9]{4}/g.exec(text);
  return dob[0] === undefined ? 'Not Found' : dob[0];
};
export { getCardNo, getName, getDoB };
