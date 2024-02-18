import React from 'react'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { setTaxRate } from '../../features/tax/taxSlice'

const TaxRateSelector = () => {
    const dispatch = useAppDispatch()
    const options = useAppSelector(state => state.taxRates)

    const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setTaxRate(event.target.value))
    }

    return (
        <select onChange={onChange}>
            <option value={0}>Select a tax rate</option>
            {Object.entries(options).map(([key, value]) => (
                <option key={key} value={value}>
                    {`${key} (${(value * 100).toFixed(2)}%)`}
                </option>
            ))}
        </select>
    )
}

export default TaxRateSelector
