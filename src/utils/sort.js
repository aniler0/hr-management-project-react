export const sort = (data) => {
  const sorted =
    data &&
    data.sort((a, b) => {
      var textA = a.name.toUpperCase();
      var textB = b.name.toUpperCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });

  return sorted;
};
