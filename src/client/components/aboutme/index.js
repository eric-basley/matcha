import React, { Component } from 'react';
import connect from 'redux';
import FormAboutMe from './form';
import { updateUserInfos } from './actions';

class AboutMe extends Component {
  
  render() {
    return (
      <div>
        <div className="home-container" >
          <FormAboutMe onSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = {

};

const mapDispatchToProps = {
  updateUserInfos,
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutMe);

