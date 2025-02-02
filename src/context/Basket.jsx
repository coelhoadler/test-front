import React, { useState, useEffect, createContext, useContext } from 'react'

export const getMyProducts = async () => {
  try {
    const URL = `https://www.mocky.io/v2/5b15c4923100004a006f3c07`
    return await (await fetch(URL, { mode: 'cors' })).json()
  } catch (err) {
    return err
  }
}

export const BasketContext = createContext()

export const useBasketContext = () => {
  return useContext(BasketContext)
}

export const BasketProvider = ({ children }) => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [amounts, setAmounts] = useState({})
  const [paymentInfo, setPaymentInfo] = useState({})
  const [isDisabled, setIsDisabled] = useState(true)

  useEffect(() => {
    const productsData = getMyProducts()
    productsData
      .then((data) => {
        const { subTotal, shippingTotal, discount, total } = data
        setAmounts({ subTotal, shippingTotal, discount, total })
        setItems(data.items)
        setIsLoading(false)
        setPaymentInfo({})
      })
      .catch((err) => console.log(err))
  }, [])

  const store = {
    isLoading,
    isDisabled,
    items,
    amounts,
    paymentInfo,
    setAmounts,
    setItems,
    setIsDisabled,
    setPaymentInfo,
    setIsLoading
  }

  return <BasketContext.Provider value={store}>{children}</BasketContext.Provider>
}

export default BasketProvider
