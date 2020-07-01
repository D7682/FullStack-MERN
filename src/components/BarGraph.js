import React from 'react';
import {Bar} from 'react-chartjs-2';
import Panel from './Panel';

export default class BarGraph extends React.Component{
    state={
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
        data: [0, 10, 5, 2, 20, 30, 45],
        label: "My First dataset",
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        }]
    }

    change = () => {
        this.setState( prevState => {
            const datasets = prevState.datasets;
            datasets[0].data = [10,20,30,40,50,60,70];
            return {datasets}
        })
    }

    revert = () => {
        this.setState( prevState => {
            const datasets = prevState.datasets;
            datasets[0].data = [0, 10, 5, 2, 20, 30, 45]
            return {datasets}
        })
    }
    render(){
    return(
        <>
        <Bar data={this.state}/>
        <Panel changeProp={this.change} revertChange={this.revert}/>
        </>
    )
    }
}