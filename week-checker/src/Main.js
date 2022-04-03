import React from 'react';
import './style.css'
import { useHistory } from 'react-router-dom'

function Main(props) {
    const Circle = Array.from({ length: 5 }, (v, i) => i);
    const Date = props.Date;

    const history = useHistory();

    const week_rate = Date.map((Date, idx) => {
        return {
            Date: Date,
            rate: Math.floor(Math.random() * (Math.floor(5) - Math.ceil(1) + 1)) + Math.ceil(1)
        }
    })

    
    

    return (

        <div className='Container'>
            <h3>나의 일주일은?</h3>
            
            
            {week_rate.map((day, i) => {
            
            console.log(week_rate)
            
                return (
                
                    <div className='Week-Box' key={i}>
                        <div>
                            <h3>{day.Date}</h3>


                            {Circle.map((cur, idx) => {
                                return <div className='Circle' key={idx} style={{ backgroundColor: day.rate > idx ? "royalblue" : "#ddd" }} />
                            })}


                            <button onClick={() => {
                                history.push(`/detail/${day.Date}`);
                            }}>
                                ▶
                            </button>


                        </div>
                    </div>
                
                )
            
            })}

        </div>
    );
};

export default Main;
