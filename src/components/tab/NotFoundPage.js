import React from 'react';
import PropTypes from 'prop-types';

import { Header } from '../header/Header';

import './NotFoundPage.css';

const redirect = history => () => {
    history.push('/calculator');
};

export const NotFoundPage = ({ history }) => (
    <div className="not-found-container">
        <Header/>
        <div className="not-found-content">
            <p className="main-text">
                404
            </p>
            <p className="text">The page you are looking for not available!</p>
            <button type="button" className="btn btn-warning btn-lg" onClick={redirect(history)}>GO TO HOME</button>
        </div>
    </div>
);

NotFoundPage.propTypes = {
    history: PropTypes.object.isRequired,
};
