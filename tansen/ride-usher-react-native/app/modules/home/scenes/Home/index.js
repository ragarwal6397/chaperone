import React from 'react';
import { ActivityIndicator, Picker } from 'react-native';

import { connect } from 'react-redux';

import { actions as home } from "../../index"

const { getProvinces } = home;
class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            refreshing: false,
            province: 'Select State',
            plate: 'Enter Plate'
        }
    }

    componentDidMount() {
        this.getProvinces(false)
    }

    getProvinces = (refreshing = true) => {
        this.setState({refreshing});
        this.props.getProvinces()
            .finally(() => this.setState({refreshing: false}));
    }

    renderProvinceChoices = () => {
        const { provinces } = this.props;
        return provinces.map((province) =>
            <Picker.Item label = {province.name} value = {province.abbreviation} />
        );
    }

    updateProvince = (province) => {
        this.setState({ province: province });
    }

    updatePlate = (plate) => {
        this.setState({ plate: plate });
    }

    render() {
        const {isFetching, hasError,errorMsg} = this.props;

        if (isFetching) return <ActivityIndicator/>
        else {
            return (
                <View>
                    <Picker selectedValue = {this.state.province} onValueChange = {this.updateProvince}>
                        {this.renderProvinceChoices}
                    </Picker>
                    <TextInput style = {styles.input}
                               underlineColorAndroid = "transparent"
                               placeholder = "Enter Plate"
                               placeholderTextColor = "#9a73ef"
                               autoCapitalize = "none"
                               onChangeText = {this.updatePlate}/>
                    <TouchableOpacity style = {styles.submitButton}
                                      onPress = {() =>
                                        Actions.Reviews({province: province, plate: plate, title: `${province.abbreviation} ${plate}`})
                                      }>
                    <Text style = {styles.submitButtonText}> Get Reviews </Text>
                    </TouchableOpacity>
                </View>
            );
        }
    }
}

function mapStateToProps(state, props) {
    return {
        isFetching: state.homeReducer.isFetching,
        hasError: state.homeReducer.hasError,
        errorMsg: state.homeReducer.errorMsg,
        provinces: state.homeReducer.provinces
    }
}

export default connect(mapStateToProps, { getProvinces })(Home);
