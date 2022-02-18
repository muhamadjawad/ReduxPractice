import {View, Text, Button} from 'react-native';
import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {useState} from 'react';

let api = '';
const CounterComponent = props => {
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        console.log('Response ', json);
        api = json;
      });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      props.api(api);
    }, 5000);
  }, []);

  return (
    <View>
      <Button title={'Add'} onPress={() => props.increment()} />
      <Text>{props.count}</Text>
      <Button title={'Sub'} onPress={() => props.decrement()} />
      <Text>{props.api}</Text>
    </View>
  );
};

const mapStateToProps = state => {
  console.log('state', state);

  return {
    count: state.counterReducer.count,
    api: state.counterAPI.payload,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({type: 'COUNTER_INCREMENT'}),
    decrement: () => dispatch({type: 'COUNTER_DECREMENT'}),
    api: value => dispatch({type: 'COUNTER_API', payload: value}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
