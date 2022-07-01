import { useState } from "react";
import { Button, Form, FromGroup, Label, Input, FormTest, FormGroup } from 'reactstrap';
import reservationImg from '../images/reservationImg.jpg'

const Reservation = () => {
    const [name, setName] = useState("");
    const [guests, setGuest] = useState(2);

    const minusGuest = () => {
        if (guests > 1) {
            setGuest(guests - 1);
        }
    }
    const addGuest = () => {
        if (guests < 8) {
            setGuest(guests + 1);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setGuest(2);
        setName("");
        
    }
    return (
        <div>
            <div className="mx-auto col-6 col-md-5 mt-5">
                <img src={reservationImg} className="w-100 mx-auto img-fluid rounded" />
            </div>
            <Form onSubmit={handleSubmit} className="col-xs-6 col-md-5 d-flex flex-column mx-auto my-5">
                <h2 className="mx-auto font">make a reservation</h2>
                <FormGroup>
                    <label for="name">name: </label>
                    <input type="text" default="name" className="form-control" />
                </FormGroup>
                <FormGroup>
                    <label>number of guests:</label>
                    <div className="guests-number-div pt-3 d-flex justify-content-center">
                        <div className="minus" onClick={minusGuest}>-</div>
                        <div className="guests-number mx-5">
                            {guests}
                        </div>
                        <div className="plus" onClick={addGuest}>+</div>
                    </div>
                </FormGroup>
                <FormGroup>
                    <label for="date">date:</label>
                    <input id="date" className="form-control" type="date" />
                </FormGroup>
                <FormGroup>
                    <label for="appt-time">time: </label>
                    <input id="appt-time" type="time" name="appt-time" className="form-control" value="13:30"></input>
                </FormGroup>

                <Button>reserve</Button> 
            </Form>
        </div>
        
    )
}

export default Reservation;