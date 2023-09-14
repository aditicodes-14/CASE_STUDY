import React from "react";
import './selection.css';
import { Form } from 'react-bootstrap';
function Bodyhead(){

    return(
        <div>
            <div className="c1">
                <br></br>
                <div class="row">
                <div className="col-md-6">
                        <Form.Group controlId="dob">
                        <label for="datess">Pickup Date</label>
                            <Form.Control type="date" className="datess" />
                        </Form.Group>
                    </div>
            
  <div className="col-md-6">
                        <Form.Group controlId="dob">
                            <label for="dates">Drop Date</label>
                            <Form.Control type="date" name="dob" className="dates" />
                        </Form.Group>
                    </div>
</div>
<br></br>

</div>
        </div>
    )
}

export default Bodyhead;