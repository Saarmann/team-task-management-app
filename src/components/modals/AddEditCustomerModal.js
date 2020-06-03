import React from 'react';
import Modal from '@trendmicro/react-modal';

const AddEditCustomerModal = ({ size = 'sm', closeModal, ...props }) => (
  <Modal size={400} onClose={this.closeModal}>
    <Modal.Header>
      <Modal.Title>
        Customer
      </Modal.Title>
    </Modal.Header>
    <Modal.Body padding>

      <div className="card-body">
        <form >
          <div className="form-row">
            <div className="col-md-12 mb-3">
              <label for="validationServer01">Customer name</label>
              <input type="text" className="form-control" id="validationServer01" placeholder="Company name" required />
            </div>
          </div>

          <div className="form-row">
            <div className="col-md-6 mb-3">
              <label for="validationServer03">Registration code</label>
              <input type="text" className="form-control" id="validationServer03" placeholder="Code" required />
            </div>
            <div className="col-md-6 mb-3">
              <label for="validationServer04">VAT No.</label>
              <input type="text" className="form-control" id="validationServer04" placeholder="Number" />
            </div>
          </div>

          <div className="form-row">
            <div className="col-md-6 mb-3">
              <label for="validationServer01">Address</label>
              <input type="text" className="form-control" id="validationServer01" placeholder="Street address" />
            </div>
            <div className="col-md-6 mb-3">
              <label for="validationServer03">City</label>
              <input type="text" className="form-control" id="validationServer03" placeholder="City" />
            </div>

          </div>

          <div className="form-row">
            <div className="col-md-6 mb-3">
              <label for="validationServer03">Country</label>
              <input type="text" className="form-control" id="validationServer03" placeholder="Country" />
            </div>
            <div className="col-md-3 mb-3">
              <label for="validationServer04">State</label>
              <input type="text" className="form-control" id="validationServer04" placeholder="State" />

            </div>
            <div className="col-md-3 mb-3">
              <label for="validationServer05">Zip</label>
              <input type="text" className="form-control" id="validationServer05" placeholder="Zip" />

            </div>
          </div>

          <div className="form-row">
            <div className="col-md-12 mb-3">
              <label for="validationServer02">Email address</label>
              <input type="text" className="form-control" id="validationServer02" placeholder="Email" />
            </div>
          </div>

          <div className="form-row">
            <div className="col-md-6 mb-3">
              <label for="validationServer03">Contact</label>
              <input type="text" className="form-control" id="validationServer03" placeholder="Phone number" />

            </div>
            <div className="col-md-6 mb-3">
              <label for="validationServer04">Payment term</label>
              <input type="text" className="form-control" id="validationServer04" placeholder="Days" />
            </div>
          </div>

        </form>
      </div>

    </Modal.Body>
    <Modal.Footer>
      <button type="button" class="btn btn-primary" onClick={this.saveCustomer}>Save customer</button>
      <button type="button" class="btn btn-danger" onClick={this.closeModal}>Close</button>

    </Modal.Footer>
  </Modal>
);

export default AddEditCustomerModal;
