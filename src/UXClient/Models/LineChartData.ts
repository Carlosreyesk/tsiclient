import {Utils} from "./../Utils";
import {ChartComponentData} from "./ChartComponentData";

class LineChartData extends ChartComponentData {
    public timeMap: any = {};


    public setTimeMap () {
        this.timeMap = this.allValues.reduce ((timeMap, currVal) => {
            var millis = currVal.dateTime.valueOf();
            if (currVal.bucketSize != undefined) {
                millis += (currVal.bucketSize / 2);
            }
            if (currVal.measures != null) {
                if (timeMap[millis] == undefined) {
                    timeMap[millis] = [currVal];
                } else {
                    timeMap[millis].push(currVal);
                }    
            }
            return timeMap;
        }, {});
    }

	constructor(){
        super();
    }

    public mergeDataToDisplayStateAndTimeArrays (data, aggregateExpressionOptions = null) {
        super.mergeDataToDisplayStateAndTimeArrays(data, aggregateExpressionOptions);
    }
}
export {LineChartData}
