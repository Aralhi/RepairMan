"use strict";
var CustomerBusiness = require("./../app/business/CustomerBusiness");
var CustomerController = (function () {
    function CustomerController() {
    }
    CustomerController.prototype.retrieve = function (req, res) {
        try {
            var customerBusiness = new CustomerBusiness();
            customerBusiness.retrieve(function (error, result) {
                if (error) {
                    res.send({ error: error });
                }
                else {
                    res.send({
                        status: 'success',
                        result: result
                    });
                }
            });
        }
        catch (e) {
            res.send({ error: 'error in your request' });
        }
    };
    CustomerController.prototype.find = function (req, res) {
        try {
            var customerBusiness = new CustomerBusiness();
            var searchText = req.params.searchText;
            customerBusiness.find(searchText, function (error, result) {
                if (error) {
                    res.send({ error: error });
                }
                else {
                    res.send({
                        status: 'success',
                        result: result
                    });
                }
            });
        }
        catch (e) {
            res.send({
                status: 'error',
                msg: '查询失败！' + e
            });
        }
    };
    CustomerController.prototype.delete = function (req, res) {
        try {
            var _id = req.params._id;
            var customerBusiness = new CustomerBusiness();
            customerBusiness.delete(_id, function (error, result) {
                if (error)
                    res.send({ error: error });
                else
                    res.send({
                        status: 'success',
                        msg: '删除成功！'
                    });
            });
        }
        catch (e) {
            res.send({
                status: 'error',
                msg: '删除失败！' + e
            });
        }
    };
    CustomerController.prototype.create = function (req, res) {
        try {
            var hero = req.body;
            var customerBusiness = new CustomerBusiness();
            customerBusiness.create(hero, function (error, result) {
                if (error)
                    res.send({ error: error });
                else
                    res.send({
                        status: 'success',
                        msg: '保存成功！'
                    });
            });
        }
        catch (e) {
            res.send({
                status: 'error',
                msg: '保存失败！' + e
            });
        }
    };
    CustomerController.prototype.update = function (req, res) {
        try {
            var hero = req.body;
            var _id = req.params._id;
            var customerBusiness = new CustomerBusiness();
            customerBusiness.update(_id, hero, function (error, result) {
                if (error)
                    res.send({ error: error });
                else
                    res.send({
                        status: 'success',
                        msg: '保存成功！'
                    });
            });
        }
        catch (e) {
            res.send({
                status: 'error',
                msg: '保存失败！' + e
            });
        }
    };
    return CustomerController;
}());
module.exports = CustomerController;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL0N1c3RvbWVyQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0EscUVBQXdFO0FBRXhFO0lBQUE7SUEwR0EsQ0FBQztJQXZHQyxxQ0FBUSxHQUFSLFVBQVMsR0FBb0IsRUFBRSxHQUFxQjtRQUNsRCxJQUFJLENBQUM7WUFDSCxJQUFJLGdCQUFnQixHQUFHLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztZQUM5QyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsVUFBQyxLQUFLLEVBQUUsTUFBTTtnQkFDdEMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDVixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7Z0JBQzdCLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sR0FBRyxDQUFDLElBQUksQ0FBQzt3QkFDUCxNQUFNLEVBQUUsU0FBUzt3QkFDakIsTUFBTSxFQUFFLE1BQU07cUJBQ2YsQ0FBQyxDQUFDO2dCQUNMLENBQUM7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1gsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxDQUFDLENBQUM7UUFDL0MsQ0FBQztJQUNILENBQUM7SUFFRCxpQ0FBSSxHQUFKLFVBQUssR0FBb0IsRUFBRSxHQUFxQjtRQUM5QyxJQUFJLENBQUM7WUFDSCxJQUFJLGdCQUFnQixHQUFHLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztZQUM5QyxJQUFNLFVBQVUsR0FBVyxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztZQUNqRCxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFVBQUMsS0FBSyxFQUFFLE1BQU07Z0JBQzlDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7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Q0FBQyxLQUFLLENBQUM7b0JBQ1IsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO2dCQUM3QixJQUFJO29CQUNGLEdBQUcsQ0FBQyxJQUFJLENBQUM7d0JBQ1AsTUFBTSxFQUFFLFNBQVM7d0JBQ2pCLEdBQUcsRUFBRSxPQUFPO3FCQUNiLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDWCxHQUFHLENBQUMsSUFBSSxDQUFDO2dCQUNQLE1BQU0sRUFBRSxPQUFPO2dCQUNmLEdBQUcsRUFBRSxPQUFPLEdBQUcsQ0FBQzthQUNqQixDQUFDLENBQUM7UUFDTCxDQUFDO0lBQ0gsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0ExR0EsQUEwR0MsSUFBQTtBQUNELGlCQUFTLGtCQUFrQixDQUFDIiwiZmlsZSI6ImNvbnRyb2xsZXJzL0N1c3RvbWVyQ29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJQ3VzdG9tZXJNb2RlbCA9IHJlcXVpcmUoJy4vLi4vYXBwL21vZGVsL0N1c3RvbWVyTW9kZWwnKTtcbmltcG9ydCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xuaW1wb3J0IElCYXNlQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vQmFzZUNvbnRyb2xsZXInKTtcbmltcG9ydCBDdXN0b21lckJ1c2luZXNzID0gcmVxdWlyZSgnLi8uLi9hcHAvYnVzaW5lc3MvQ3VzdG9tZXJCdXNpbmVzcycpO1xuXG5jbGFzcyBDdXN0b21lckNvbnRyb2xsZXIgaW1wbGVtZW50cyBJQmFzZUNvbnRyb2xsZXI8Q3VzdG9tZXJCdXNpbmVzcz4ge1xuICBmaW5kQnlJZDogZXhwcmVzcy5SZXF1ZXN0SGFuZGxlcjtcblxuICByZXRyaWV2ZShyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBjdXN0b21lckJ1c2luZXNzID0gbmV3IEN1c3RvbWVyQnVzaW5lc3MoKTtcbiAgICAgIGN1c3RvbWVyQnVzaW5lc3MucmV0cmlldmUoKGVycm9yLCByZXN1bHQpID0+IHtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmVzLnNlbmQoeyBlcnJvcjogZXJyb3IgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzLnNlbmQoe1xuICAgICAgICAgICAgc3RhdHVzOiAnc3VjY2VzcycsXG4gICAgICAgICAgICByZXN1bHQ6IHJlc3VsdFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXMuc2VuZCh7IGVycm9yOiAnZXJyb3IgaW4geW91ciByZXF1ZXN0JyB9KTtcbiAgICB9XG4gIH1cbiAgXG4gIGZpbmQocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICBsZXQgY3VzdG9tZXJCdXNpbmVzcyA9IG5ldyBDdXN0b21lckJ1c2luZXNzKCk7XG4gICAgICBjb25zdCBzZWFyY2hUZXh0OiBzdHJpbmcgPSByZXEucGFyYW1zLnNlYXJjaFRleHQ7XG4gICAgICBjdXN0b21lckJ1c2luZXNzLmZpbmQoc2VhcmNoVGV4dCwgKGVycm9yLCByZXN1bHQpID0+IHtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmVzLnNlbmQoeyBlcnJvcjogZXJyb3IgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzLnNlbmQoe1xuICAgICAgICAgICAgc3RhdHVzOiAnc3VjY2VzcycsXG4gICAgICAgICAgICByZXN1bHQ6IHJlc3VsdFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXMuc2VuZCh7XG4gICAgICAgIHN0YXR1czogJ2Vycm9yJyxcbiAgICAgICAgbXNnOiAn5p+l6K+i5aSx6LSl77yBJyArIGVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGRlbGV0ZShyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBfaWQ6IHN0cmluZyA9IHJlcS5wYXJhbXMuX2lkO1xuICAgICAgbGV0IGN1c3RvbWVyQnVzaW5lc3MgPSBuZXcgQ3VzdG9tZXJCdXNpbmVzcygpO1xuICAgICAgY3VzdG9tZXJCdXNpbmVzcy5kZWxldGUoX2lkLCAoZXJyb3IsIHJlc3VsdCkgPT4ge1xuICAgICAgICBpZiAoZXJyb3IpIFxuICAgICAgICAgIHJlcy5zZW5kKHsgZXJyb3I6IGVycm9yIH0pO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgcmVzLnNlbmQoe1xuICAgICAgICAgICAgc3RhdHVzOiAnc3VjY2VzcycsXG4gICAgICAgICAgICBtc2c6ICfliKDpmaTmiJDlip/vvIEnXG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXMuc2VuZCh7XG4gICAgICAgIHN0YXR1czogJ2Vycm9yJyxcbiAgICAgICAgbXNnOiAn5Yig6Zmk5aSx6LSl77yBJyArIGVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZShyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBoZXJvOiBJQ3VzdG9tZXJNb2RlbCA9IDxJQ3VzdG9tZXJNb2RlbD5yZXEuYm9keTtcbiAgICAgIGxldCBjdXN0b21lckJ1c2luZXNzID0gbmV3IEN1c3RvbWVyQnVzaW5lc3MoKTtcbiAgICAgIGN1c3RvbWVyQnVzaW5lc3MuY3JlYXRlKGhlcm8sIChlcnJvciwgcmVzdWx0KSA9PiB7XG4gICAgICAgIGlmIChlcnJvcikgXG4gICAgICAgICAgcmVzLnNlbmQoeyBlcnJvcjogZXJyb3IgfSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICByZXMuc2VuZCh7XG4gICAgICAgICAgICBzdGF0dXM6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgIG1zZzogJ+S/neWtmOaIkOWKn++8gSdcbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJlcy5zZW5kKHtcbiAgICAgICAgc3RhdHVzOiAnZXJyb3InLFxuICAgICAgICBtc2c6ICfkv53lrZjlpLHotKXvvIEnICsgZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgbGV0IGhlcm86IElDdXN0b21lck1vZGVsID0gPElDdXN0b21lck1vZGVsPnJlcS5ib2R5O1xuICAgICAgbGV0IF9pZDogc3RyaW5nID0gcmVxLnBhcmFtcy5faWQ7XG4gICAgICBsZXQgY3VzdG9tZXJCdXNpbmVzcyA9IG5ldyBDdXN0b21lckJ1c2luZXNzKCk7XG4gICAgICBjdXN0b21lckJ1c2luZXNzLnVwZGF0ZShfaWQsIGhlcm8sIChlcnJvciwgcmVzdWx0KSA9PiB7XG4gICAgICAgIGlmIChlcnJvcikgXG4gICAgICAgICAgcmVzLnNlbmQoeyBlcnJvcjogZXJyb3IgfSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICByZXMuc2VuZCh7XG4gICAgICAgICAgICBzdGF0dXM6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgIG1zZzogJ+S/neWtmOaIkOWKn++8gSdcbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJlcy5zZW5kKHtcbiAgICAgICAgc3RhdHVzOiAnZXJyb3InLFxuICAgICAgICBtc2c6ICfkv53lrZjlpLHotKXvvIEnICsgZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5leHBvcnQgPSBDdXN0b21lckNvbnRyb2xsZXI7XG4iXX0=
