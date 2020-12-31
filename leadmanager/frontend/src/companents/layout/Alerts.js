import React, { Component, Fragment} from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class Alerts extends Component {    
    componentDidUpdate(prevProps){
        const { error, alert, messages} = this.props;
        if(error !== prevProps.error){
            if(error.msg.name){
                alert.error(`Name ${error.msg.name.join()}`)
            }
            if(error.msg.email){
                alert.error(`Email ${error.msg.email.join()}`)
            }
            if(error.msg.message){
                alert.error(`Message ${error.msg.message.join()}`)
            }
        }

        if( prevProps.messages !== messages ){
            // console/
            if(messages.addLead) alert.success("Lead Added")
            if(messages.deleteLead) alert.success("Lead Deleted")
        }
        
    }
    render() {
        return (
            <Fragment/>
        )
    }
}

const mapStateToProps = state => ({
    error: state.errors,
    messages: state.messages
  });

export default connect(mapStateToProps)(withAlert()(Alerts));