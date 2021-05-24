import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { ImageBackground } from 'react-native'
import { Container } from 'native-base'
import { connect } from 'react-redux';
import { ActionAddMessage } from '../redux_reducers/MessageReducer'

class DashboardScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
   
    
  }

  componentWillMount() {

    console.log("done")
  }

  render() {
    return (
      <Container>
        <Text>Setting with parameter after received</Text>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = state => ({
  messageObj: state.messageReducer.messageObj
});
export default connect(mapStateToProps, { ActionAddMessage })(DashboardScreen);