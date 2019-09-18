import React from 'react';
import './booking.css'
import Calender from 'react-calendar'

class Booking extends React.Component {
    render() {
        return (
            <div>
                <div className="Button__box">
                    <button className="button">Video Call</button>
                    <button className="button">Clinic</button>
                    <button className="button">Home</button>
                </div>
                <div className="booking__box">
                    <div>
                        <Calender className="calender" value={new Date()} />
                    </div>
                    <form className="form__booking">
                        <p>Make an appointment</p>
                        <select className="appointment">
                            <option value="Online">Online</option>
                            <option value="Clinic">Clinic</option>
                            <option value="Home">Home</option>
                        </select>
                        <div className="appoint_date">
                            <input className="date__picker" type="date" name="date"></input>
                            <input className="time__picker" type="time" name="time"></input>
                        </div>
                        <button className="Book">Book</button>
                    </form>
                </div>
            </div>
        );
    }
}
export default Booking;