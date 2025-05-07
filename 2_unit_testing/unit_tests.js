// Example unit tests for Media Manager functions

function testAddMedia() {
    mediaList = []; // reset list
    addMedia('Test Title', 'Test Type', 'Test Description');
    console.assert(mediaList.length === 1, 'Add Media Failed');
}

function testDeleteMedia() {
    mediaList = [{title: 'To Delete', type: 'Book', description: 'Temp'}];
    deleteMedia('To Delete');
    console.assert(mediaList.length === 0, 'Delete Media Failed');
}

function runUnitTests() {
    testAddMedia();
    testDeleteMedia();
    document.getElementById('unit-test-results').innerText = "All Unit Tests Executed. Check Console for Results.";
}

runUnitTests();