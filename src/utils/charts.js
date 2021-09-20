export const filterCurrencyHistory = history => {
  return history
    .map(item => +item)
    .reverse()
    .map((item, index) => ({
      value: item,
      label: new Date(
        new Date().setDate(new Date().getDate() - index)
      ).toLocaleDateString(),
    }))
}
