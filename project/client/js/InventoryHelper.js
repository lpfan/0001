/**
 * Created by vova on 06.10.2015.
 */
Template.inventory.helpers({
    problem: function(){
        var problems = [],
            a = Session.get("prob");
        $(".troublesList").each(function(){
            problems.push($(this).text());
        });
        if ((a !== "controlTroublesNumber1") && (a !== "controlTroublesNumber2")){
            if ((a) && (problems.indexOf(a) === -1)) {
                problems.push(a);
            }
        }
        return problems;
    }
});
