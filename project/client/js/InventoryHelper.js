/**
 * Created by vova on 06.10.2015.
 */
Template.inventory.helpers({
    problem: function(){
        var problems = [],
            a = Session.get("prob");
        $("p").each(function(){
            problems.push($(this).text());
        });
        if ((a) && (a !== "controlTroublesNumber1") && (a !== "controlTroublesNumber2") && (problems.indexOf(a) === -1)){
            problems.push(a);
            console.log(problems);
        }
        return problems;
    }
});
