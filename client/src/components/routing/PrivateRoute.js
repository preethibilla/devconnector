// import React from 'react'
// import PropTypes from 'prop-types'
// import {connect} from 'react-redux'
// import { Route, Navigate } from 'react-router-dom'


// const PrivateRoute = ({
//     component: Component, 
//     auth:{isAuthenticated, loading}, 
//     ...rest
// }) => (
//     <Route
//         {...rest}
//         render={props => 
//             !isAuthenticated && !loading ? (
//             <Navigate to="/login" />
//             ) : (
//             <Component {...props} />
//             )
//         }
//     />
// )

// PrivateRoute.propTypes = {
//     auth: PropTypes.object.isRequired

// }



// const mapStateToProps = state => ({
//   auth: state.auth
// })
// export default connect(mapStateToProps)(PrivateRoute) 

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children, auth: { isAuthenticated, loading } }) => {
  let location = useLocation();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
