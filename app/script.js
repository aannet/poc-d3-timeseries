

var canvas = d3.select("body")
    .append("svg")
    .attr("width", 500).attr("height", 500);

var circle = canvas.append("circle")
    .attr("cx", 60).attr("cy", 50)
    .attr("r", 20)
    .attr("fill", "red");

var rectangle = canvas.append("rect")
    .attr("x", 230).attr("y", 10)
    .attr("width", 100)
    .attr("height", 47)
    .attr("fill", "#3333CC");

var ligne = canvas.append('line')
    .attr({
        x1: 120,
        y1: 10,
        x2: 450,
        y2: 77,
        stroke: 'white',
        'stroke-width': '3'
    });


var donnees = [[8,'#3399FF'], [15,'#3899FF'], [3,'#3AAFF'], [7,'#333333']];

var bars = canvas.selectAll("rect")
    .data(donnees)
    .enter()
    .append("rect")
    .attr("width", function (i) { return i[0] * 20; })
    .attr("height", 50)
    .attr("y", function (i, j) { return j * 50 + 100; })
    .attr("fill", function(i) { return i[1] })
    .attr('class', 'data')
    .attr('data-fill-original', function (i) { return i[1] })
    .on('mouseover', function () {
        d3.select(this)
            .transition()
            .duration(600)
            .attr('fill', 'red');
    })
    .on('mouseout', function (i) {
        const color = d3.select(this).attr('data-fill-original');
        d3.select(this).transition()
            .duration(500)
            .attr('fill', color)
    })
    
    ;

canvas.selectAll("donnees")
    .data(donnees)
    .enter()
    .append("text")
    .text(function (d) {
        return d[0];
    })
    .attr("x", 0)
    .attr("y", function (i, j) { return j * 50 + 150 })
    .attr("font-family", "sans-serif")
    .attr("font-size", "11px")
    .attr("fill", "white");

d3.select("body").selectAll("p")
    .data(donnees)
    .enter()
    .append("p")
    .text("New paragraph!");


d3.select("#mybutton").on('click', function() {
    transition();
});


d3.select("rect.data")

function transition() {
    console.log(canvas);
    canvas.selectAll("rect.data")
    .transition()
    .duration(1000)
    .attr('fill','red');
}