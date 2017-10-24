"use strict";
/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
var HeroBusiness = require("./../app/business/HeroBusiness");
var HeroController = (function () {
    function HeroController() {
    }
    HeroController.prototype.create = function (req, res) {
        try {
            var hero = req.body;
            var heroBusiness = new HeroBusiness();
            heroBusiness.create(hero, function (error, result) {
                if (error)
                    res.send({ "error": "error" });
                else
                    res.send({ "success": "success" });
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    };
    HeroController.prototype.update = function (req, res) {
        try {
            var hero = req.body;
            var _id = req.params._id;
            var heroBusiness = new HeroBusiness();
            heroBusiness.update(_id, hero, function (error, result) {
                if (error)
                    res.send({ "error": "error" });
                else
                    res.send({ "success": "success" });
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    };
    HeroController.prototype.delete = function (req, res) {
        try {
            var _id = req.params._id;
            var heroBusiness = new HeroBusiness();
            heroBusiness.delete(_id, function (error, result) {
                if (error)
                    res.send({ "error": "error" });
                else
                    res.send({ "success": "success" });
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    };
    HeroController.prototype.retrieve = function (req, res) {
        try {
            var heroBusiness = new HeroBusiness();
            heroBusiness.retrieve(function (error, result) {
                if (error)
                    res.send({ "error": "error" });
                else
                    res.send(result);
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    };
    HeroController.prototype.findById = function (req, res) {
        try {
            var _id = req.params._id;
            var heroBusiness = new HeroBusiness();
            heroBusiness.findById(_id, function (error, result) {
                if (error)
                    res.send({ "error": "error" });
                else
                    res.send(result);
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    };
    return HeroController;
}());
module.exports = HeroController;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL0hlcm9Db250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRztBQUdILDZEQUFnRTtBQUloRTtJQUFBO0lBaUZBLENBQUM7SUEvRUcsK0JBQU0sR0FBTixVQUFPLEdBQW9CLEVBQUUsR0FBcUI7UUFDOUMsSUFBSSxDQUFDO1lBRUQsSUFBSSxJQUFJLEdBQTJCLEdBQUcsQ0FBQyxJQUFJLENBQUM7WUFDNUMsSUFBSSxZQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztZQUN0QyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxVQUFDLEtBQUssRUFBRSxNQUFNO2dCQUNwQyxFQUFFLENBQUEsQ0FBQyxLQUFLLENBQUM7b0JBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBQyxDQUFDO2dCQUN2QyxJQUFJO29CQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBQyxTQUFTLEVBQUUsU0FBUyxFQUFDLENBQUMsQ0FBQztZQUMxQyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO1lBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUMsQ0FBQyxDQUFDO1FBRWpELENBQUM7SUFDTCxDQUFDO0lBQ0QsK0JBQU0sR0FBTixVQUFPLEdBQW9CLEVBQUUsR0FBcUI7UUFDOUMsSUFBSSxDQUFDO1lBQ0QsSUFBSSxJQUFJLEdBQTJCLEdBQUcsQ0FBQyxJQUFJLENBQUM7WUFDNUMsSUFBSSxHQUFHLEdBQVcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDakMsSUFBSSxZQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztZQUN0QyxZQUFZLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFB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O1FBQ1AsQ0FBQztRQUNELEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7WUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFDLE9BQU8sRUFBRSx1QkFBdUIsRUFBQyxDQUFDLENBQUM7UUFFakQsQ0FBQztJQUNMLENBQUM7SUFDTCxxQkFBQztBQUFELENBakZBLEFBaUZDLElBQUE7QUFDRCxpQkFBUyxjQUFjLENBQUMiLCJmaWxlIjoiY29udHJvbGxlcnMvSGVyb0NvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgTW9pei5LYWNod2FsYSBvbiAxNS0wNi0yMDE2LlxuICovXG5cbmltcG9ydCBleHByZXNzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XG5pbXBvcnQgSGVyb0J1c2luZXNzID0gcmVxdWlyZShcIi4vLi4vYXBwL2J1c2luZXNzL0hlcm9CdXNpbmVzc1wiKTtcbmltcG9ydCBJQmFzZUNvbnRyb2xsZXIgPSByZXF1aXJlKFwiLi9CYXNlQ29udHJvbGxlclwiKTtcbmltcG9ydCBJSGVyb01vZGVsID0gcmVxdWlyZShcIi4vLi4vYXBwL21vZGVsL2ludGVyZmFjZXMvSGVyb01vZGVsXCIpO1xuXG5jbGFzcyBIZXJvQ29udHJvbGxlciBpbXBsZW1lbnRzIElCYXNlQ29udHJvbGxlciA8SGVyb0J1c2luZXNzPiB7XG5cbiAgICBjcmVhdGUocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSk6IHZvaWQge1xuICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICB2YXIgaGVybzogSUhlcm9Nb2RlbCA9IDxJSGVyb01vZGVsPnJlcS5ib2R5O1xuICAgICAgICAgICAgdmFyIGhlcm9CdXNpbmVzcyA9IG5ldyBIZXJvQnVzaW5lc3MoKTtcbiAgICAgICAgICAgIGhlcm9CdXNpbmVzcy5jcmVhdGUoaGVybywgKGVycm9yLCByZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICBpZihlcnJvcikgcmVzLnNlbmQoe1wiZXJyb3JcIjogXCJlcnJvclwifSk7XG4gICAgICAgICAgICAgICAgZWxzZSByZXMuc2VuZCh7XCJzdWNjZXNzXCI6IFwic3VjY2Vzc1wifSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkgIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgcmVzLnNlbmQoe1wiZXJyb3JcIjogXCJlcnJvciBpbiB5b3VyIHJlcXVlc3RcIn0pO1xuXG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpOiB2b2lkIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBoZXJvOiBJSGVyb01vZGVsID0gPElIZXJvTW9kZWw+cmVxLmJvZHk7XG4gICAgICAgICAgICB2YXIgX2lkOiBzdHJpbmcgPSByZXEucGFyYW1zLl9pZDtcbiAgICAgICAgICAgIHZhciBoZXJvQnVzaW5lc3MgPSBuZXcgSGVyb0J1c2luZXNzKCk7XG4gICAgICAgICAgICBoZXJvQnVzaW5lc3MudXBkYXRlKF9pZCwgaGVybywgKGVycm9yLCByZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICBpZihlcnJvcikgcmVzLnNlbmQoe1wiZXJyb3JcIjogXCJlcnJvclwifSk7XG4gICAgICAgICAgICAgICAgZWxzZSByZXMuc2VuZCh7XCJzdWNjZXNzXCI6IFwic3VjY2Vzc1wifSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkgIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgcmVzLnNlbmQoe1wiZXJyb3JcIjogXCJlcnJvciBpbiB5b3VyIHJlcXVlc3RcIn0pO1xuXG4gICAgICAgIH1cbiAgICB9XG4gICAgZGVsZXRlKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpOiB2b2lkIHtcbiAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgdmFyIF9pZDogc3RyaW5nID0gcmVxLnBhcmFtcy5faWQ7XG4gICAgICAgICAgICB2YXIgaGVyb0J1c2luZXNzID0gbmV3IEhlcm9CdXNpbmVzcygpO1xuICAgICAgICAgICAgaGVyb0J1c2luZXNzLmRlbGV0ZShfaWQsIChlcnJvciwgcmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoZXJyb3IpIHJlcy5zZW5kKHtcImVycm9yXCI6IFwiZXJyb3JcIn0pO1xuICAgICAgICAgICAgICAgIGVsc2UgcmVzLnNlbmQoe1wic3VjY2Vzc1wiOiBcInN1Y2Nlc3NcIn0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgIHJlcy5zZW5kKHtcImVycm9yXCI6IFwiZXJyb3IgaW4geW91ciByZXF1ZXN0XCJ9KTtcblxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHJpZXZlKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpOiB2b2lkIHtcbiAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgdmFyIGhlcm9CdXNpbmVzcyA9IG5ldyBIZXJvQnVzaW5lc3MoKTtcbiAgICAgICAgICAgIGhlcm9CdXNpbmVzcy5yZXRyaWV2ZSgoZXJyb3IsIHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGVycm9yKSByZXMuc2VuZCh7XCJlcnJvclwiOiBcImVycm9yXCJ9KTtcbiAgICAgICAgICAgICAgICBlbHNlIHJlcy5zZW5kKHJlc3VsdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkgIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgcmVzLnNlbmQoe1wiZXJyb3JcIjogXCJlcnJvciBpbiB5b3VyIHJlcXVlc3RcIn0pO1xuXG4gICAgICAgIH1cbiAgICB9XG4gICAgZmluZEJ5SWQocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSk6IHZvaWQge1xuICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICB2YXIgX2lkOiBzdHJpbmcgPSByZXEucGFyYW1zLl9pZDtcbiAgICAgICAgICAgIHZhciBoZXJvQnVzaW5lc3MgPSBuZXcgSGVyb0J1c2luZXNzKCk7XG4gICAgICAgICAgICBoZXJvQnVzaW5lc3MuZmluZEJ5SWQoX2lkLCAoZXJyb3IsIHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGVycm9yKSByZXMuc2VuZCh7XCJlcnJvclwiOiBcImVycm9yXCJ9KTtcbiAgICAgICAgICAgICAgICBlbHNlIHJlcy5zZW5kKHJlc3VsdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkgIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgcmVzLnNlbmQoe1wiZXJyb3JcIjogXCJlcnJvciBpbiB5b3VyIHJlcXVlc3RcIn0pO1xuXG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgPSBIZXJvQ29udHJvbGxlcjsiXX0=
