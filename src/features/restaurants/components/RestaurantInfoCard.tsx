import React, { FC } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Card } from 'react-native-paper';
import { theme } from '../../../assets/theme';
import styled from 'styled-components';
import { RestaurantInfoCardProps } from './types';

const Title = styled(Text)`
  padding: ${theme.space[3]};
  color: ${theme.colors.ui.primary};
`;

export const RestaurantInfoCard: FC<RestaurantInfoCardProps> = ({
  restaurant,
}) => {
  const { name, photos } = restaurant;

  return (
    <Card elevation={5}>
      <Card.Cover source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </Card>
  );
};
