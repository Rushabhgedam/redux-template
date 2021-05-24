import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { ImageBackground } from 'react-native'
import { Container } from 'native-base'
import { connect } from 'react-redux';
import { ActionAddMessage } from './redux_reducers/MessageReducer'

class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    let messageObj = { "Text": "Welcome" }
    console.log("props", this.props)
    setTimeout(() => {
      this.props.ActionAddMessage({ messageObj: messageObj })
      this.props.navigation.navigate("DashboardScreen")
    }, 3000);
  }

  componentWillMount() {

    console.log("done")
  }

  render() {
    return (
      <Container>
        <Text>Getting with parameter after seco nds</Text>
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
// export default SplashScreen;
export default connect(mapStateToProps, { ActionAddMessage })(SplashScreen);