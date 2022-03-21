import React, {useState, useEffect} from 'react';

const CalendarPage = () => {
    const now = new Date();
    const nowyear = now.getFullYear;
    const nowmonth = now.getMonth;
    const [month, Setmonth] = useState(0);
    
    return(
        <div>
            <button onClick={() => Setmonth(month-1)}>1</button>
            <h1>{month}</h1>
            <button onClick={() => Setmonth(month +1)}>1</button>           
        </div>
        
    );
}

export default CalendarPage;