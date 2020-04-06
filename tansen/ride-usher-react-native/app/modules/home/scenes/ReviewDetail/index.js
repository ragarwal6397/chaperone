import React from 'react';
import { ActivityIndicator } from 'react-native';

import { WebView } from 'react-native-webview';

export default function ReviewDetail(props) {
    const { navigation } = props;
    const reviewDetail = navigation.getParam("reviewDetail");

    //==================================================================================================

    return (
        <WebView source={{ uri: reviewDetail.url }}
                 startInLoadingState={true}
                 onError={() => alert("Failed to load review.")}
                 renderLoading={() => <ActivityIndicator style={{paddingVertical: 8}}/>}/>
    );
};

ReviewDetail.navigationOptions = ({navigation}) => {
    return {
        title: `${navigation.getParam('title')}`
    }
};
