
import React from 'react';

export default class Footer extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (


<footer className="footer mt-auto">
    <div className="copyright bg-white">
        <p>
            &copy; <span id="copy-year">2019</span> Copyright Sleek Dashboard Bootstrap Template by
            <a className="text-primary" href="http://www.iamabdus.com/" target="_blank" >Abdus</a>
        </p>
    </div>
</footer>

        );
    }
}