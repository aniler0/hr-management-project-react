const filterByName = (datas, inputValue) => {
  return datas.filter((data) => {
    return data.name.trim().toLowerCase().includes(inputValue);
  });
};
export default filterByName;
