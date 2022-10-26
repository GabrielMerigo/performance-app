import React, { useState } from 'react';

import {
  Text
} from 'react-native';

type Item = {
  data: {
    name: string;
    likes: number;
  }
}

export function Friend({ data }: Item) {
  return (
    <Text>
      {data.name} - Likes: {data.likes}
    </Text>
  )
}