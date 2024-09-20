import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const BookingModal = () => {

  return (
    <div className="modal fade" id="bookingModal" tabIndex="-1" aria-labelledby="bookingModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="bookingModalLabel">Book a Package</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" required />
              </div>
              <div className="mb-3">
                <label htmlFor="date" className="form-label">Preferred Date</label>
                <input type="date" className="form-control" id="date" required />
              </div>
              <div className="mb-3">
                <label htmlFor="time" className="form-label">Preferred Time</label>
                <input type="time" className="form-control" id="time" required />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;