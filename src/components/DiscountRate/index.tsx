import React, { useEffect } from 'react'
import { useAppDispatch } from '../../redux/hooks'
import useDiscount from '../../hooks/useDiscount';
import { setDiscount } from '../../features/discount/discountSlice';

const DiscountRate = () => {
    const dispatch = useAppDispatch();
    const discountRate = useDiscount();    
    const formattedDiscountRate = (discountRate * 100).toFixed(2)

    useEffect(() => {
        dispatch(setDiscount(discountRate))
    }, [discountRate, dispatch])

    return (
        <>
            <div>Discount</div>
            <div>{formattedDiscountRate}%</div>
        </>
    )
}

export default DiscountRate