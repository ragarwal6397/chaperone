import React from 'react';
import {FlatList, RefreshControl, ActivityIndicator} from 'react-native';

import {connect} from 'react-redux';

import Review from "../../components/Review"

import {actions as home} from "../../index"
const { getReviewsByPlate } = home;

class Source extends React.Component {
    constructor() {
        super();
        this.state = {
            refreshing: false,
            isFetching: true,
            reviews:[],
            hasError:false,
            errorMsg: ""
        }
    }

    componentDidMount() {
        this.getReviewsByPlate(false, true)
    }

    getReviewsByPlate = (refreshing = true, isFetching=false) => {
        let province = this.props.province;
        let plate = this.props.plate;

        this.setState({refreshing, isFetching});
        this.props.getReviewsByPlate(province, plate)
            .then(({reviews}) => this.setState({reviews}))
            .catch((error) => alert(error.message))
            .finally(() => this.setState({refreshing: false, isFetching:false}));
    }

    renderItem = ({item, index}) => {
        return <Review review={item}/>
    }

    render() {
        const {reviews, isFetching, hasError, errorMsg} = this.state;

        if (isFetching) return <ActivityIndicator/>
        else {
            return (
                <FlatList
                    style={{backgroundColor:'#eaeaea'}}
                    contentContainerStyle={{paddingVertical:5,}}
                    ref='listRef'
                    data={reviews}
                    extraData={this.state}
                    renderItem={this.renderItem}
                    initialNumToRender={5}
                    keyExtractor={(item, index) => index.toString()+"_source"}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this.getReviewsByPlate}
                        />
                    }/>
            );
        }
    }
}

export default connect(null, { getReviewsByPlate })(province, plate);
