export const filterCurrencyHistory = history => {
  return history.reverse().map((item, index) => ({
    value: +item,
    label: new Date(
      new Date().setDate(new Date().getDate() - index)
    ).toLocaleDateString(),
  }))
}

export const filterExchangeVolume = exchanges =>
  exchanges.slice(0, 10).map(({ name, volume }) => ({
    name,
    volume,
  }))
