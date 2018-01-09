"use strict";
var DataAccess = require("../DataAccess");
var timestamps = require('mongoose-timestamp');
var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;
var CustomerSchema = (function () {
    function CustomerSchema() {
    }
    Object.defineProperty(CustomerSchema, "schema", {
        get: function () {
            var schema = mongoose.Schema({
                name: { type: String, required: true },
                carNumber: { type: String, required: false },
                phone: { type: String, required: false },
                carType: { type: String, required: false },
                company: { type: String, required: false },
                remark: { type: String, required: false },
            });
            schema.plugin(timestamps);
            return schema;
        },
        enumerable: true,
        configurable: true
    });
    return CustomerSchema;
}());
var schema = mongooseConnection.model('Customers', CustomerSchema.schema);
module.exports = schema;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXRhQWNjZXNzL3NjaGVtYXMvQ3VzdG9tZXJTY2hlbWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDBDQUE2QztBQUU3QyxJQUFJLFVBQVUsR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUUvQyxJQUFJLFFBQVEsR0FBRyxVQUFVLENBQUMsZ0JBQWdCLENBQUM7QUFDM0MsSUFBSSxrQkFBa0IsR0FBRyxVQUFVLENBQUMsa0JBQWtCLENBQUM7QUFFdkQ7SUFBQTtJQWNBLENBQUM7SUFaRyxzQkFBVyx3QkFBTTthQUFqQjtZQUNJLElBQUksTUFBTSxHQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUM7Z0JBQzFCLElBQUksRUFBRyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBQztnQkFDckMsU0FBUyxFQUFHLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFDO2dCQUMzQyxLQUFLLEVBQUcsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUM7Z0JBQ3ZDLE9BQU8sRUFBRyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBQztnQkFDekMsT0FBTyxFQUFHLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFDO2dCQUN6QyxNQUFNLEVBQUcsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUM7YUFDM0MsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMxQixNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ2xCLENBQUM7OztPQUFBO0lBQ0wscUJBQUM7QUFBRCxDQWRBLEFBY0MsSUFBQTtBQUNELElBQUksTUFBTSxHQUFHLGtCQUFrQixDQUFDLEtBQUssQ0FBa0IsV0FBVyxFQUFFLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMzRixpQkFBUyxNQUFNLENBQUMiLCJmaWxlIjoiYXBwL2RhdGFBY2Nlc3Mvc2NoZW1hcy9DdXN0b21lclNjaGVtYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEYXRhQWNjZXNzID0gcmVxdWlyZSgnLi4vRGF0YUFjY2VzcycpO1xuaW1wb3J0IElDdXN0c29tZXJNb2RlbCA9IHJlcXVpcmUoJy4vLi4vLi4vbW9kZWwvQ3VzdG9tZXJNb2RlbCcpO1xudmFyIHRpbWVzdGFtcHMgPSByZXF1aXJlKCdtb25nb29zZS10aW1lc3RhbXAnKTtcblxudmFyIG1vbmdvb3NlID0gRGF0YUFjY2Vzcy5tb25nb29zZUluc3RhbmNlO1xudmFyIG1vbmdvb3NlQ29ubmVjdGlvbiA9IERhdGFBY2Nlc3MubW9uZ29vc2VDb25uZWN0aW9uO1xuXG5jbGFzcyBDdXN0b21lclNjaGVtYSB7XG5cbiAgICBzdGF0aWMgZ2V0IHNjaGVtYSAoKSB7XG4gICAgICAgIHZhciBzY2hlbWEgPSAgbW9uZ29vc2UuU2NoZW1hKHtcbiAgICAgICAgICAgIG5hbWUgOiB7dHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZX0sXG4gICAgICAgICAgICBjYXJOdW1iZXIgOiB7dHlwZTogU3RyaW5nLCByZXF1aXJlZDogZmFsc2V9LFxuICAgICAgICAgICAgcGhvbmUgOiB7dHlwZTogU3RyaW5nLCByZXF1aXJlZDogZmFsc2V9LFxuICAgICAgICAgICAgY2FyVHlwZSA6IHt0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiBmYWxzZX0sXG4gICAgICAgICAgICBjb21wYW55IDoge3R5cGU6IFN0cmluZywgcmVxdWlyZWQ6IGZhbHNlfSxcbiAgICAgICAgICAgIHJlbWFyayA6IHt0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiBmYWxzZX0sXG4gICAgICAgIH0pO1xuICAgICAgICBzY2hlbWEucGx1Z2luKHRpbWVzdGFtcHMpO1xuICAgICAgICByZXR1cm4gc2NoZW1hO1xuICAgIH1cbn1cbmxldCBzY2hlbWEgPSBtb25nb29zZUNvbm5lY3Rpb24ubW9kZWw8SUN1c3Rzb21lck1vZGVsPignQ3VzdG9tZXJzJywgQ3VzdG9tZXJTY2hlbWEuc2NoZW1hKTtcbmV4cG9ydCA9IHNjaGVtYTtcbiJdfQ==
