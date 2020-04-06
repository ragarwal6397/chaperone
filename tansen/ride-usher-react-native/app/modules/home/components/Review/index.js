import React from 'react';
import {Text, View, TouchableHighlight, Image} from 'react-native';
import moment from "moment";

import {Actions} from 'react-native-router-flux'

import styles from "./styles"

const Review = ({review}) => {
    const {title, url, rating, province, plate, text, reviewedAt} = review;
    return (
        <TouchableHighlight
            style={styles.container}
            underlayColor={"transparent"}
            onPress={() => Actions.ReviewDetail({review, title})}>
            <View style={[styles.wrapper]} onPress={() => Actions.ReviewDetail({province, plate, url, rating, title: `${title}`})}>
                <View style={[styles.info]}>
                    <Text style={[styles.text]}>
                        {text}
                    </Text>

                    <View style={[styles.bottom]}>
                        <Text style={[styles.source]} >
                            {province} {plate}
                        </Text>
                        <Text style={[styles.date]}>
                            {moment(reviewedAt).fromNow()}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableHighlight>
    );
}

export default Review;
