import React from "react";

export interface RestaurantInfoCardProps {
	restaurant: {
		name: string;
		icon: any;
		photos: Array<string>;
		address: string;
		isOpenNow: boolean;
		rating: number;
		isClosedTemporarily: boolean;
	};
}
