import { useMemo } from "react"
import { useAppSelector } from "../redux/hooks"

const useDiscount = () => {
    const orderValue = useAppSelector(state => state.orderValue)
    const discountRates = useAppSelector(state => state.discountRates)   

    // sort in case of unsorted discount rates
    const sortedDiscountRates = useMemo(() => [...discountRates].sort((a, b) => a.value - b.value), [discountRates])

    // find the highest discount rate that is less than or equal to the price
    const discountRate = sortedDiscountRates.reduce((acc, rate) => {        
        return orderValue >= rate.value ? rate.discount : acc
    }, 0)    
    
    return discountRate
}

export default useDiscount