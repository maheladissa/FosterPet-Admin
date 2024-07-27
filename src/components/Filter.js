import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { fetchFilterData } from '../services/FilterService'; // Adjust the import path as necessary
import { format } from 'date-fns';

const PeriodFilteredData = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const handleFetchData = async () => {
        if (!startDate || !endDate) {
            setError('Please select both start and end dates.');
            return;
        }

        try {
            const formattedStartDate = format(startDate, "yyyy-MM-dd'T'HH:mm:ss.SSSX");
            const formattedEndDate = format(endDate, "yyyy-MM-dd'T'HH:mm:ss.SSSX");
            const result = await fetchFilterData(formattedStartDate, formattedEndDate);
            setData(result);
            setError(null);
        } catch (err) {
            setError('Error fetching data: ' + err.message);
            setData(null);
        }
    };

    return (
        <div>
            <h1>Period Filtered Data</h1>
            <div>
                <label>
                    Start Date:
                    <DatePicker
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                        dateFormat="yyyy-MM-dd"
                        showTimeSelect
                    />
                </label>
            </div>
            <div>
                <label>
                    End Date:
                    <DatePicker
                        selected={endDate}
                        onChange={date => setEndDate(date)}
                        dateFormat="yyyy-MM-dd"
                        showTimeSelect
                    />
                </label>
            </div>
            <button onClick={handleFetchData}>Fetch Data</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {data && (
                <div>
                    <h2>Filtered Data</h2>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default PeriodFilteredData;
