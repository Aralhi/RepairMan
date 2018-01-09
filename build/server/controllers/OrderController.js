"use strict";
var OrderBusiness = require("./../app/business/OrderBusiness");
var OrderController = (function () {
    function OrderController() {
    }
    OrderController.prototype.retrieve = function (req, res) {
        try {
            var orderBusiness = new OrderBusiness();
            orderBusiness.retrieve(function (error, result) {
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
    OrderController.prototype.find = function (req, res) {
        try {
            var orderBusiness = new OrderBusiness();
            var searchText = req.params.searchText;
            orderBusiness.find(searchText, function (error, result) {
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
    OrderController.prototype.findById = function (req, res) {
        try {
            var _id = req.params._id;
            var orderBusiness = new OrderBusiness();
            orderBusiness.findById(_id, function (error, result) {
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
    OrderController.prototype.delete = function (req, res) {
        try {
            var _id = req.params._id;
            var orderBusiness = new OrderBusiness();
            orderBusiness.delete(_id, function (error, result) {
                if (error) {
                    res.send({ error: error });
                }
                else {
                    res.send({
                        status: 'success',
                        msg: '删除成功！'
                    });
                }
            });
        }
        catch (e) {
            res.send({
                status: 'error',
                msg: '删除失败！' + e
            });
        }
    };
    OrderController.prototype.create = function (req, res) {
        try {
            var hero = req.body;
            var orderBusiness = new OrderBusiness();
            orderBusiness.create(hero, function (error, result) {
                if (error) {
                    res.send({ error: error });
                }
                else {
                    res.send({
                        status: 'success',
                        msg: '保存成功！'
                    });
                }
            });
        }
        catch (e) {
            res.send({
                status: 'error',
                msg: '保存失败！' + e
            });
        }
    };
    OrderController.prototype.update = function (req, res) {
        try {
            var hero = req.body;
            var _id = req.params._id;
            var orderBusiness = new OrderBusiness();
            orderBusiness.update(_id, hero, function (error, result) {
                if (error) {
                    res.send({ error: error });
                }
                else {
                    res.send({
                        status: 'success',
                        msg: '保存成功！'
                    });
                }
            });
        }
        catch (e) {
            res.send({
                status: 'error',
                msg: '保存失败！' + e
            });
        }
    };
    return OrderController;
}());
module.exports = OrderController;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL09yZGVyQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsK0RBQWtFO0FBR2xFO0lBQUE7SUFrSUEsQ0FBQztJQWhJQyxrQ0FBUSxHQUFSLFVBQVMsR0FBb0IsRUFBRSxHQUFxQjtRQUNsRCxJQUFJLENBQUM7WUFDSCxJQUFJLGFBQWEsR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO1lBQ3hDLGFBQWEsQ0FBQyxRQUFRLENBQUMsVUFBQyxLQUFLLEVBQUUsTUFBTTtnQkFDbkMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDVixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7Z0JBQzdCLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sR0FBRyxDQUFDLElBQUksQ0FBQzt3QkFDUCxNQUFNLEVBQUUsU0FBUzt3QkFDakIsTUFBTSxFQUFFLE1BQU07cUJBQ2YsQ0FBQyxDQUFDO2dCQUNMLENBQUM7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1gsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxDQUFDLENBQUM7UUFDL0MsQ0FBQztJQUNILENBQUM7SUFFRCw4QkFBSSxHQUFKLFVBQUssR0FBb0IsRUFBRSxHQUFxQjtRQUM5QyxJQUFJLENBQUM7WUFDSCxJQUFJLGFBQWEsR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO1lBQ3hDLElBQU0sVUFBVSxHQUFXLEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1lBQ2pELGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFVBQUMsS0FBSyxFQUFFLE1BQU07Z0JBQzNDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQ1YsR0FBRyxDQUFD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QztRQUNMLENBQUM7UUFBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1gsR0FBRyxDQUFDLElBQUksQ0FBQztnQkFDUCxNQUFNLEVBQUUsT0FBTztnQkFDZixHQUFHLEVBQUUsT0FBTyxHQUFHLENBQUM7YUFDakIsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztJQUNILENBQUM7SUFDSCxzQkFBQztBQUFELENBbElBLEFBa0lDLElBQUE7QUFDRCxpQkFBUyxlQUFlLENBQUMiLCJmaWxlIjoiY29udHJvbGxlcnMvT3JkZXJDb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElCYXNlQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vQmFzZUNvbnRyb2xsZXInKTtcbmltcG9ydCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xuaW1wb3J0IE9yZGVyQnVzaW5lc3MgPSByZXF1aXJlKCcuLy4uL2FwcC9idXNpbmVzcy9PcmRlckJ1c2luZXNzJyk7XG5pbXBvcnQgSU9yZGVyTW9kZWwgPSByZXF1aXJlKCcuLy4uL2FwcC9tb2RlbC9PcmRlck1vZGVsJyk7XG5cbmNsYXNzIE9yZGVyQ29udHJvbGxlciBpbXBsZW1lbnRzIElCYXNlQ29udHJvbGxlcjxPcmRlckJ1c2luZXNzPiB7XG5cbiAgcmV0cmlldmUocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICBsZXQgb3JkZXJCdXNpbmVzcyA9IG5ldyBPcmRlckJ1c2luZXNzKCk7XG4gICAgICBvcmRlckJ1c2luZXNzLnJldHJpZXZlKChlcnJvciwgcmVzdWx0KSA9PiB7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJlcy5zZW5kKHsgZXJyb3I6IGVycm9yIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlcy5zZW5kKHtcbiAgICAgICAgICAgIHN0YXR1czogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgcmVzdWx0OiByZXN1bHRcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmVzLnNlbmQoeyBlcnJvcjogJ2Vycm9yIGluIHlvdXIgcmVxdWVzdCcgfSk7XG4gICAgfVxuICB9XG5cbiAgZmluZChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBvcmRlckJ1c2luZXNzID0gbmV3IE9yZGVyQnVzaW5lc3MoKTtcbiAgICAgIGNvbnN0IHNlYXJjaFRleHQ6IHN0cmluZyA9IHJlcS5wYXJhbXMuc2VhcmNoVGV4dDtcbiAgICAgIG9yZGVyQnVzaW5lc3MuZmluZChzZWFyY2hUZXh0LCAoZXJyb3IsIHJlc3VsdCkgPT4ge1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXMuc2VuZCh7IGVycm9yOiBlcnJvciB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXMuc2VuZCh7XG4gICAgICAgICAgICBzdGF0dXM6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgIHJlc3VsdDogcmVzdWx0XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJlcy5zZW5kKHtcbiAgICAgICAgc3RhdHVzOiAnZXJyb3InLFxuICAgICAgICBtc2c6ICfmn6Xor6LlpLHotKXvvIEnICsgZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZmluZEJ5SWQocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICBsZXQgX2lkOiBzdHJpbmcgPSByZXEucGFyYW1zLl9pZDtcbiAgICAgIGxldCBvcmRlckJ1c2luZXNzID0gbmV3IE9yZGVyQnVzaW5lc3MoKTtcbiAgICAgIG9yZGVyQnVzaW5lc3MuZmluZEJ5SWQoX2lkLCAoZXJyb3IsIHJlc3VsdCkgPT4ge1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXMuc2VuZCh7IGVycm9yOiBlcnJvciB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXMuc2VuZCh7XG4gICAgICAgICAgICBzdGF0dXM6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgIHJlc3VsdDogcmVzdWx0XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJlcy5zZW5kKHtcbiAgICAgICAgc3RhdHVzOiAnZXJyb3InLFxuICAgICAgICBtc2c6ICfmn6Xor6LlpLHotKXvvIEnICsgZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZGVsZXRlKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgbGV0IF9pZDogc3RyaW5nID0gcmVxLnBhcmFtcy5faWQ7XG4gICAgICBsZXQgb3JkZXJCdXNpbmVzcyA9IG5ldyBPcmRlckJ1c2luZXNzKCk7XG4gICAgICBvcmRlckJ1c2luZXNzLmRlbGV0ZShfaWQsIChlcnJvciwgcmVzdWx0KSA9PiB7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJlcy5zZW5kKHsgZXJyb3I6IGVycm9yIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlcy5zZW5kKHtcbiAgICAgICAgICAgIHN0YXR1czogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgbXNnOiAn5Yig6Zmk5oiQ5Yqf77yBJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXMuc2VuZCh7XG4gICAgICAgIHN0YXR1czogJ2Vycm9yJyxcbiAgICAgICAgbXNnOiAn5Yig6Zmk5aSx6LSl77yBJyArIGVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZShyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBoZXJvOiBJT3JkZXJNb2RlbCA9IDxJT3JkZXJNb2RlbD5yZXEuYm9keTtcbiAgICAgIGxldCBvcmRlckJ1c2luZXNzID0gbmV3IE9yZGVyQnVzaW5lc3MoKTtcbiAgICAgIG9yZGVyQnVzaW5lc3MuY3JlYXRlKGhlcm8sIChlcnJvciwgcmVzdWx0KSA9PiB7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJlcy5zZW5kKHsgZXJyb3I6IGVycm9yIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlcy5zZW5kKHtcbiAgICAgICAgICAgIHN0YXR1czogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgbXNnOiAn5L+d5a2Y5oiQ5Yqf77yBJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXMuc2VuZCh7XG4gICAgICAgIHN0YXR1czogJ2Vycm9yJyxcbiAgICAgICAgbXNnOiAn5L+d5a2Y5aSx6LSl77yBJyArIGVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZShyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBoZXJvOiBJT3JkZXJNb2RlbCA9IDxJT3JkZXJNb2RlbD5yZXEuYm9keTtcbiAgICAgIGxldCBfaWQ6IHN0cmluZyA9IHJlcS5wYXJhbXMuX2lkO1xuICAgICAgbGV0IG9yZGVyQnVzaW5lc3MgPSBuZXcgT3JkZXJCdXNpbmVzcygpO1xuICAgICAgb3JkZXJCdXNpbmVzcy51cGRhdGUoX2lkLCBoZXJvLCAoZXJyb3IsIHJlc3VsdCkgPT4ge1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXMuc2VuZCh7IGVycm9yOiBlcnJvciB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXMuc2VuZCh7XG4gICAgICAgICAgICBzdGF0dXM6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgIG1zZzogJ+S/neWtmOaIkOWKn++8gSdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmVzLnNlbmQoe1xuICAgICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgICAgIG1zZzogJ+S/neWtmOWksei0pe+8gScgKyBlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbmV4cG9ydCA9IE9yZGVyQ29udHJvbGxlcjtcbiJdfQ==
