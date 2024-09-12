document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const activityType = document.getElementById('activity-type').value;
    const imageFile = document.getElementById('image-upload').files[0];

    if (!activityType || !imageFile) {
        alert('Please select an activity type and upload an image.');
        return;
    }

    analyzeImage(activityType, imageFile);
});

/**
     * Analyzes an image based on the specified activity type and displays the result.
     *
     * This function updates the content of a designated HTML element to indicate that
     * the analysis is in progress and simulates a delay before displaying the result.
     * After the analysis is complete, it calls the `render3DModel` function to visualize
     * the results.
     *
     * @param {string} activityType - The type of activity being analyzed (e.g., construction, renovation).
     * @param {File} imageFile - The image file to be analyzed.
     *
     * @throws {Error} Throws an error if the `resultDiv` element is not found in the document.
     *
     * @example
     * // Example usage:
     * analyzeImage('construction', myImageFile);
     */
function analyzeImage(activityType, imageFile) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Analyzing the ${activityType}...`;

    setTimeout(() => {
        resultDiv.innerHTML = `<strong>Result:</strong> The stage of construction is in its early phase of ${activityType}.`;
        render3DModel();
    }, 2000); // Simulated delay
}

/**
     * Initializes and renders a 3D model using the Three.js library.
     * This function sets up a WebGL renderer, creates a scene with a rotating cube,
     * and continuously renders the scene to the specified canvas element.
     *
     * @function render3DModel
     * @throws {Error} Throws an error if the canvas element with id '3d-model' is not found.
     * 
     * @example
     * // Call this function to start rendering the 3D model
     * render3DModel();
     */
function render3DModel() {
    const canvas = document.getElementById('3d-model');
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const animate = function () {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
    };

    animate();
}

document.getElementById('generate-historic-report').addEventListener('click', function() {
    const historicReportDiv = document.getElementById('historic-report');
    historicReportDiv.innerHTML = "Comparing with previous records, the construction progress is up by 15% over the last 2 weeks.";
});

document.getElementById('generate-automation-report').addEventListener('click', function() {
    const automationReportDiv = document.getElementById('automation-report');
    automationReportDiv.innerHTML = "Automation Report: Automated checks suggest that the current phase aligns with the project timeline.";
});

document.getElementById('support-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const question = document.getElementById('support-question').value;
    const responseDiv = document.getElementById('support-response');

    setTimeout(() => {
        responseDiv.innerHTML = `<strong>Support Response:</strong> We received your question: "${question}". Our team will respond shortly.`;
    }, 1000); // Simulated delay
});
