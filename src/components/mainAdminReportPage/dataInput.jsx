import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
        DatePicker,
        MuiPickersUtilsProvider
} from "@material-ui/pickers";

function App() {
        const [selectedDate, handleDateChange] = useState(new Date());

        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker
                        disableFuture
                        openTo="year"
                        format="dd/MM/yyyy"
                        label="from"
                        views={["year", "month", "date"]}
                        value={selectedDate}
                        onChange={handleDateChange}
                        style={{marginTop:'2%'}}
                    />
                    <DatePicker
                        disableFuture
                        openTo="year"
                        format="dd/MM/yyyy"
                        label="to"
                        views={["year", "month", "date"]}
                        value={selectedDate}
                        onChange={handleDateChange}
                        style={{marginTop:'7%'}}
                    />
            </MuiPickersUtilsProvider>
        );
}

export default App;