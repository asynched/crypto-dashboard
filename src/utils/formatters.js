export const getUSDFormatter = () =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })
