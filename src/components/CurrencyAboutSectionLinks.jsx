import React from 'react'

function CurrencyAboutSectionLinks({ currencyData }) {
  return (
    <div>
      <h2 className="mb-2 title text-2xl">{currencyData.name} links</h2>
      <div>
        {currencyData.links.map(link => (
          <div
            key={link.url}
            className="p-4 flex justify-between border-b border-gray-300"
          >
            <span className="capitalize">{link.type}</span>
            <a className="text-purple-600" href={link.url}>
              {link.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CurrencyAboutSectionLinks
