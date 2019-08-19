import {Bar} from "react-chartjs-2";
import React from "react";

const data = {
    labels: ['from 0 to 1'],
    datasets: [
        {
            label: 'Registered',
            backgroundColor: 'rgba(75,192,192,0.4)',
            data: [65,100]
        },

        {
            label: 'Left',
            backgroundColor: 'red',
            data: [15,100]
        }

    ],

};

export default function Char({charVisibility}) {
    if(charVisibility) {
        return (
            <div>
                <h2>Char</h2>
                <Bar
                    width={150}
                    height={230}
                    options={{
                        maintainAspectRatio: false
                    }}
                    data={data}/>
            </div>
        )
    }
    else return null
}