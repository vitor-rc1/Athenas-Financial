import React, {Component} from 'react'


import logoImg from "../../Assests/Images/logo.jpg"
import searchImg from "../../Assests/Images/search.svg"
import Grafico from "../../components/graficos"

import backendAPI from "../../services/api-backend"


import "./styles.css"


class Home extends Component{
    state = {
        Empresa: [],
        Empresa2: [],
        Open: [],
        High: [],
        Low: [],
        Close:[],
        Volume: [],
        Dividends: [],
        StockSplits: [],
        labelsChart1:[],
        dadosChart1:[],
        labelsChart2:[],
        dadosChart2:[],
        labelsChart2:[],
        dadosChart2:[],
        showing: false

    }
    loadApiBackend = async (e) => {
        e.preventDefault()
        const busca = this.state.Empresa
        var showContent = false
        const response = await backendAPI.get(`/main_sys=${busca}`)
        .then(
            showContent = true
        )
        .catch(
            alert("Empresa não encontrada")
        )

        this.setState({Empresa2: this.state.Empresa})
        this.setState({Open: response.data.Open})
        this.setState({High: response.data.High})
        this.setState({Low: response.data.Low})
        this.setState({Close: response.data.Close})
        this.setState({Volume: response.data.Volume})
        this.setState({Dividends: response.data.Dividends})
        this.setState({StockSplits: response.data['Stock Splits']})
        this.setState({labelsChart1: [0,1,2,3,4]})
        this.setState({dadosChart1: [0,4,1,5,10]})
        this.setState({labelsChart2: [0,1,2,3,4]})
        this.setState({dadosChart2: [0,2,4,8,16]})
        this.setState({labelsChart3: [0,1,2,3,4]})
        this.setState({dadosChart3: [1,2,3,4,11]})
        
        
        

        this.setState({showing: true})

    }

    //Dados para fazer um teste manualmente

    searchBackend = (e) => {
        e.preventDefault()
        
        this.setState({Empresa2: this.state.Empresa})
        this.setState({Open: 100.1})
        this.setState({High: 100.2})
        this.setState({Low: 100.3})
        this.setState({Close: 100.4})
        this.setState({Volume: 100.5})
        this.setState({Dividends: 100.6})
        this.setState({StockSplits: 100.7})

        this.setState({labelsChart1: [0,1,2,3,4]})
        this.setState({dadosChart1: [0,4,1,5,10]})
        this.setState({labelsChart2: [0,1,2,3,4]})
        this.setState({dadosChart2: [0,2,4,8,16]})
        this.setState({labelsChart3: [0,1,2,3,4]})
        this.setState({dadosChart3: [1,2,3,4,11]})
        
        
        

        this.setState({showing: true})
        
        

    }
    carregar = () =>{
        return(
        <div className="result" >
            <div className="tabela">
                <h2>{this.state.Empresa2}</h2>
                <p>Open:{this.state.Open}</p>
                <p>High:{this.state.High}</p>
                <p>Low:{this.state.Low}</p>
                <p>Close:{this.state.Close}</p>
                <p>Volume:{this.state.Volume}</p>
                <p>Dividends:{this.state.Dividends}</p>
                <p>Stock Splits: {this.state.StockSplits}</p>
            </div>
        <div className="grafico" >
            <Grafico dados={[this.state.Empresa2, this.state.labelsChart1, this.state.dadosChart1, 'Noticias/polaridade', '#D35E5E']}/>
            <Grafico dados={[this.state.Empresa2, this.state.labelsChart2, this.state.dadosChart2, 'Noticia Subjetividade','#85C1E9']}/>
            <Grafico dados={[this.state.Empresa2, this.state.labelsChart3, this.state.dadosChart3, 'Ações/Tempo', '#4AEC4D']}/>
        </div> 
    </div>
    )
    }

    mudarFalso = () =>{
        this.setState({showing: false})
    }

    

    render(){
        return (
    
            <div className="home" >
                
                
                <div className="logo">
                    <p> Athenas Financial </p>
                    <img src={logoImg} alt="Logo" />
                </div>
                <div className="searchBox">
                    <form id="search" onSubmit={this.loadApiBackend}>
                        <input onChange= {e => 
                            {
                                this.setState({Empresa: e.target.value})
                                this.mudarFalso()} 
                            } />
                        <button className="searchBoxButton" type="submit" > 
                        <img src={searchImg} alt="" />
                        </button>
                    </form>
                   
                    
                    
                </div>
                
                    {
                        this.state.showing
                        ? this.carregar()
                        : null
                    }   

            </div>
        
        )
    }
}



export default Home