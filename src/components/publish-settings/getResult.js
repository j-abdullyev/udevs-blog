import React from 'react';
import ProfileInfo from '../profile-page/profile-info/profileInfo';
import instance from './instance';
import PublishSettings from './publish-settings';
import ResultDisplay from './resultDisplay.js';


class GetResult extends React.Component{

    state={
        results: []
    }

    componentDidMount(){
        instance.get('/post.json')
        .then (response => {        
            console.log(response.data)
            const receivedResults = []
            for(let key in response.data){
                receivedResults.unshift(
                    {
                        ...response.data[key],
                        id:key
                    }
                )
            }
            this.setState({results:receivedResults})
        })
    }

    render(){
        return(
            <div>
                {this.state.results.map(item => (
                    <ResultDisplay
                        id={item.id}
                        title={item.title}
                        text={item.text}
                        // image={item.image}
                    />
                ))}
            </div>
        )


    }
}



export default GetResult