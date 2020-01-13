// import React from 'react';
// import Modal from 'react-modal-bootstrap';

// export default class CustomerModal extends React.Component {

//     constructor(props, context) {
// 		super(props, context);

// 		this.handleShow = this.handleShow.bind(this);
// 		this.handleClose = this.handleClose.bind(this);

// 		this.state = {
// 			show: false,
// 		};
// 	}

// 	handleClose() {
// 		this.setState({ show: false });
// 	}

// 	handleShow() {
// 		this.setState({ show: true });
// 	}

// 	render() {
// 		return (
// 			<div>
//                 <div>
//                 <button variant="primary" onClick={this.handleShow}>
// 					Launch demo modal
//                 </button>
//                 </div>
				
// 				<Modal show={this.state.show} onHide={this.handleClose}>
// 					<Modal.Header closeButton>
// 						<Modal.Title>Modal heading</Modal.Title>
// 					</Modal.Header>
// 					<Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
// 					<Modal.Footer>
// 						<button variant="secondary" onClick={this.handleClose}>
// 							Close
//                         </button>
// 						<button variant="primary" onClick={this.handleClose}>
// 							Save Changes
//                     </button>
// 					</Modal.Footer>
// 				</Modal>
// 			</div>
// 		);
// 	}
// }

