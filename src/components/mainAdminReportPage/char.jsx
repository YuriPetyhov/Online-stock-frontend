import {Bar} from "react-chartjs-2";
import React from "react";

export default function Char({charVisibility, fromDate, toDate, statistic}) {

    console.log(statistic)
    const data = {
        labels: [`From ${fromDate}                      To ${toDate}`],
        datasets: [
            {
                label: 'Created',
                backgroundColor: 'rgba(75,192,192,0.4)',
                data: statistic.created
            },

            {
                label: 'Deleted',
                backgroundColor: 'red',
                data: statistic.deleted
            }

        ],

    };

    if (charVisibility) {
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
    } else return null
}