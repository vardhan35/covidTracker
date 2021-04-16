import React from 'react'

const Summary = ({data : {summary}}) => {
    console.log("SUMMARY = ",summary)
    if(!summary){
        return 'loading...';
    }
    return (
        <div className="summary">
            {/* {[
                summary.map((item, index)=>{
                    const {confirmedCasesIndian,deaths,discharged,total} = item;
                    return(
                        <div className="summary_list">
                            <h2>confirmedCasesIndian : {confirmedCasesIndian}</h2>
                            <h2>Deaths : {deaths}</h2>
                            <h2>DisCharged :{discharged}</h2>
                            <h2>Total : {total} </h2>
                        </div>
                    )
                })
    ]} */}
        </div>
    )
}

export default Summary
