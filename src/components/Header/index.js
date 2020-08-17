import React, { Component } from 'react'
import ibovespaApi from '../../services/api-ibovespa'
import moedasApi from '../../services/api-moedas'

import "./styles.css"

class Header extends Component {

    state = {
        USD: [],
        EUR: [],
        BTC: [],
        IBOVESPA:[]
    }

    componentDidMount(){
        this.loadMoedas()
        this.loadApiIbovespa()
    }

    loadApiIbovespa = async () => {
        const response = await ibovespaApi.get('')
        this.setState({IBOVESPA: response.data['Time Series (Daily)']['2020-07-15']['1. open']})
        console.log(this.state.IBOVESPA)
    } 
    loadMoedas = async () => {
        const response = await moedasApi.get('')
        //console.log(response.data)
        this.setState({USD: response.data.USD.ask})
        this.setState({EUR: response.data.EUR.ask})
        this.setState({BTC: response.data.BTC.ask})
    }
    

    render() {
     return (
        <header id="main-header">
            <div className="cotação" >
                Dolar: R$ {this.state.USD} - Euro: R$ {this.state.EUR} - Bitcoin: R$ {this.state.BTC} - Ibovespa: R$ {this.state.IBOVESPA}
            </div>
        </header>
     )       
    }
}
export default Header






