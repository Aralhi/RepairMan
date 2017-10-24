"use strict";
/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
var Mongoose = require("mongoose");
var Constants = require("./../../config/constants/constants");
var DataAccess = (function () {
    function DataAccess() {
        DataAccess.connect();
    }
    DataAccess.connect = function () {
        if (this.mongooseInstance)
            return this.mongooseInstance;
        this.mongooseConnection = Mongoose.connection;
        this.mongooseConnection.once("open", function () {
            console.log("Connected to mongodb.");
        });
        this.mongooseInstance = Mongoose.connect(Constants.DB_CONNECTION_STRING);
        return this.mongooseInstance;
    };
    return DataAccess;
}());
DataAccess.connect();
module.exports = DataAccess;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXRhQWNjZXNzL0RhdGFBY2Nlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOztHQUVHO0FBRUgsbUNBQXNDO0FBQ3RDLDhEQUFpRTtBQUVqRTtJQUlJO1FBQ0ksVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFTSxrQkFBTyxHQUFkO1FBQ0ksRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUV2RCxJQUFJLENBQUMsa0JBQWtCLEdBQUksUUFBUSxDQUFDLFVBQVUsQ0FBQztRQUMvQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUN6RSxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQ2pDLENBQUM7SUFDTCxpQkFBQztBQUFELENBbkJBLEFBbUJDLElBQUE7QUFFRCxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDckIsaUJBQVMsVUFBVSxDQUFDIiwiZmlsZSI6ImFwcC9kYXRhQWNjZXNzL0RhdGFBY2Nlc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgTW9pei5LYWNod2FsYSBvbiAxNS0wNi0yMDE2LlxuICovXG5cbmltcG9ydCBNb25nb29zZSA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTtcbmltcG9ydCBDb25zdGFudHMgPSByZXF1aXJlKFwiLi8uLi8uLi9jb25maWcvY29uc3RhbnRzL2NvbnN0YW50c1wiKTtcblxuY2xhc3MgRGF0YUFjY2VzcyB7XG4gICAgc3RhdGljIG1vbmdvb3NlSW5zdGFuY2U6IGFueTtcbiAgICBzdGF0aWMgbW9uZ29vc2VDb25uZWN0aW9uOiBNb25nb29zZS5Db25uZWN0aW9uO1xuXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICBEYXRhQWNjZXNzLmNvbm5lY3QoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY29ubmVjdCAoKTogTW9uZ29vc2UuQ29ubmVjdGlvbiB7XG4gICAgICAgIGlmKHRoaXMubW9uZ29vc2VJbnN0YW5jZSkgcmV0dXJuIHRoaXMubW9uZ29vc2VJbnN0YW5jZTtcblxuICAgICAgICB0aGlzLm1vbmdvb3NlQ29ubmVjdGlvbiAgPSBNb25nb29zZS5jb25uZWN0aW9uO1xuICAgICAgICB0aGlzLm1vbmdvb3NlQ29ubmVjdGlvbi5vbmNlKFwib3BlblwiLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3RlZCB0byBtb25nb2RiLlwiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5tb25nb29zZUluc3RhbmNlID0gTW9uZ29vc2UuY29ubmVjdChDb25zdGFudHMuREJfQ09OTkVDVElPTl9TVFJJTkcpO1xuICAgICAgICByZXR1cm4gdGhpcy5tb25nb29zZUluc3RhbmNlO1xuICAgIH1cbn1cblxuRGF0YUFjY2Vzcy5jb25uZWN0KCk7XG5leHBvcnQgPSBEYXRhQWNjZXNzOyJdfQ==
