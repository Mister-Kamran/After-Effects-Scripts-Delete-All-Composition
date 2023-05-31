var compsToDelete = [];

var projectItems = app.project.items;

for (var i = projectItems.length; i >= 1; i--) {

    var item = projectItems[i];

    if (item instanceof CompItem) {

        compsToDelete.push(item);
    }
}


if (compsToDelete.length > 0) {

    app.beginUndoGroup("Kompozisiyalari sil");
    
    for (var j = 0; j < compsToDelete.length; j++) {
        compsToDelete[j].remove();
    }
    
    app.endUndoGroup();
    
    alert("butun komposionlar silindi.");
} 

else {
    alert("komposion tapilmadi.");
}
