"use strict";
/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
var DataAccess = require("../DataAccess");
var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;
var HeroSchema = (function () {
    function HeroSchema() {
    }
    Object.defineProperty(HeroSchema, "schema", {
        get: function () {
            var schema = mongoose.Schema({
                name: {
                    type: String,
                    required: true
                },
                power: {
                    type: String,
                    required: true
                },
                amountPeopleSaved: {
                    type: Number,
                    required: true
                }
            });
            return schema;
        },
        enumerable: true,
        configurable: true
    });
    return HeroSchema;
}());
var schema = mongooseConnection.model("Heroes", HeroSchema.schema);
"";
module.exports = schema;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXRhQWNjZXNzL3NjaGVtYXMvSGVyb1NjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7QUFFSCwwQ0FBNkM7QUFHN0MsSUFBSSxRQUFRLEdBQUcsVUFBVSxDQUFDLGdCQUFnQixDQUFDO0FBQzNDLElBQUksa0JBQWtCLEdBQUcsVUFBVSxDQUFDLGtCQUFrQixDQUFDO0FBRXZEO0lBQUE7SUFvQkEsQ0FBQztJQWxCRyxzQkFBVyxvQkFBTTthQUFqQjtZQUNJLElBQUksTUFBTSxHQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUM7Z0JBQzFCLElBQUksRUFBRztvQkFDSCxJQUFJLEVBQUUsTUFBTTtvQkFDWixRQUFRLEVBQUUsSUFBSTtpQkFDakI7Z0JBQ0QsS0FBSyxFQUFFO29CQUNILElBQUksRUFBRSxNQUFNO29CQUNaLFFBQVEsRUFBRSxJQUFJO2lCQUNqQjtnQkFDRCxpQkFBaUIsRUFBRTtvQkFDZixJQUFJLEVBQUUsTUFBTTtvQkFDWixRQUFRLEVBQUUsSUFBSTtpQkFDakI7YUFDSixDQUFDLENBQUM7WUFFSCxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ2xCLENBQUM7OztPQUFBO0lBQ0wsaUJBQUM7QUFBRCxDQXBCQSxBQW9CQyxJQUFBO0FBQ0QsSUFBSSxNQUFNLEdBQUcsa0JBQWtCLENBQUMsS0FBSyxDQUFhLFFBQVEsRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDL0QsRUFBRSxDQUFBO0FBQWxCLGlCQUFTLE1BQU0sQ0FBQyIsImZpbGUiOiJhcHAvZGF0YUFjY2Vzcy9zY2hlbWFzL0hlcm9TY2hlbWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgTW9pei5LYWNod2FsYSBvbiAxNS0wNi0yMDE2LlxuICovXG5cbmltcG9ydCBEYXRhQWNjZXNzID0gcmVxdWlyZSgnLi4vRGF0YUFjY2VzcycpO1xuaW1wb3J0IElIZXJvTW9kZWwgPSByZXF1aXJlKFwiLi8uLi8uLi9tb2RlbC9pbnRlcmZhY2VzL0hlcm9Nb2RlbFwiKTtcblxudmFyIG1vbmdvb3NlID0gRGF0YUFjY2Vzcy5tb25nb29zZUluc3RhbmNlO1xudmFyIG1vbmdvb3NlQ29ubmVjdGlvbiA9IERhdGFBY2Nlc3MubW9uZ29vc2VDb25uZWN0aW9uO1xuXG5jbGFzcyBIZXJvU2NoZW1hIHtcblxuICAgIHN0YXRpYyBnZXQgc2NoZW1hICgpIHtcbiAgICAgICAgdmFyIHNjaGVtYSA9ICBtb25nb29zZS5TY2hlbWEoe1xuICAgICAgICAgICAgbmFtZSA6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwb3dlcjoge1xuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFtb3VudFBlb3BsZVNhdmVkOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBzY2hlbWE7XG4gICAgfVxufVxudmFyIHNjaGVtYSA9IG1vbmdvb3NlQ29ubmVjdGlvbi5tb2RlbDxJSGVyb01vZGVsPihcIkhlcm9lc1wiLCBIZXJvU2NoZW1hLnNjaGVtYSk7XG5leHBvcnQgPSBzY2hlbWE7XCJcIiJdfQ==
