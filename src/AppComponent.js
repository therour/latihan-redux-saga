import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from './components/Card';
import { toggleLoading } from './redux/Auth/actions';

class AppComponent extends Component {
    buttonOnClick = () => {
        this.props.toggleLoading();
    }

    render() {
        console.log(this.props);

        return (
            <div>
            <b>isLoading:</b> {this.props.loading ? 'true' : 'false'}
            <br></br>

            <Card/>
            <button onClick={this.buttonOnClick}> TOGGLE LOADING </button>
            </div>
        )
    }
}

const mapStateToProps = (state => {
    return { loading: state.Auth.loading }
})

export default connect(mapStateToProps, { toggleLoading })(AppComponent)
