import React from 'react'

const StateWise = ({data :{regional}}) => {

    console.log("STATEWISE REGIONAL = ",regional)
    if(!regional){
        return <div className="loading">
            <h1 className='loading__titile'>Loading...</h1>
        </div>;
    }
    return (
        <div className="states">
            { 
            regional.map((item, index)=>{
                    const {loc, confirmedCasesIndian, deaths,discharged,totalConfirmed} = item;
                    return(
                        <div className="list" key ={index}>
                            <h2>State : {loc}</h2>
                            <h3>Confirmed :  {confirmedCasesIndian}</h3>
                            <h3>Deaths : {deaths}</h3>
                            <h3>Cured : {discharged}</h3>
                            <h3>Total : {totalConfirmed}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default StateWise
