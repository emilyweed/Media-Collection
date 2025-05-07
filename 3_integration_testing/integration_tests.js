// Example integration tests for Media Manager

function testAddAndDisplayMedia() {
    mediaList = [];
    addMedia('Integration Title', 'Movie', 'Integration Test');
    const display = displayAllMedia();
    console.assert(display.includes('Integration Title'), 'Integration Add and Display Failed');
}

function runIntegrationTests() {
    testAddAndDisplayMedia();
    document.getElementById('integration-test-results').innerText = "All Integration Tests Executed. Check Console for Results.";
}

runIntegrationTests();