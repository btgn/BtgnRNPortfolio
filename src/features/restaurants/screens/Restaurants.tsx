import React from 'react';
import styled from 'styled-components';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/RestaurantInfoCard';
import { theme } from '../../../assets/theme';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchView = styled(View)`
  padding: ${theme.space[2]};
`;

const ListView = styled(View)`
  flex: 1;
  padding: ${theme.space[3]};
`;

export const Restaurants = () => {
  let restaurant: any = {
    name: 'Some Restaurant',
    icon: 0,
    photos: [
      'https://mediavine-res.cloudinary.com/image/upload/s--YQ5djag5--/c_limit,f_auto,fl_lossy,h_1080,q_auto,w_1920/v1661900841/c50lragarlpinhhzjw43.jpg',
    ],
    address: '5003 SW Kemptown Pl',
    isOpenNow: true,
    rating: 4,
    isClosedTemporarily: false,
  };

  return (
    <SafeArea>
      <SearchView>
        <Searchbar placeholder="Search" value="" />
      </SearchView>
      <ListView>
        <RestaurantInfoCard restaurant={restaurant} />
      </ListView>
    </SafeArea>
  );
};
