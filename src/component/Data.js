import React from 'react'
import {fetchData} from '../api'
import StateWise from './StateWise';
class Data extends React.Component{
    state = {
        data:[],
        summary: []
    }
    async componentDidMount(){
        const modiFiedData = await fetchData();
        this.setState({ data : modiFiedData});
        console.log("modiFiedData in DATA" , modiFiedData)
    }
    render(){
        const {data} = this.state
        return(
            <div className='home'>
                <StateWise data={ data}/>
            </div>
        );
}
}

export default Data
