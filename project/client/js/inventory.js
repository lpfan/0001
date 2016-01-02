/**
 * Created by vova on 29.09.2015.
 */
(function () {
    "use strict";

    Session.set("prob", "");
    var problems = [];
    Template.inventory.events({

        "click #cancel": function () {
            location.assign("http://localhost:3000/index.html");
            location.reload(true);
        },

        "click .form": function (event) {
            if ($(event.target).css("background-color") === "rgb(255, 0, 0)") {
                $(event.target).css("background-color", "rgb(221, 221, 221)");
            } else {
                $(event.target).css("background-color", "rgb(255, 0, 0)");
            }
        },

        "click #else": function () {
            var problem = $("#elseInput").val().trim();
            if (problem) {
                Session.set("prob", problem);
            }
            $("#elseInput").val("");
            problems.push(problem);
        },

        "click #add": function () {
            var bike = $("#bike").val().trim(),
                name = $("#name").val().trim(),
                phone = ($("#phone").val().trim()),
                deadline = $("#deadline").val().trim(),
                price = $("#price").val().trim(),
                troublesUnfinished = [],
                troublesFinished = [];
            $(".form").each(function () {
                if ($(this).css("background-color") === "rgb(255, 0, 0)") {
                    troublesUnfinished.push($(this).text());
                }
            });
            problems.forEach(function (problem) {
                troublesUnfinished.push(problem);
            });
            var newCustomer = {
                bike: bike,
                name: name,
                phone: phone,
                deadline: deadline,
                price: price,
                troublesUnfinished: troublesUnfinished,
                troublesFinished: troublesFinished,
                status: "pending"
            };
            Orders.insert(newCustomer, function (error) {
                if (error) {
                    var context = Orders.simpleSchema().namedContext(this.contextName);
                    Session.set("prob", "");
                    context.invalidKeys().map(function (data) {
                        var id = (data.name);
                        $("#" + id).css("border", "solid red");
                    });
                } else {
                    problems.splice(0, problems.length);
                    location.assign("http://localhost:3000/inventory.html");
                    location.reload(true);
                }
            });

        },

        "mousedown li": function (event) {
            var edit = $(event.target).text(), k;
            $(event.target).remove();
            if (event.which === 1) {
                var input = $("#elseInput");
                problems.splice(problems.indexOf(edit), 1);
                if (input.val().trim()) {
                    var problem = input.val().trim();
                    problems.push(problem);
                    Session.set("prob", problem);
                    input.val(edit);
                    input.focus();
                } else {
                    input.val(edit);
                    input.focus();
                    if (problems.length % 2 === 1) {
                        k = "controlTroublesNumber1";
                    } else {
                        k = "controlTroublesNumber2";
                    }
                    Session.set("prob", k);
                }
            } else {
                problems.splice(problems.indexOf(edit), 1);
                if (problems.length % 2 === 1) {
                    k = "controlTroublesNumber1";
                } else {
                    k = "controlTroublesNumber2";
                }
                Session.set("prob", k);
            }
        },
        "focus input": function (event) {
            if ($(event.target).css("border-color") === "rgb(255, 0, 0)") {
                ($(event.target).css("border", "rgb(204, 204, 204)"))
            }
        }
    });

}());
