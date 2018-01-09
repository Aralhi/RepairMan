"use strict";
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXRhQWNjZXNzL3NjaGVtYXMvSGVyb1NjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMENBQTZDO0FBRzdDLElBQUksUUFBUSxHQUFHLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQztBQUMzQyxJQUFJLGtCQUFrQixHQUFHLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQztBQUV2RDtJQUFBO0lBb0JBLENBQUM7SUFsQkcsc0JBQVcsb0JBQU07YUFBakI7WUFDSSxJQUFJLE1BQU0sR0FBSSxRQUFRLENBQUMsTUFBTSxDQUFDO2dCQUMxQixJQUFJLEVBQUc7b0JBQ0gsSUFBSSxFQUFFLE1BQU07b0JBQ1osUUFBUSxFQUFFLElBQUk7aUJBQ2pCO2dCQUNELEtBQUssRUFBRTtvQkFDSCxJQUFJLEVBQUUsTUFBTTtvQkFDWixRQUFRLEVBQUUsSUFBSTtpQkFDakI7Z0JBQ0QsaUJBQWlCLEVBQUU7b0JBQ2YsSUFBSSxFQUFFLE1BQU07b0JBQ1osUUFBUSxFQUFFLElBQUk7aUJBQ2pCO2FBQ0osQ0FBQyxDQUFDO1lBRUgsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNsQixDQUFDOzs7T0FBQTtJQUNMLGlCQUFDO0FBQUQsQ0FwQkEsQUFvQkMsSUFBQTtBQUNELElBQUksTUFBTSxHQUFHLGtCQUFrQixDQUFDLEtBQUssQ0FBYSxRQUFRLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQy9ELEVBQUUsQ0FBQTtBQUFsQixpQkFBUyxNQUFNLENBQUMiLCJmaWxlIjoiYXBwL2RhdGFBY2Nlc3Mvc2NoZW1hcy9IZXJvU2NoZW1hLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERhdGFBY2Nlc3MgPSByZXF1aXJlKCcuLi9EYXRhQWNjZXNzJyk7XG5pbXBvcnQgSUhlcm9Nb2RlbCA9IHJlcXVpcmUoXCIuLy4uLy4uL21vZGVsL2ludGVyZmFjZXMvSGVyb01vZGVsXCIpO1xuXG52YXIgbW9uZ29vc2UgPSBEYXRhQWNjZXNzLm1vbmdvb3NlSW5zdGFuY2U7XG52YXIgbW9uZ29vc2VDb25uZWN0aW9uID0gRGF0YUFjY2Vzcy5tb25nb29zZUNvbm5lY3Rpb247XG5cbmNsYXNzIEhlcm9TY2hlbWEge1xuXG4gICAgc3RhdGljIGdldCBzY2hlbWEgKCkge1xuICAgICAgICB2YXIgc2NoZW1hID0gIG1vbmdvb3NlLlNjaGVtYSh7XG4gICAgICAgICAgICBuYW1lIDoge1xuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBvd2VyOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYW1vdW50UGVvcGxlU2F2ZWQ6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHNjaGVtYTtcbiAgICB9XG59XG52YXIgc2NoZW1hID0gbW9uZ29vc2VDb25uZWN0aW9uLm1vZGVsPElIZXJvTW9kZWw+KFwiSGVyb2VzXCIsIEhlcm9TY2hlbWEuc2NoZW1hKTtcbmV4cG9ydCA9IHNjaGVtYTtcIlwiIl19
