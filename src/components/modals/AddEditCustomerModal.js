import React from 'react';
import Modal from '@trendmicro/react-modal';

const AddEditCustomerModal = ({ size = 'sm', closeModal, ...props }) => (
  <Modal {...props} size={size} onClose={closeModal}>
    <Modal.Header>
      <Modal.Title>Modal Title</Modal.Title>
    </Modal.Header>
    <Modal.Body padding>Modal Body</Modal.Body>
    <Modal.Footer>
      <button className='btn btn-primary' onClick={closeModal}>
        Save
      </button>
      <button class='btn btn-primary' onClick={closeModal}>
        Close
      </button>
    </Modal.Footer>
  </Modal>
);

export default AddEditCustomerModal;
