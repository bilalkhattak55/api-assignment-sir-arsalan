import React from 'react';

const Card = ({users}) => {
    return (
        <>
        <button className='btn btn-dark rounded-pill mt-5 crt-btn'>Create User</button>
            {
                users.map((elem, index)=> {
                    console.log(elem)
                    return <><div className="user-card mt-5" key={index}>
                        <div className="card d-flex flex-row">
                            <div className="col">
                                <img className='card-img rounded-circle' width={100} src={elem.avatar} alt="img" />
                            </div>
                            <div className="col">
                                <h2>{elem.first_name} {elem.last_name}</h2>
                                <p>UI/UX Designer at Google</p>
                                <p className="grey">{elem.email}</p>
                            </div>
                            <div className="col d-flex justify-content-center align-items-center">
                                <ion-icon className="icon1" name="logo-instagram"></ion-icon>
                                <ion-icon className="icon2" name="logo-linkedin"></ion-icon>
                            </div>
                        </div>
                    </div>
                    </>
                })
            }

        </>
    )
}

export default Card;
