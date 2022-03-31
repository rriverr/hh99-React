import React from "react";
import './style.css'
import { useHistory } from 'react-router-dom'




function Detail(props) {
    const history = useHistory();
    const Day = props.location.pathname.split('/')[2]
    const Circle = Array.from({ length: 5 }, (v, i) => i);

    const [rate, setRate] = React.useState(0);


    React.useEffect(() => {
        const press = (e) => {
            if ([1, 2, 3, 4, 5].indexOf(parseInt(e.key)) !== -1) {
                setRate(parseInt(e.key));
            }
        };
        window.addEventListener("keydown", press);
        return () => window.removeEventListener("keydown", press);
    }, []);

    



    return (
        <div className="detailWrap">
            <h3>{Day}요일 평점 남기기</h3>
            <div className="DetailCircleBox">

                {Circle.map((cur, idx) => {
                    return (
                        <div id={idx} className='Circle' key={idx}
                            onClick={() => {
                                setRate(idx + 1)
                            }}
                            style={{
                                backgroundColor: rate < idx + 1 ? "#ddd" : "royalblue",
                            }}
                        />
                    )
                })}

            </div>
            <button onClick={()=>{history.goBack()}}>평점 남기기</button>
        </div>
    )
}

export default Detail;

