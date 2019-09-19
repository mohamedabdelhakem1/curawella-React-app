import React from 'react';
import './doctorInfo.css'
import StarRatings from 'react-star-ratings';
import docImg from './woman doctor.png';

class DoctorInfo extends React.Component {
    about = `Adept medical doctor with eight solid years of practice experience. Dedicated to exemplary\
     patient outcomes and following all necessary medical procedures with the use of the latest industry 
     equipment and technology. Strong focus on listening to and addressing patient concerns and answering all
      questions in terms patients can easily understand. Willingness to work with all members of
      the medical team and listen to their suggestions and input to improve results and maximize
      patient satisfaction.`;
    locaction = `42 mekawy street ,roshdy ,Alexandria`;
    title = `Speciality`;
    cost = [100, 100, 100];
    render() {
        return (<section>
            <div className="doctor__header">
                <h1 className="doctor__name">
                    Dr Jane Smith
                </h1>
                <StarRatings rating={4}
                    starRatedColor="#f5ea74"
                    starDimension="17px"
                    numberOfStars={5}
                    starSpacing="2px" />
            </div>
            <div className="doctor__info">
                <img className="img" src={docImg} alt="doctor_image"></img>
                <div className="doctor__about">
                    <p className="doctor__infoName">Dr Jane Smith</p>
                    <p className="doctor__content">{this.title}</p>
                    <p className="doctor__infoTitle">About Me</p>
                    <p className="doctor__content">{this.about} </p>
                    <p className="doctor__infoTitle">Location</p>
                    <p className="doctor__content">{this.locaction}</p>
                    <p className="cost__line">
                        <span className="doctor__cost">Call: {this.cost[0]} L.E</span>
                        <span className="doctor__cost">Clinic: {this.cost[1]} L.E</span>
                        <span className="doctor__cost">Home: {this.cost[2]} L.E</span>
                    </p>
                </div>
            </div>

        </section>);
    }
}
export default DoctorInfo;