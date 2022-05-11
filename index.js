pdfjsLib.getDocument('pdf/Canada.pdf').promise.then(doc => { 

    doc.getPage(1).then(page => {
        let canvasOne = document.getElementById('canvasOne');
        let context = canvasOne.getContext('2d');

        let scale = 0.7;
        let viewport = page.getViewport({scale: scale});
        canvasOne.width = viewport.width;
        canvasOne.height = viewport.height;

        page.render({
            canvasContext: context,
            viewport: viewport
        });
    })

}) 


pdfjsLib.getDocument('pdf/Ghana.pdf').promise.then(doc => {
    
    doc.getPage(1).then(page => {
        let canvasTwo = document.getElementById('canvasTwo');
        let context = canvasTwo.getContext('2d');

        let scale = 0.7;
        let viewport = page.getViewport({scale: scale});
        canvasTwo.width = viewport.width;
        canvasTwo.height = viewport.height;

        page.render({
            canvasContext: context,
            viewport: viewport
        });
    })

})

pdfjsLib.getDocument('pdf/United_States.pdf').promise.then(doc => { 
    
    doc.getPage(1).then(page => {
        let canvasThree = document.getElementById('canvasThree');
        console.log("canvasThree " + canvasThree);
        let context = canvasThree.getContext('2d');
        console.log("context " + context);

        let scale = 0.7;
        let viewport = page.getViewport({scale: scale});
        canvasThree.width = viewport.width;
        canvasThree.height = viewport.height;

        page.render({
            canvasContext: context,
            viewport: viewport
        });
    })

})