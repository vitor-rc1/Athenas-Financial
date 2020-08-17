import React, { useEffect, useState} from 'react'

import {Line} from 'react-chartjs-2'

import './styles.css'

const Grafico = ({dados}) => {
    const [chartData, setChartData] = useState({})

        const chart = () => {
            setChartData ({
                labels: dados[1],
                datasets: [ {
                    label: '',
                    data: dados[2],
                    backgroundColor: [dados[4]],
                    borderWidth: 4
                }

                ]
            })
        }
        useEffect(() =>{
            chart()
        },[])




        return(
            <div className="charts" >
                <p>{dados[3]}</p>
            <Line data={chartData} options={{
                responsive:true
            }}/> 
            </div>
        )
}

export default Grafico

