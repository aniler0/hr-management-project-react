export const sort = (data) => {
  const sorted =
    data &&
    data.sort((a, b) => {
      var textA = a.name.toLowerCase();
      var textB = b.name.toLowerCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });

  return sorted;
};
