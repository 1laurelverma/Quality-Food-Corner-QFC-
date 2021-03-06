import React from 'react'
import { arrayBufferToBase64 } from '../../assets/BufferToBase64'
import './DeveloperCard.css'

const DeveloperCard = (props) => {

    const { name, email, developerImage, facebook, instagram, linkedin } = props

    var img, binarystring;

    if(developerImage){
        binarystring = arrayBufferToBase64(developerImage.data.data)
        img = `data:image/jpeg;base64, ${binarystring}`;
    }

    return (
        <div className="card">
            <div className="content">
                <div className="imgBx"><img src={img} alt="..."/></div>
                <div className="contentBx">
                    <h3>{name}<br /><span className="subheading">{email}</span></h3>
                </div>
            </div>
            <ul className="sci">
                <li>
                    <a href={facebook} target="_blank" rel="noreferrer"><i className="fab fa-facebook-f" style={{color: 'black'}} aria-hidden="true"></i> </a>
                </li>
                <li>
                    <a href={instagram} target="_blank" rel="noreferrer"><i className="fab fa-instagram" style={{color: 'black', fontWeight:"900"}} aria-hidden="true"></i> </a>
                </li>
                <li>
                    <a href={linkedin} target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in" style={{color: 'black'}} aria-hidden="true"></i> </a>
                </li>
            </ul>
        </div>
    )
}

export default DeveloperCard;