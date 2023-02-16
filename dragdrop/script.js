$(document).ready(function() {
    // Set the options as draggable elements
    $(".option").draggable({
        helper: "clone",
        stop: function(event, ui) {
            // Check if the draggable element has been dropped in a valid droppable element
            if($(this).data('dropped') === true) {
                // Append the draggable element to the droppable element
                $(ui.helper).appendTo(ui.helper.data('dropped-in'));
                // Remove the clone class
                $(ui.helper).removeClass('clone');
                // Disable the draggable element
                $(ui.helper).draggable('disable');
            }
        }
    });
    // Set the drop boxes as droppable elements
    $(".drop-box").droppable({
        drop: function(event, ui) {
            var optionId = ui.draggable.attr("id");
            var targetId = event.target.id;
            var correct = $(this).data('correct');
    
            if (ui.draggable.data('correct') === true) {
                // center the dropped item in the drop box
                ui.draggable.position({
                    my: "center",
                    at: "center",
                    of: $(this)
                });
    
                $("#result").html("CORRECT!");
                $("#result").css("color", "green");
            } else {
                $("#result").html("INCORRECT.");
                $("#result").css("color", "red");
            }
        },
        position: "center"
    });
    
});
