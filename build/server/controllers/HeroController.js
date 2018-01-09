"use strict";
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL0hlcm9Db250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSw2REFBZ0U7QUFJaEU7SUFBQTtJQWlGQSxDQUFDO0lBL0VHLCtCQUFNLEdBQU4sVUFBTyxHQUFvQixFQUFFLEdBQXFCO1FBQzlDLElBQUksQ0FBQztZQUVELElBQUksSUFBSSxHQUEyQixHQUFHLENBQUMsSUFBSSxDQUFDO1lBQzVDLElBQUksWUFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7WUFDdEMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsVUFBQyxLQUFLLEVBQUUsTUFBTTtnQkFDcEMsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDO29CQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQztnQkFDdkMsSUFBSTtvQkFBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUMsU0FBUyxFQUFFLFNBQVMsRUFBQyxDQUFDLENBQUM7WUFDMUMsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBQ0QsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztZQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUMsT0FBTyxFQUFFLHVCQUF1QixFQUFDLENBQUMsQ0FBQztRQUVqRCxDQUFDO0lBQ0wsQ0FBQztJQUNELCtCQUFNLEdBQU4sVUFBTyxHQUFvQixFQUFFLEdBQXFCO1FBQzlDLElBQUksQ0FBQztZQUNELElBQUksSUFBSSxHQUEyQixHQUFHLENBQUMsSUFBSSxDQUFDO1lBQzVDLElBQUksR0FBRyxHQUFXLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1lBQ2pDLElBQUksWUFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7WUFDdEMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFF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UUFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO1lBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUMsQ0FBQyxDQUFDO1FBRWpELENBQUM7SUFDTCxDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQWpGQSxBQWlGQyxJQUFBO0FBQ0QsaUJBQVMsY0FBYyxDQUFDIiwiZmlsZSI6ImNvbnRyb2xsZXJzL0hlcm9Db250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcbmltcG9ydCBIZXJvQnVzaW5lc3MgPSByZXF1aXJlKFwiLi8uLi9hcHAvYnVzaW5lc3MvSGVyb0J1c2luZXNzXCIpO1xuaW1wb3J0IElCYXNlQ29udHJvbGxlciA9IHJlcXVpcmUoXCIuL0Jhc2VDb250cm9sbGVyXCIpO1xuaW1wb3J0IElIZXJvTW9kZWwgPSByZXF1aXJlKFwiLi8uLi9hcHAvbW9kZWwvaW50ZXJmYWNlcy9IZXJvTW9kZWxcIik7XG5cbmNsYXNzIEhlcm9Db250cm9sbGVyIGltcGxlbWVudHMgSUJhc2VDb250cm9sbGVyIDxIZXJvQnVzaW5lc3M+IHtcblxuICAgIGNyZWF0ZShyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKTogdm9pZCB7XG4gICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgIHZhciBoZXJvOiBJSGVyb01vZGVsID0gPElIZXJvTW9kZWw+cmVxLmJvZHk7XG4gICAgICAgICAgICB2YXIgaGVyb0J1c2luZXNzID0gbmV3IEhlcm9CdXNpbmVzcygpO1xuICAgICAgICAgICAgaGVyb0J1c2luZXNzLmNyZWF0ZShoZXJvLCAoZXJyb3IsIHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGVycm9yKSByZXMuc2VuZCh7XCJlcnJvclwiOiBcImVycm9yXCJ9KTtcbiAgICAgICAgICAgICAgICBlbHNlIHJlcy5zZW5kKHtcInN1Y2Nlc3NcIjogXCJzdWNjZXNzXCJ9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICByZXMuc2VuZCh7XCJlcnJvclwiOiBcImVycm9yIGluIHlvdXIgcmVxdWVzdFwifSk7XG5cbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGUocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSk6IHZvaWQge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIGhlcm86IElIZXJvTW9kZWwgPSA8SUhlcm9Nb2RlbD5yZXEuYm9keTtcbiAgICAgICAgICAgIHZhciBfaWQ6IHN0cmluZyA9IHJlcS5wYXJhbXMuX2lkO1xuICAgICAgICAgICAgdmFyIGhlcm9CdXNpbmVzcyA9IG5ldyBIZXJvQnVzaW5lc3MoKTtcbiAgICAgICAgICAgIGhlcm9CdXNpbmVzcy51cGRhdGUoX2lkLCBoZXJvLCAoZXJyb3IsIHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGVycm9yKSByZXMuc2VuZCh7XCJlcnJvclwiOiBcImVycm9yXCJ9KTtcbiAgICAgICAgICAgICAgICBlbHNlIHJlcy5zZW5kKHtcInN1Y2Nlc3NcIjogXCJzdWNjZXNzXCJ9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICByZXMuc2VuZCh7XCJlcnJvclwiOiBcImVycm9yIGluIHlvdXIgcmVxdWVzdFwifSk7XG5cbiAgICAgICAgfVxuICAgIH1cbiAgICBkZWxldGUocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSk6IHZvaWQge1xuICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICB2YXIgX2lkOiBzdHJpbmcgPSByZXEucGFyYW1zLl9pZDtcbiAgICAgICAgICAgIHZhciBoZXJvQnVzaW5lc3MgPSBuZXcgSGVyb0J1c2luZXNzKCk7XG4gICAgICAgICAgICBoZXJvQnVzaW5lc3MuZGVsZXRlKF9pZCwgKGVycm9yLCByZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICBpZihlcnJvcikgcmVzLnNlbmQoe1wiZXJyb3JcIjogXCJlcnJvclwifSk7XG4gICAgICAgICAgICAgICAgZWxzZSByZXMuc2VuZCh7XCJzdWNjZXNzXCI6IFwic3VjY2Vzc1wifSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkgIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgcmVzLnNlbmQoe1wiZXJyb3JcIjogXCJlcnJvciBpbiB5b3VyIHJlcXVlc3RcIn0pO1xuXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0cmlldmUocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSk6IHZvaWQge1xuICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICB2YXIgaGVyb0J1c2luZXNzID0gbmV3IEhlcm9CdXNpbmVzcygpO1xuICAgICAgICAgICAgaGVyb0J1c2luZXNzLnJldHJpZXZlKChlcnJvciwgcmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoZXJyb3IpIHJlcy5zZW5kKHtcImVycm9yXCI6IFwiZXJyb3JcIn0pO1xuICAgICAgICAgICAgICAgIGVsc2UgcmVzLnNlbmQocmVzdWx0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICByZXMuc2VuZCh7XCJlcnJvclwiOiBcImVycm9yIGluIHlvdXIgcmVxdWVzdFwifSk7XG5cbiAgICAgICAgfVxuICAgIH1cbiAgICBmaW5kQnlJZChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKTogdm9pZCB7XG4gICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgIHZhciBfaWQ6IHN0cmluZyA9IHJlcS5wYXJhbXMuX2lkO1xuICAgICAgICAgICAgdmFyIGhlcm9CdXNpbmVzcyA9IG5ldyBIZXJvQnVzaW5lc3MoKTtcbiAgICAgICAgICAgIGhlcm9CdXNpbmVzcy5maW5kQnlJZChfaWQsIChlcnJvciwgcmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoZXJyb3IpIHJlcy5zZW5kKHtcImVycm9yXCI6IFwiZXJyb3JcIn0pO1xuICAgICAgICAgICAgICAgIGVsc2UgcmVzLnNlbmQocmVzdWx0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICByZXMuc2VuZCh7XCJlcnJvclwiOiBcImVycm9yIGluIHlvdXIgcmVxdWVzdFwifSk7XG5cbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCA9IEhlcm9Db250cm9sbGVyOyJdfQ==
