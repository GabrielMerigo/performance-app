import React from 'react';
import { Friend } from './Friend';

import {
  View
} from 'react-native';

type ItemProps = {
  data: {
    id: number;
    name: string;
    likes: number;
  }[];
}

export function FriendsList({ data }: ItemProps) {
  return (
    <View>
      {
        data.map(item => (
          <Friend data={item} />
        ))
      }
    </View>
  )
}