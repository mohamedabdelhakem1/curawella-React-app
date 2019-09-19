import React from 'react';
import './booking.css'
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
class Booking extends React.Component {
    render() {
        return (
            <section className="booking__section">
                <div className="Button__box">
                    <button className="button">Video Call</button>
                    <button className="button">Clinic</button>
                    <button className="button">Home</button>
                </div>
                <div className="booking__box">
                    <div className="calender">
                        <DayPicker className="DayPicker" />
                    </div>
                    <div>
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
            </section>
        );
    }
}
export default Booking;