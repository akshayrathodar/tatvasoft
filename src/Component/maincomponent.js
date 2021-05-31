import React from 'react';

import {Textbx} from '../Elements/textbx'; 
import Buttons from '../Elements/button';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

class MainComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            shares:[],
            text:0,
            myfinalres:[],
            totalearning: 0,
            totalinvest:0
        };
    }

    componentDidMount() {
        this.setState({shares:[{'id':1,'name':'L & T','buy':100,'sell':112},
                        {'id':2,'name':'NHPC','buy':25.6,'sell':28.8},
                        {'id':3,'name':'SBICARD','buy':80,'sell':85.4},
                        {'id':4,'name':'Apollo','buy':250,'sell':195},
                        {'id':5,'name':'Edelweiss','buy':290.24,'sell':62.8},
                        {'id':6,'name':'ITC','buy':153.95,'sell':244.94},
                        {'id':7,'name':'TCS','buy':456,'sell':561},
                        {'id':8,'name':'CEAT','buy':200,'sell':205.44},
                        {'id':9,'name':'HDFC','buy':806,'sell':1008.5},
                        {'id':10,'name':'PowerGrid','buy':190,'sell':565.45},
                        {'id':11,'name':'Axis','buy':30.5,'sell':80.54},
                        {'id':12,'name':'Bajaj','buy':31.60,'sell':81.65},
                        {'id':13,'name':'CIPLA','buy':140,'sell':157.45},
                        {'id':14,'name':'EKC','buy':80.5,'sell':88.5},
                        {'id':15,'name':'EMCO','buy':25.6,'sell':0.45}
                     ]})
    }

    // for calculation point 
    calculateMyProfit = () => {
        if(this.state.text > 0) {
            let shares = this.state.shares;
            let mybudget = this.state.text;

            let ProfitShare = shares.filter((data) => {
                // data['profit'] = data.sell - data.buy;
                return (data.sell - data.buy) >= 0;
            })
            
            ProfitShare.map((data) => {
                data['earning'] = (data.sell - data.buy);
            })

            ProfitShare.sort((f,s) => f.earning - s.earning);
            ProfitShare = ProfitShare.reverse();

            // Now Possible Shares
            let investment = 0;
            let fres = [];
            ProfitShare.map((share) => {
                if(mybudget > share.buy) {
                    mybudget = mybudget - share.buy;
                    investment = investment + share.buy;
                    fres.push(share);
                }
            }); 
            this.setState({myfinalres:fres,totalinvest:investment})


        } else {
            alert('Please put proper value');
        }
    }

    // this will fire on textbox value change
    txtChange = (e) => {
        let value = e.target.value;

        if(!isNaN(value)) {
            this.setState({text:e.target.value});
        }

    }

    render() {
        
        return(
            <>
                <Container >
                    
                    <Grid container>
                        <Grid item xs={8}>
                            <>
                            <Textbx value={this.state.text} name="Calculate" changeEvent={this.txtChange} />  
                            {this.state.totalinvest > 0 && <h1>Total Investment : {this.state.totalinvest}</h1>}
                            {this.state.totalearning > 0 && <h1>Total Investment : {this.state.earning}</h1>}
                            </>
                        </Grid>
                        <Grid item xs={4}>
                        
                        <Buttons text="calculate" clickevt={this.calculateMyProfit} />
                        </Grid>
                    </Grid>
                
                
                {this.state.myfinalres.map((data) => {
                    return <div><h1>Company Name : {data.name}</h1><span>Earning : {data.earning}</span></div>
                })}
                
                </Container>
            </>
        );
    }
}

export default MainComponent;