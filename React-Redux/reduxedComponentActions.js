import DataService from '../services/dataService';
import {ACTIONS} from './constants';

let reduxedComponentActions = {

 
    getSomeDataSuccess: function (someData) {
        return {
            type: ACTIONS.GET_SOME_DATA_SUCCESS,
            response: someData
        }
    },
    getSomeData: function () {

        return function (dispatch) {
            return DataService.get({
                endpoint: 'somedata',
                success: function (someDataResponse) {
                   
                    dispatch(this.getSomeDataSuccess(someDataResponse));
                }.bind(this),
                error: function (status, error) {
                   
                }.bind(this)
            });
        };
    }

};

export default reduxedComponentActions;
