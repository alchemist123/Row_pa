import React,{Component} from 'react';
import Sentiment from 'sentiment';
const sentiment=new Sentiment();
class Emotion extends Component {
    constructor(props){
        super(props);
        this.state={
            sentimentScore: null,
            sentimentEmo: null
        };
        this.findSentiment= this.findSentiment.bind(this);

    }
    //find sentiment emotion of the text
    findSentiment(e){
        var result = sentiment.analyze(e.target.value);
        //console.log(result);
        this.setState({
            sentimentScore:result.score
        })
        if(result.score<0)
        {
            this.setState({
                sentimentEmo: "Sad/Anger"

            })
        }else if(result.score>0){
            this.setState({
                sentimentEmo: "Happy"
            })
        }else{
            this.setState({
                sentimentEmo: "Nuteral"
            })
        }

    }
    render(){
        return(
            <div>
                <textarea onChange={this.findSentiment}/>
                <br/>
                <br/>
        <p>sentimentScore:{this.state.sentimentScore}</p>
        <br/>
        <p>Emotion:{this.state.sentimentEmo}</p>
            </div>
        )
    }
}
export default Emotion;
