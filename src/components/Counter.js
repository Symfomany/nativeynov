
import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from '../../store';

export function Counter ()
{
    const count = useSelector( selectCount );
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState( 2 );

    return (
        <View>
            <Button 
                onClick={() => dispatch( increment() )} title="Increment" />
            <Button 
          onClick={() => dispatch(incrementAmount(5))} title="Increment Amount" />
            <Text>{count}</Text>
        </View>
    )
    
}
